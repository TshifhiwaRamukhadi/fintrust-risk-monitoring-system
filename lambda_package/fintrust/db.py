# fintrust/db.py

import psycopg2

from fintrust.config import Config
from fintrust.logger import logger


def get_connection():

    try:

        connection = psycopg2.connect(
            host=Config.DB_HOST,
            port=int(Config.DB_PORT),
            user=Config.DB_USER,
            password=Config.DB_PASSWORD,
            dbname=Config.DB_NAME
        )

        logger.info(
            "PostgreSQL connection established."
        )

        return connection

    except Exception as error:

        logger.error(
            f"Database connection failed: {error}"
        )

        raise


def execute_query(
    query: str,
    params: tuple = None
):

    connection = None
    cursor = None

    try:

        connection = get_connection()

        cursor = connection.cursor()

        cursor.execute(
            query,
            params
        )

        rows = cursor.fetchall()

        logger.info(
            f"Query executed successfully. Rows returned: {len(rows)}"
        )

        return rows

    except Exception as error:

        logger.error(
            f"Query execution failed: {error}"
        )

        raise

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()


def execute_non_query(
    query: str,
    params: tuple = None
):

    connection = None
    cursor = None

    try:

        connection = get_connection()

        cursor = connection.cursor()

        cursor.execute(
            query,
            params
        )

        connection.commit()

        logger.info(
            "Database transaction committed successfully."
        )

        return True

    except Exception as error:

        if connection:
            connection.rollback()

        logger.error(
            f"Database transaction failed: {error}"
        )

        raise

    finally:

        if cursor:
            cursor.close()

        if connection:
            connection.close()