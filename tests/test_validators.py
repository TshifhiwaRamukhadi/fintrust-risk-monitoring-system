from fintrust.validators import (
    validate_amount,
    validate_transaction_type,
    validate_country
)


def test_valid_amount():

    assert validate_amount(
        1000
    ) is True


def test_invalid_amount():

    assert validate_amount(
        -100
    ) is False


def test_valid_transaction_type():

    assert validate_transaction_type(
        "PAYMENT"
    ) is True


def test_invalid_transaction_type():

    assert validate_transaction_type(
        "CRYPTO"
    ) is False


def test_valid_country():

    assert validate_country(
        "ZA"
    ) is True