from fintrust.report import generate_monthly_report


def test_generate_report():

    report = generate_monthly_report()

    assert len(report) > 0