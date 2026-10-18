## IAM Role Matrix

| Component | AWS Service Access | Permissions |
|------------|-------------------|-------------|
| ingest.py | Amazon S3 | GetObject |
| ingest.py | Amazon SQS | SendMessage |
| ingest.py | Amazon RDS PostgreSQL | Connect |
| ingest.py | Amazon DynamoDB | PutItem |
| score.py | Amazon SQS | ReceiveMessage, DeleteMessage |
| score.py | Amazon RDS PostgreSQL | Connect |
| score.py | Amazon DynamoDB | PutItem, UpdateItem |
| query.py | Amazon RDS PostgreSQL | Read Access |
| query.py | Amazon DynamoDB | GetItem, Query |
| alert.py | Amazon SES | SendEmail |
| report.py | Amazon RDS PostgreSQL | Read Access |
| report.py | Amazon S3 | PutObject |
| CloudWatch | All Lambda Functions | Logs, Metrics, Monitoring |

---

# Security Principle

All components implement the Principle of Least Privilege (PoLP).

Users, services, and Lambda functions are granted only the minimum permissions required to perform their assigned responsibilities.

No wildcard permissions are permitted within production IAM policies.

---

# Roles

## Ingest Lambda Role

Permissions:

- s3:GetObject
- sqs:SendMessage
- dynamodb:PutItem
- rds-db:connect

Purpose:

- Read uploaded transaction files
- Validate transaction data
- Store validated records
- Trigger downstream processing

---

## Score Lambda Role

Permissions:

- sqs:ReceiveMessage
- sqs:DeleteMessage
- dynamodb:PutItem
- dynamodb:UpdateItem
- rds-db:connect

Purpose:

- Consume transaction messages
- Calculate risk scores
- Update transaction risk records

---

## Query Lambda Role

Permissions:

- dynamodb:GetItem
- dynamodb:Query
- rds-db:connect

Purpose:

- Retrieve transaction data
- Retrieve risk insights
- Support API reporting endpoints

---

## Alert Lambda Role

Permissions:

- ses:SendEmail

Purpose:

- Notify compliance teams of high-risk transactions
- Distribute automated risk alerts

---

## Report Lambda Role

Permissions:

- s3:PutObject
- rds-db:connect

Purpose:

- Generate monthly risk reports
- Export reports to Amazon S3