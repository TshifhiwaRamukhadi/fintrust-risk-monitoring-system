from unittest.mock import patch

from fintrust.alert import (
    send_high_risk_alert
)


@patch(
    "fintrust.alert.ses_client.send_email"
)
def test_send_alert(
    mock_send_email
):

    mock_send_email.return_value = {
        "MessageId":
        "123456"
    }

    result = send_high_risk_alert(
        transaction_id=1,
        risk_score=90,
        reason="High Value RU Transfer"
    )

    assert result["success"] is True