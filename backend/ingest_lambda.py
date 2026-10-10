from fintrust.ingest import process_transaction


def lambda_handler(event, context):

    return process_transaction(
        account_id=event["account_id"],
        amount=event["amount"],
        transaction_type=event["transaction_type"],
        country=event["country"]
    )