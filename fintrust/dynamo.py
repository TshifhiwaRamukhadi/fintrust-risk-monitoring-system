import boto3

from fintrust.config import Config


dynamodb = boto3.resource(
    "dynamodb",
    region_name=Config.AWS_REGION
)

table = dynamodb.Table(
    Config.DYNAMODB_TABLE
)


def put_event(
    account_id: int,
    transaction_id: int,
    risk_level: str,
    risk_score: int
):

    table.put_item(
        Item={
            "account_id": str(account_id),
            "transaction_id": str(transaction_id),
            "risk_level": risk_level,
            "risk_score": risk_score
        }
    )

    return True


def get_event(
    account_id: int,
    transaction_id: int
):

    response = table.get_item(
        Key={
            "account_id": str(account_id),
            "transaction_id": str(transaction_id)
        }
    )

    return response.get(
        "Item"
    )


def query_account_events(
    account_id: int
):

    response = table.query(
        KeyConditionExpression=
        boto3.dynamodb.conditions.Key(
            "account_id"
        ).eq(
            str(account_id)
        )
    )

    return response.get(
        "Items",
        []
    )