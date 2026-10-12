import psycopg2

try:
    conn = psycopg2.connect(
        host="fintrust-postgres-db.cf8ys2i82wlz.eu-north-1.rds.amazonaws.com",
        port=5432,
        dbname="postgres",
        user="postgres",
        password="FinTrust2026!"
    )

    print("CONNECTED")

    conn.close()

except Exception as error:
    print(error)