-- ============================================
-- HIGH-RISK ACCOUNT REPORT
-- CTE-BASED FRAUD DETECTION QUERY
-- ============================================

WITH high_risk_transactions AS (

    SELECT
        a.account_id,
        a.account_number,
        a.customer_name,
        t.transaction_id,
        t.amount,
        t.transaction_date,
        r.risk_level

    FROM accounts a

    INNER JOIN transactions t
        ON a.account_id = t.account_id

    INNER JOIN risk_events r
        ON t.transaction_id = r.transaction_id

    WHERE r.risk_level = 'HIGH'

),

rolling_risk_window AS (

    SELECT

        account_id,
        account_number,
        customer_name,
        transaction_id,
        amount,
        transaction_date,

        COUNT(*) OVER (
            PARTITION BY account_id
            ORDER BY transaction_date
            RANGE BETWEEN INTERVAL '30 days' PRECEDING
            AND CURRENT ROW
        ) AS risk_tx_count

    FROM high_risk_transactions

)

SELECT

    account_id,
    account_number,
    customer_name,

    MAX(risk_tx_count) AS highest_risk_count,

    MIN(transaction_date) AS first_suspicious_activity,

    MAX(transaction_date) AS latest_suspicious_activity

FROM rolling_risk_window

GROUP BY

    account_id,
    account_number,
    customer_name

HAVING MAX(risk_tx_count) > 3

ORDER BY highest_risk_count DESC;