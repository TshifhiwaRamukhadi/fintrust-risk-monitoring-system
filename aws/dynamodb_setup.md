# DynamoDB Setup

## Table

fintrust-events

## Partition Key

account_id

## Sort Key

transaction_id

## Stored Data

- Risk Events
- Audit Events
- Alert History

## Example Item

{
  "account_id": "1",
  "transaction_id": "101",
  "risk_level": "HIGH",
  "risk_score": 90
}
```