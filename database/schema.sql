DROP TABLE IF EXISTS alerts CASCADE;
DROP TABLE IF EXISTS risk_events CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    account_number VARCHAR(20) UNIQUE NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    country VARCHAR(10) NOT NULL,
    transaction_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',

    CONSTRAINT fk_transaction_account
    FOREIGN KEY (account_id)
    REFERENCES accounts(account_id)
);

CREATE TABLE risk_events (
    risk_event_id SERIAL PRIMARY KEY,
    transaction_id INTEGER NOT NULL,
    risk_level VARCHAR(20) NOT NULL,
    risk_score INTEGER NOT NULL,
    reason TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_risk_transaction
    FOREIGN KEY (transaction_id)
    REFERENCES transactions(transaction_id)
);

CREATE TABLE alerts (
    alert_id SERIAL PRIMARY KEY,
    risk_event_id INTEGER NOT NULL,
    alert_type VARCHAR(50) NOT NULL,
    alert_status VARCHAR(20) NOT NULL DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_alert_risk
    FOREIGN KEY (risk_event_id)
    REFERENCES risk_events(risk_event_id)
);

CREATE INDEX idx_transactions_account
ON transactions(account_id);

CREATE INDEX idx_transactions_date
ON transactions(transaction_date);

CREATE INDEX idx_risk_level
ON risk_events(risk_level);