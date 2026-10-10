import pytest

from fintrust.report import (
    generate_monthly_report
)


@pytest.mark.integration
def test_generate_report():

    report = generate_monthly_report()

    assert report is not None