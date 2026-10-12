import csv
import json
from datetime import datetime

from fintrust.db import execute_query


def generate_monthly_report():

    query = """
    SELECT
        a.account_id,
        a.customer_id,
        a.account_type,
        a.status,
        t.transaction_id,
        t.amount,
        t.transaction_type,
        t.country,
        r.risk_level,
        r.risk_score
    FROM accounts a
    JOIN transactions t
        ON a.account_id = t.account_id
    LEFT JOIN risk_events r
        ON t.transaction_id = r.transaction_id
    ORDER BY t.transaction_date DESC;
    """

    rows = execute_query(query)

    report = []

    for row in rows:

        report.append(
            {
                "account_id": row[0],
                "customer_id": row[1],
                "account_type": row[2],
                "status": row[3],
                "transaction_id": row[4],
                "amount": float(row[5]),
                "transaction_type": row[6],
                "country": row[7],
                "risk_level": row[8],
                "risk_score": row[9]
            }
        )

    return report


def export_report_json(filename=None):

    if filename is None:

        filename = (
            f"monthly_report_"
            f"{datetime.now():%Y%m%d}.json"
        )

    report = generate_monthly_report()

    with open(
        filename,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            report,
            file,
            indent=4
        )

    return filename


def export_report_csv(filename=None):

    if filename is None:

        filename = (
            f"monthly_report_"
            f"{datetime.now():%Y%m%d}.csv"
        )

    report = generate_monthly_report()

    if not report:

        return filename

    with open(
        filename,
        "w",
        newline="",
        encoding="utf-8"
    ) as file:

        writer = csv.DictWriter(
            file,
            fieldnames=report[0].keys()
        )

        writer.writeheader()
        writer.writerows(report)

    return filename