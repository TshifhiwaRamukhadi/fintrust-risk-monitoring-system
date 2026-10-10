from fintrust.models import Transaction
from fintrust.score import score_transaction


def lambda_handler(event, context):

    transaction = Transaction(
        account_id=event["account_id"],
        amount=event["amount"],
        transaction_type=event["transaction_type"],
        country=event["country"]
    )

    return score_transaction(
        transaction
    )