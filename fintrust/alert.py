import boto3

from fintrust.config import Config


ses_client = boto3.client(
    "ses",
    region_name=Config.AWS_REGION
)


def send_high_risk_alert(
    transaction_id: int,
    risk_score: int,
    reason: str
):

    subject = (
        f"FinTrust Alert - Transaction "
        f"{transaction_id}"
    )

    body = f"""
High Risk Transaction Detected

Transaction ID: {transaction_id}
Risk Score: {risk_score}

Reason:
{reason}

Please investigate immediately.
"""

    try:

        response = ses_client.send_email(
            Source=Config.ALERT_EMAIL,
            Destination={
                "ToAddresses": [
                    Config.ALERT_EMAIL
                ]
            },
            Message={
                "Subject": {
                    "Data": subject
                },
                "Body": {
                    "Text": {
                        "Data": body
                    }
                }
            }
        )

        return {
            "success": True,
            "message_id":
            response["MessageId"]
        }

    except Exception as error:

        return {
            "success": False,
            "error": str(error)
        }