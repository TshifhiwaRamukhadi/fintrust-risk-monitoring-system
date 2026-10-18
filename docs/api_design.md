# FinTrust API Design

## 1. Health Check

### Request

```http
GET /health
```

### Response

```json
{
  "status": "healthy"
}
```

---

## 2. Get Transactions

### Request

```http
GET /transactions?account_id=1001
```

### Response

```json
[
  {
    "transaction_id": 1,
    "account_id": 1001,
    "amount": 5000.00,
    "country": "ZA"
  }
]
```

---

## 3. Get Risk Insights

### Request

```http
GET /insights
```

### Response

```json
{
  "high_risk": 12,
  "medium_risk": 35,
  "low_risk": 82
}
```

---

## 4. Upload Transactions

### Request

```http
POST /upload
```

### Response

```json
{
  "status": "accepted",
  "message": "File received"
}
```

---

## 5. Flag Account

### Request

```http
POST /flag
```

### Payload

```json
{
  "account_id": 1001,
  "reason": "High Risk Activity"
}
```

### Response

```json
{
  "status": "flagged"
}
```

---

## 6. Resolve Investigation

### Request

```http
POST /resolve
```

### Payload

```json
{
  "risk_event_id": 1
}
```

### Response

```json
{
  "status": "resolved"
}
```

---

# Authentication

All API endpoints will be secured through AWS API Gateway and IAM-based access controls.

---

# Status Codes

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 201 | Created |
| 202 | Accepted |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |