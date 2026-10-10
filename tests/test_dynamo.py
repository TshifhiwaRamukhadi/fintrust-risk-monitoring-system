from unittest.mock import patch

from fintrust.dynamo import (
    put_event
)


@patch(
    "fintrust.dynamo.table.put_item"
)
def test_put_event(
    mock_put_item
):

    result = put_event(
        account_id=1,
        transaction_id=1,
        risk_level="HIGH",
        risk_score=90
    )

    assert result is True