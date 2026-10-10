from fintrust.models import Transaction


HIGH_RISK_COUNTRIES = [
    "RU",
    "CN"
]


def calculate_risk_score(
    transaction: Transaction
):

    score = 0

    reasons = []

    if transaction.amount >= 100000:

        score += 50

        reasons.append(
            "High-value transaction"
        )

    if transaction.country in HIGH_RISK_COUNTRIES:

        if transaction.country == "RU":

            score += 30

            reasons.append(
                "Transaction originated from Russia"
            )

        elif transaction.country == "CN":

            score += 20

            reasons.append(
                "Transaction originated from China"
            )

    if transaction.transaction_type == "TRANSFER":

        score += 10

        reasons.append(
            "Transfer transaction"
        )

    return {
        "risk_score": score,
        "reasons": reasons
    }


def determine_risk_level(
    risk_score: int
):

    if risk_score >= 80:

        return "HIGH"

    if risk_score >= 50:

        return "MEDIUM"

    return "LOW"


def score_transaction(
    transaction: Transaction
):

    result = calculate_risk_score(
        transaction
    )

    risk_level = determine_risk_level(
        result["risk_score"]
    )

    return {
        "risk_score": result["risk_score"],
        "risk_level": risk_level,
        "reason": ", ".join(
            result["reasons"]
        )
    }