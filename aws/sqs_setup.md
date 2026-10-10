# SQS FIFO Queue

## Queue Name

fintrust-risk-queue.fifo

## Purpose

Decouple ingestion from risk processing.

## Message Structure

```json
{
  "transaction_id": 1,
  "account_id": 1,
  "amount": 250000,
  "country": "RU"
}
```

## Flow

S3
 ↓
Ingest Lambda
 ↓
SQS FIFO
 ↓
Score Lambda

## Benefits

- Message durability
- Retry capability
- Decoupled processing
- Ordered transaction handling
```