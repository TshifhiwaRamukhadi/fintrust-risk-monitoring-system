from fintrust.models import Transaction
from fintrust.score import (
    score_transaction
)


def test_high_risk_transaction():

    transaction = Transaction(
        account_id=1,
        amount=250000,
        transaction_type="TRANSFER",
        country="RU"
    )

    result = score_transaction(
        transaction
    )

    assert result["risk_level"] == "HIGH"


def test_medium_risk_transaction():

    transaction = Transaction(
        account_id=1,
        amount=120000,
        transaction_type="PAYMENT",
        country="ZA"
    )

    result = score_transaction(
        transaction
    )

    assert result["risk_level"] == "MEDIUM"


def test_low_risk_transaction():

    transaction = Transaction(
        account_id=1,
        amount=1000,
        transaction_type="PAYMENT",
        country="ZA"
    )

    result = score_transaction(
        transaction
    )

    assert result["risk_level"] == "LOW"