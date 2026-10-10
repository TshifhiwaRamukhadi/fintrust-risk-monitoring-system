import psycopg2

from fintrust.config import Config
from fintrust.logger import logger


def get_connection():

    logger.info(
        "Opening database connection"
    )

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

        logger.info(
            f"Query executed successfully. "
            f"Rows returned: {len(rows)}"
        )

        return rows

    except Exception as error:

        if conn:
            conn.rollback()

        logger.error(
            f"Database query failed: {error}"
        )

        raise

    finally:

        if cursor:
            cursor.close()

        if conn:
            conn.close()

        logger.info(
            "Database connection closed"
        )


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

        logger.info(
            "Non-query executed successfully"
        )

        return True

    except Exception as error:

        if conn:
            conn.rollback()

        logger.error(
            f"Database update failed: {error}"
        )

        raise

    finally:

        if cursor:
            cursor.close()

        if conn:
            conn.close()

        logger.info(
            "Database connection closed"
        )