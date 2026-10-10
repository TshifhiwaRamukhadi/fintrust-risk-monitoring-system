import psycopg2

from fintrust.config import Config


def get_connection():

    return psycopg2.connect(
        host=Config.DB_HOST,
        port=Config.DB_PORT,
        database=Config.DB_NAME,
        user=Config.DB_USER,
        password=Config.DB_PASSWORD
    )


def execute_query(
    query: str,
    params: tuple = None
):

    conn = None
    cursor = None

    try:

        conn = get_connection()

        cursor = conn.cursor()

        cursor.execute(
            query,
            params
        )

        rows = cursor.fetchall()

        conn.commit()

        return rows

    except Exception as error:

        if conn:
            conn.rollback()

        raise error

    finally:

        if cursor:
            cursor.close()

        if conn:
            conn.close()


def execute_non_query(
    query: str,
    params: tuple = None
):

    conn = None
    cursor = None

    try:

        conn = get_connection()

        cursor = conn.cursor()

        cursor.execute(
            query,
            params
        )

        conn.commit()

        return True

    except Exception as error:

        if conn:
            conn.rollback()

        raise error

    finally:

        if cursor:
            cursor.close()

        if conn:
            conn.close()