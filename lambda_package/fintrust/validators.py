from fintrust.models import Transaction


VALID_TRANSACTION_TYPES = [
    "PAYMENT",
    "TRANSFER",
    "WITHDRAWAL",
    "DEPOSIT"
]


VALID_COUNTRIES = [
    "ZA",
    "US",
    "RU",
    "CN",
    "BW",
    "NA",
    "ZM",
    "KE",
    "TZ",
    "UG"
]


def validate_amount(amount: float) -> bool:

    return amount > 0


def validate_transaction_type(
    transaction_type: str
) -> bool:

    return (
        transaction_type.upper()
        in VALID_TRANSACTION_TYPES
    )


def validate_country(
    country: str
) -> bool:

    return (
        country.upper()
        in VALID_COUNTRIES
    )


def validate_account_id(
    account_id: int
) -> bool:

    return account_id > 0


def validate_transaction(
    transaction: Transaction
):

    errors = []

    if not validate_account_id(
        transaction.account_id
    ):
        errors.append(
            "Invalid account ID."
        )

    if not validate_amount(
        transaction.amount
    ):
        errors.append(
            "Amount must be greater than zero."
        )

    if not validate_transaction_type(
        transaction.transaction_type
    ):
        errors.append(
            "Invalid transaction type."
        )

    if not validate_country(
        transaction.country
    ):
        errors.append(
            "Invalid country."
        )

    return {
        "valid": len(errors) == 0,
        "errors": errors
    }