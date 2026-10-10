-- ============================================
-- FLAG ACCOUNT FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION flag_account(
    p_account_id INTEGER,
    p_reason TEXT
)

RETURNS VOID

LANGUAGE plpgsql

AS
$$

DECLARE

    v_latest_transaction INTEGER;

BEGIN

    -- Update account status

    UPDATE accounts
    SET status = 'FLAGGED'
    WHERE account_id = p_account_id;

    -- Retrieve latest transaction

    SELECT transaction_id
    INTO v_latest_transaction
    FROM transactions
    WHERE account_id = p_account_id
    ORDER BY transaction_date DESC
    LIMIT 1;

    -- Create risk event

    INSERT INTO risk_events
    (
        transaction_id,
        risk_level,
        risk_score,
        reason
    )
    VALUES
    (
        v_latest_transaction,
        'HIGH',
        100,
        p_reason
    );

END;

$$;