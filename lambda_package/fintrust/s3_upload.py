import boto3

s3 = boto3.client("s3")

RAW_BUCKET = "fintrust-raw-756921148973"


def upload_csv(file_name, file_content):

    s3.put_object(
        Bucket=RAW_BUCKET,
        Key=file_name,
        Body=file_content
    )

    return {
        "success": True,
        "bucket": RAW_BUCKET,
        "file": file_name
    }