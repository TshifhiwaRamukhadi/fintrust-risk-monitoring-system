-- ============================================
-- MONTHLY ACCOUNT SUMMARY
-- RUNNING BALANCE USING WINDOW FUNCTIONS
-- ============================================

SELECT

    a.account_id,
    a.account_number,
    a.customer_name,

    t.transaction_id,
    t.transaction_date,
    t.transaction_type,
    t.amount,

    SUM(t.amount) OVER (
        PARTITION BY a.account_id
        ORDER BY t.transaction_date
        ROWS UNBOUNDED PRECEDING
    ) AS running_balance

FROM accounts a

INNER JOIN transactions t
ON a.account_id = t.account_id

ORDER BY
    a.account_id,
    t.transaction_date;