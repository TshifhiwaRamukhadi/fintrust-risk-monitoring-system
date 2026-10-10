from unittest.mock import patch

from fintrust.query import get_insights


@patch("fintrust.query.execute_query")
def test_get_insights(mock_query):

    mock_query.return_value = [
        ("HIGH", 5),
        ("MEDIUM", 10),
        ("LOW", 20)
    ]

    result = get_insights()

    assert result["HIGH"] == 5
    assert result["MEDIUM"] == 10
    assert result["LOW"] == 20