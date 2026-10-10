# S3 Setup Guide

## Bucket Name

fintrust-transactions

## Purpose

Store uploaded CSV transaction files before processing.

## Bucket Structure

```text
fintrust-transactions/

├── incoming/
├── processed/
└── archive/
```

## Upload Flow

User
 ↓
S3 Bucket
 ↓
Ingest Lambda

## Security

- Block Public Access enabled
- Server-side encryption enabled
- Versioning enabled
- Least privilege IAM policy

## Lifecycle Policy

incoming/  -> 30 days
processed/ -> 90 days
archive/   -> 365 days
```