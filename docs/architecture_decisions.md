# FinTrust Architecture Decisions

## PostgreSQL

PostgreSQL was chosen as the primary relational database because it provides strong ACID compliance, supports complex SQL queries, and aligns with the AWS RDS PostgreSQL deployment target specified for the project.

---

## DynamoDB

DynamoDB was selected for storing risk scores and event logs due to its high performance, scalability, and low-latency access for frequently queried risk data.

---

## Amazon S3

Amazon S3 is used to store uploaded transaction files and generated reports. It provides durable, scalable, and cost-effective object storage.

---

## AWS Lambda

Lambda functions are used to implement serverless processing of transactions. This reduces infrastructure management overhead and supports event-driven architecture.

---

## Amazon SQS

Amazon SQS is used to decouple transaction ingestion from risk scoring. This improves system resilience and prevents data loss during peak processing periods.

---

## Amazon SES

Amazon SES is used to send email alerts for high-risk transactions and suspicious activities detected by the scoring engine.

---

## Amazon EventBridge

EventBridge is used to schedule periodic reporting functions and automate recurring business processes.

---

## Amazon CloudWatch

CloudWatch provides centralized logging, monitoring, metrics, and alerting for all Lambda functions and AWS services used by the system.

---

## AWS IAM

IAM implements the Principle of Least Privilege and ensures that each service can access only the resources required to perform its function.