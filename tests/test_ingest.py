from unittest.mock import patch

from fintrust.ingest import (
    process_transaction
)


@patch(
    "fintrust.ingest.put_event"
)
@patch(
    "fintrust.ingest.get_connection"
)
def test_process_transaction(
    mock_connection,
    mock_put_event
):

    mock_conn = mock_connection.return_value

    mock_cursor = mock_conn.cursor.return_value

    mock_cursor.fetchone.side_effect = [
        [1],
        [1]
    ]

    result = process_transaction(
        account_id=1,
        amount=1000,
        transaction_type="PAYMENT",
        country="ZA"
    )

    assert result["success"] is True