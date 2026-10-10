from fintrust.models import Transaction
from fintrust.validators import validate_transaction
from fintrust.score import score_transaction
from fintrust.db import get_connection
from fintrust.dynamo import put_event


def process_transaction(
    account_id: int,
    amount: float,
    transaction_type: str,
    country: str
):

    transaction = Transaction(
        account_id=account_id,
        amount=amount,
        transaction_type=transaction_type,
        country=country
    )

    validation = validate_transaction(
        transaction
    )

    if not validation["valid"]:

        return {
            "success": False,
            "errors": validation["errors"]
        }

    risk_result = score_transaction(
        transaction
    )

    conn = None
    cursor = None

    try:

        conn = get_connection()

        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO transactions
            (
                account_id,
                amount,
                transaction_type,
                country,
                status
            )
            VALUES
            (
                %s,
                %s,
                %s,
                %s,
                %s
            )
            RETURNING transaction_id
            """,
            (
                account_id,
                amount,
                transaction_type,
                country,
                "QUARANTINED"
                if risk_result["risk_level"]
                == "HIGH"
                else "APPROVED"
            )
        )

        transaction_id = cursor.fetchone()[0]

        cursor.execute(
            """
            INSERT INTO risk_events
            (
                transaction_id,
                risk_level,
                risk_score,
                reason
            )
            VALUES
            (
                %s,
                %s,
                %s,
                %s
            )
            RETURNING risk_event_id
            """,
            (
                transaction_id,
                risk_result["risk_level"],
                risk_result["risk_score"],
                risk_result["reason"]
            )
        )

        risk_event_id = cursor.fetchone()[0]

        conn.commit()

        put_event(
            account_id=account_id,
            transaction_id=transaction_id,
            risk_level=risk_result["risk_level"],
            risk_score=risk_result["risk_score"]
        )

        return {
            "success": True,
            "transaction_id": transaction_id,
            "risk_event_id": risk_event_id,
            "risk_level": risk_result["risk_level"],
            "risk_score": risk_result["risk_score"]
        }

    except Exception as error:

        if conn:
            conn.rollback()

        return {
            "success": False,
            "error": str(error)
        }

    finally:

        if cursor:
            cursor.close()

        if conn:
            conn.close()