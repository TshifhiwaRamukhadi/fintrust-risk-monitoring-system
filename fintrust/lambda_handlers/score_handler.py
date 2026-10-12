import json
import os
import psycopg2

conn = psycopg2.connect(
    host=os.environ["DB_HOST"],
    database=os.environ["DB_NAME"],
    user=os.environ["DB_USER"],
    password=os.environ["DB_PASSWORD"],
    port=os.environ["DB_PORT"]
)

def lambda_handler(event, context):

    cur = conn.cursor()

    try:
        for record in event["Records"]:

            transaction = json.loads(record["body"])

            amount = float(transaction["amount"])
            country = transaction["country"]

            risk_score = 10

            if amount > 10000:
                risk_score += 40

            if country in ["RU", "CN"]:
                risk_score += 30

            cur.execute(
                """
                INSERT INTO risk_scores (
                    account_id,
                    amount,
                    country,
                    transaction_type,
                    risk_score
                )
                VALUES (%s, %s, %s, %s, %s)
                """,
                (
                    transaction["account_id"],
                    amount,
                    country,
                    transaction["transaction_type"],
                    risk_score
                )
            )

        conn.commit()

        return {
            "statusCode": 200,
            "body": "Records inserted successfully"
        }

    except Exception as e:
        conn.rollback()
        print(f"Database error: {str(e)}")
        raise

    finally:
        cur.close()