# FinTrust Risk Monitoring System Architecture

## Overview

The FinTrust Risk Monitoring System monitors banking transactions,
calculates risk scores, stores risk events, and provides reporting
capabilities.

## Architecture

```text
┌─────────────────┐
│ Frontend        │
│ HTML/CSS/JS     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ API Gateway     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Query Lambda    │
└──────┬─────┬────┘
       │     │
       ▼     ▼
┌─────────┐ ┌──────────┐
│   RDS   │ │ DynamoDB │
└─────────┘ └──────────┘

Transaction Processing

┌────────────┐
│     S3     │
└─────┬──────┘
      ▼
┌────────────┐
│ Ingest     │
│ Lambda     │
└─────┬──────┘
      ▼
┌────────────┐
│ SQS FIFO   │
└─────┬──────┘
      ▼
┌────────────┐
│ Score      │
│ Lambda     │
└─────┬──────┘
      ▼
┌────────────┐
│ PostgreSQL │
└────────────┘
```

## AWS Services

- Amazon S3
- AWS Lambda
- Amazon SQS
- Amazon RDS PostgreSQL
- Amazon DynamoDB
- Amazon API Gateway
- Amazon CloudWatch
- Amazon SES

## Security

- IAM Roles
- Least Privilege
- Encryption At Rest
- Encryption In Transit
- Audit Logging