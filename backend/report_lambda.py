from fintrust.report import (
    export_report_json
)


def lambda_handler(event, context):

    filename = export_report_json()

    return {
        "statusCode": 200,
        "body": {
            "report_file": filename
        }
    }