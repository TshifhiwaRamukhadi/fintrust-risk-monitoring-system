# Lambda Functions

## 1. Ingest Lambda

Responsibilities:

- Validate files
- Parse CSV
- Send messages to SQS

## 2. Score Lambda

Responsibilities:

- Calculate risk score
- Insert PostgreSQL records
- Store DynamoDB events

## 3. Query Lambda

Responsibilities:

- Return API results
- Generate dashboard data

## 4. Report Lambda

Responsibilities:

- Generate monthly reports
- Export JSON
- Export CSV
```