# FinTrust Risk Monitoring System

## Overview

FinTrust Risk Monitoring System is a cloud-native banking risk monitoring solution designed to detect suspicious transactions, calculate risk scores, generate alerts, and provide compliance reporting.

---

## Architecture

```text
CSV Upload
    ↓
Amazon S3
    ↓
Ingest Lambda
    ↓
SQS FIFO
    ↓
Score Lambda
    ↓
RDS PostgreSQL
    ↓
DynamoDB
    ↓
Query Lambda
    ↓
API Gateway
    ↓
Frontend Dashboard
```

Additional Services:

- CloudWatch
- SES
- EventBridge

---

## Features

- Transaction ingestion
- Risk scoring engine
- Compliance monitoring
- Alert generation
- Monthly reporting
- Dashboard APIs
- PostgreSQL persistence
- DynamoDB event storage

---

## Technology Stack

### Backend

- Python 3.14
- Pydantic
- psycopg2

### Database

- PostgreSQL

### Cloud

- AWS Lambda
- S3
- DynamoDB
- SQS
- API Gateway
- CloudWatch
- SES

### Testing

- pytest

---

## Project Structure

```text
fintrust-risk-monitoring-system/

├── backend/
├── database/
├── docs/
├── aws/
├── fintrust/
├── frontend/
├── tests/
└── README.md
```

---

## Running Locally

Activate virtual environment:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```powershell
pip install -r requirements.txt
```

Run tests:

```powershell
pytest
```

---

## Future Enhancements

- S3 Event Triggers
- API Gateway Deployment
- React Dashboard
- CloudWatch Dashboard
- SES Notifications
- CI/CD Pipeline