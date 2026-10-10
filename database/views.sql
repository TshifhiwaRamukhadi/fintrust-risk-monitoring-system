-- =====================================
-- COMPLIANCE DASHBOARD VIEW
-- =====================================

CREATE OR REPLACE VIEW vw_compliance_dashboard AS
SELECT
    t.transaction_id,
    a.account_number,
    a.customer_name,
    t.amount,
    t.transaction_type,
    t.country,
    t.transaction_date,
    t.status,
    r.risk_level,
    r.risk_score,
    r.reason
FROM transactions t
INNER JOIN accounts a
    ON t.account_id = a.account_id
LEFT JOIN risk_events r
    ON t.transaction_id = r.transaction_id;



-- =====================================
-- HIGH-RISK TRANSACTIONS VIEW
-- =====================================

CREATE OR REPLACE VIEW vw_high_risk_transactions AS
SELECT
    t.transaction_id,
    a.account_number,
    a.customer_name,
    t.amount,
    t.country,
    r.risk_level,
    r.risk_score,
    r.reason,
    r.created_at
FROM transactions t
INNER JOIN accounts a
    ON t.account_id = a.account_id
INNER JOIN risk_events r
    ON t.transaction_id = r.transaction_id
WHERE r.risk_level = 'HIGH';



-- =====================================
-- OPEN ALERTS VIEW
-- =====================================

CREATE OR REPLACE VIEW vw_open_alerts AS
SELECT
    al.alert_id,
    a.account_number,
    a.customer_name,
    t.transaction_id,
    t.amount,
    r.risk_level,
    al.alert_type,
    al.alert_status,
    al.created_at
FROM alerts al
INNER JOIN risk_events r
    ON al.risk_event_id = r.risk_event_id
INNER JOIN transactions t
    ON r.transaction_id = t.transaction_id
INNER JOIN accounts a
    ON t.account_id = a.account_id
WHERE al.alert_status = 'OPEN';