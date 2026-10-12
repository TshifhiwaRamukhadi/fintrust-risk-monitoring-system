import csv
import io
import json
import boto3

s3 = boto3.client("s3")
sqs = boto3.client("sqs")

QUEUE_URL = (
    "https://sqs.eu-north-1.amazonaws.com/"
    "756921148973/fintrust-risk-score.fifo"
)

def lambda_handler(event, context):

    processed = 0

    for record in event["Records"]:

        bucket = record["s3"]["bucket"]["name"]
        key = record["s3"]["object"]["key"]

        response = s3.get_object(
            Bucket=bucket,
            Key=key
        )

        content = (
            response["Body"]
            .read()
            .decode("utf-8")
        )

        reader = csv.DictReader(
            io.StringIO(content)
        )

        for row in reader:

            sqs.send_message(
                QueueUrl=QUEUE_URL,
                MessageBody=json.dumps(row),
                MessageGroupId="fintrust"
            )

            processed += 1

    return {
        "statusCode": 200,
        "processed": processed
    }