# FinTrust Security Plan

## Objective

Protect customer and transaction data through secure cloud architecture, access controls, monitoring, and compliance with POPIA.

---

## POPIA Data Classification

| Data Element | Classification | Access |
|--------------|---------------|---------|
| Customer First Name | Personal Information | Compliance Team, Fraud Team |
| Customer Last Name | Personal Information | Compliance Team, Fraud Team |
| Email Address | Personal Information | Compliance Team |
| Phone Number | Personal Information | Compliance Team |
| Account ID | Confidential | Compliance Team, Fraud Team |
| Transaction Amount | Confidential | Compliance Team, Fraud Team |
| Risk Score | Internal | Risk Monitoring Team |
| Alert Status | Internal | Compliance Team |
| Country Code | Internal | Operations Team |

### Data Protection Controls

- Personal information is stored in encrypted databases.
- Access is restricted through IAM roles and role-based access control.
- Data is transmitted using TLS encryption.
- Access reviews are performed periodically.
- POPIA data minimisation principles are applied throughout the solution.

---

## Data Quality & Validation Framework

The FinTrust Risk Monitoring System validates all incoming transaction data before it enters the processing pipeline.

Validation controls include:

- Required field validation
- Numeric amount validation
- Transaction threshold validation
- Country code validation
- Duplicate transaction detection
- Risk threshold validation
- Structured application logging

### Failed Record Workflow

Invalid Transaction
↓
Validation Failure
↓
S3 Quarantine Bucket
↓
CloudWatch Log Entry
↓
Data Steward Review

### Repeated Processing Failures

Message Processing Failure
↓
Retry Attempts
↓
Dead Letter Queue (DLQ)
↓
Investigation and Resolution

This approach ensures data quality, traceability, and operational resilience.
---

## Security Controls

### Identity and Access Management

- AWS IAM roles assigned per service
- Principle of Least Privilege
- No shared credentials
- Role-based access control

### Data Protection

- Encryption at Rest
- Encryption in Transit (TLS)
- Secure S3 Buckets
- Secure API communication

### Database Security

- Database deployed in a private subnet
- No direct public database access
- Restricted security groups
- Credentials stored in environment variables

### Logging and Monitoring

- Amazon CloudWatch Logs
- CloudWatch Metrics
- CloudWatch Alarms
- Application logging

---

## Data Lifecycle and Retention Policy

| Data Tier | Storage Location | Retention Period |
|------------|------------------|------------------|
| Hot Data | Amazon RDS PostgreSQL | 12 Months |
| Warm Data | Amazon S3 Processed Bucket | 3 Years |
| Cold Data | Amazon S3 Glacier Archive | 7 Years |
| Audit Logs | Amazon CloudWatch Logs | 1 Year |
| Monitoring Logs | Amazon CloudWatch Logs | 90 Days |

### Lifecycle Process

Hot Data
↓
Warm Data
↓
Cold Archive
↓
Secure Disposal

The retention strategy aligns with POPIA requirements and financial sector record-keeping obligations.

---

## Migration Strategy

### Migration Service

AWS Application Migration Service (MGN)

### 7 Rs Classification

Replatform

### Justification

FinTrust currently operates legacy file-based and database-driven systems.

The selected migration approach is Replatform because:

- Core business functionality remains unchanged.
- Operational overhead is reduced through managed AWS services.
- Security, scalability, and resilience are improved.
- Minimal application refactoring is required.

AWS Application Migration Service enables the migration of legacy workloads into AWS while maintaining business continuity and reducing migration risk.

---

## Compliance

- POPIA compliance
- Audit logging
- Periodic access reviews
- Data minimisation principles
- Secure retention and disposal of data

---

## Risk Register

| Risk | Probability | Impact | AWS Control |
|--------|------------|---------|------------|
| Unauthorized Access to Customer Data | Medium | High | IAM Least Privilege Policies |
| Data Exposure During Storage or Transit | Medium | High | Encryption at Rest and TLS Encryption |
| Data Loss Due to Service Failure | Low | High | Automated Backups and Multi-AZ Storage |
| Failed Transaction Ingestion | Medium | Medium | SQS Dead Letter Queue |
| Malicious File Uploads | Medium | Medium | Input Validation and S3 Quarantine Bucket |
| Application Service Failure | Low | High | CloudWatch Monitoring and Lambda Retry Logic |

### Governance Controls

1. IAM Least Privilege Access Control
2. Encryption at Rest and In Transit
3. CloudWatch Monitoring and Alerting
4. Backup and Recovery Procedures
5. Dead Letter Queue (DLQ) Management
---

## Conclusion

The FinTrust Risk Monitoring System applies security, governance, monitoring, and compliance controls to protect sensitive financial data. These controls support secure operations, regulatory compliance, and effective risk management while enabling scalable cloud-based transaction monitoring.