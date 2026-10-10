# FinTrust Risk Monitoring System User Guide

## Introduction

FinTrust Risk Monitoring System is designed to monitor banking transactions,
calculate risk scores, generate alerts and provide compliance reporting.

---

## Home Page

Navigate to:

index.html

Features:

- System Overview
- Dashboard Access
- Transaction Access

---

## Dashboard

Navigate to:

dashboard.html

Functions:

- View Total Transactions
- View High Risk Transactions
- View Medium Risk Transactions
- View Low Risk Transactions
- View Risk Distribution Chart
- View Recent Alerts

---

## Transactions

Navigate to:

transactions.html

Functions:

- View Transaction Records
- Search by Account Number
- Filter by Risk Level
- Sort by Amount
- Sort by Risk Rating
- Export Transactions to CSV

---

## Risk Classification

### High Risk

Characteristics:

- Large Transaction Values
- High Risk Countries
- Unusual Activity Patterns

### Medium Risk

Characteristics:

- Moderate Transaction Values
- Unusual Transaction Frequency

### Low Risk

Characteristics:

- Normal Banking Activity
- Expected Transaction Patterns

---

## Reporting

Available Reports:

- Risk Report
- Monthly Summary
- Compliance Monitoring

---

## Troubleshooting

### Dashboard Not Loading

Verify:

- Browser Supports JavaScript
- Required Files Exist

### Data Not Displaying

Verify:

- dashboard.js Loaded
- transactions.js Loaded

### Tests

Run:

pytest -m "not integration"
```