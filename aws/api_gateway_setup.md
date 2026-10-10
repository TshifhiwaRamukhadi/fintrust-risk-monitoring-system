# API Gateway Design

## Endpoints

GET /transactions

GET /insights

GET /health

POST /upload

POST /flag

POST /resolve

## Integrations

API Gateway
 ↓
Query Lambda
 ↓
RDS PostgreSQL

## Response Format

{
    "success": true,
    "data": []
}
```