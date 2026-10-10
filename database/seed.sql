-- =========================
-- ACCOUNTS
-- =========================

INSERT INTO accounts
(
    account_number,
    customer_name,
    email,
    status
)
VALUES
('FT100001','John Smith','john.smith@fintrust.co.za','ACTIVE'),
('FT100002','Sarah Adams','sarah.adams@fintrust.co.za','ACTIVE'),
('FT100003','Michael Brown','michael.brown@fintrust.co.za','ACTIVE'),
('FT100004','Emma Wilson','emma.wilson@fintrust.co.za','ACTIVE'),
('FT100005','David Jones','david.jones@fintrust.co.za','ACTIVE'),
('FT100006','Olivia Taylor','olivia.taylor@fintrust.co.za','ACTIVE'),
('FT100007','James Anderson','james.anderson@fintrust.co.za','ACTIVE'),
('FT100008','Sophia Thomas','sophia.thomas@fintrust.co.za','ACTIVE'),
('FT100009','Daniel Martin','daniel.martin@fintrust.co.za','ACTIVE'),
('FT100010','Emily Jackson','emily.jackson@fintrust.co.za','ACTIVE');



-- =========================
-- TRANSACTIONS
-- MONTH 1
-- =========================

INSERT INTO transactions
(
    account_id,
    amount,
    transaction_type,
    country,
    transaction_date,
    status
)
VALUES
(1,1200,'PAYMENT','ZA','2026-07-01','APPROVED'),
(1,3500,'PAYMENT','ZA','2026-07-03','APPROVED'),
(2,15000,'TRANSFER','ZA','2026-07-05','APPROVED'),
(3,50000,'TRANSFER','US','2026-07-06','APPROVED'),
(4,8000,'PAYMENT','ZA','2026-07-07','APPROVED'),
(5,125000,'TRANSFER','RU','2026-07-08','QUARANTINED'),
(6,3000,'PAYMENT','ZA','2026-07-09','APPROVED'),
(7,250000,'TRANSFER','RU','2026-07-10','QUARANTINED'),
(8,1000,'PAYMENT','ZA','2026-07-11','APPROVED'),
(9,75000,'TRANSFER','US','2026-07-12','APPROVED');



-- =========================
-- MONTH 2
-- =========================

INSERT INTO transactions
(
    account_id,
    amount,
    transaction_type,
    country,
    transaction_date,
    status
)
VALUES
(1,4000,'PAYMENT','ZA','2026-08-01','APPROVED'),
(2,22000,'TRANSFER','NA','2026-08-03','APPROVED'),
(3,95000,'TRANSFER','ZA','2026-08-05','APPROVED'),
(4,18000,'PAYMENT','BW','2026-08-06','APPROVED'),
(5,175000,'TRANSFER','CN','2026-08-07','QUARANTINED'),
(6,1250,'PAYMENT','ZA','2026-08-08','APPROVED'),
(7,240000,'TRANSFER','RU','2026-08-09','QUARANTINED'),
(8,5500,'PAYMENT','ZA','2026-08-10','APPROVED'),
(9,45000,'TRANSFER','US','2026-08-11','APPROVED'),
(10,8500,'PAYMENT','ZA','2026-08-12','APPROVED');



-- =========================
-- MONTH 3
-- =========================

INSERT INTO transactions
(
    account_id,
    amount,
    transaction_type,
    country,
    transaction_date,
    status
)
VALUES
(1,1800,'PAYMENT','ZA','2026-09-01','APPROVED'),
(2,42000,'TRANSFER','US','2026-09-02','APPROVED'),
(3,115000,'TRANSFER','RU','2026-09-03','QUARANTINED'),
(4,3000,'PAYMENT','ZA','2026-09-04','APPROVED'),
(5,500000,'TRANSFER','RU','2026-09-05','QUARANTINED'),
(6,2800,'PAYMENT','ZA','2026-09-06','APPROVED'),
(7,12000,'TRANSFER','ZA','2026-09-07','APPROVED'),
(8,6500,'PAYMENT','BW','2026-09-08','APPROVED'),
(9,130000,'TRANSFER','CN','2026-09-09','QUARANTINED'),
(10,2500,'PAYMENT','ZA','2026-09-10','APPROVED');