import os

try:
    from dotenv import load_dotenv

    load_dotenv()

except ImportError:
    pass


class Config:

    AWS_REGION = os.getenv(
        "AWS_REGION",
        "eu-north-1"
    )

    DB_HOST = os.getenv(
        "DB_HOST",
        "localhost"
    )

    DB_PORT = int(
        os.getenv(
            "DB_PORT",
            "5432"
        )
    )

    DB_NAME = os.getenv(
        "DB_NAME",
        "fintrust"
    )

    DB_USER = os.getenv(
        "DB_USER",
        "postgres"
    )

    DB_PASSWORD = os.getenv(
        "DB_PASSWORD",
        ""
    )

    DYNAMODB_TABLE = os.getenv(
        "DYNAMODB_TABLE",
        "fintrust-events"
    )

    SQS_QUEUE_URL = os.getenv(
        "SQS_QUEUE_URL",
        ""
    )

    ALERT_EMAIL = os.getenv(
        "ALERT_EMAIL",
        ""
    )

    ENVIRONMENT = os.getenv(
        "ENVIRONMENT",
        "development"
    )