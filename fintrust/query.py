import json

from fintrust.db import execute_query


def get_transactions():

    query = """
    SELECT
        id,
        account_id,
        amount,
        transaction_type,
        country,
        risk_score
    FROM risk_scores
    ORDER BY id DESC;
    """

    rows = execute_query(query)

    transactions = []

    for row in rows:

        transactions.append(
            {
                "transaction_id": row[0],
                "account_id": row[1],
                "amount": float(row[2]),
                "transaction_type": row[3],
                "country": row[4],
                "risk_score": row[5]
            }
        )

    return transactions


def get_insights():

    query = """
    SELECT
        risk_level,
        COUNT(*)
    FROM risk_events
    GROUP BY risk_level;
    """

    rows = execute_query(query)

    insights = {}

    for row in rows:
        insights[row[0]] = row[1]

    return insights


def lambda_handler(event, context):

    path = event.get("resource", "")

    try:

        if path == "/transactions":

            body = get_transactions()

        elif path == "/insights":

            body = get_insights()

        else:

            body = {
                "message": "Route not found."
            }

        return {
            "statusCode": 200,
            "body": json.dumps(
                body,
                default=str
            )
        }

    except Exception as error:

        return {
            "statusCode": 500,
            "body": json.dumps(
                {
                    "error": str(error)
                }
            )
        }