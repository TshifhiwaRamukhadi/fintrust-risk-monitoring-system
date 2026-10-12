from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from fintrust.db import get_connection
from fintrust.s3_upload import upload_csv
from fintrust.query import get_transactions


app = FastAPI(
    title="FinTrust Risk Monitoring API",
    version="1.0.0",
    description="Cloud-Native Banking Risk Monitoring Platform"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# =====================================================
# MODELS
# =====================================================

class TransactionRequest(BaseModel):
    account_id: int
    amount: float
    transaction_type: str
    country: str


# =====================================================
# HEALTH
# =====================================================

@app.get("/")
def root():
    return {
        "application": "FinTrust Risk Monitoring API",
        "version": "1.0.0",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


# =====================================================
# TRANSACTIONS
# =====================================================

@app.get("/transactions")
def transactions():
    try:
        return get_transactions()

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )


# =====================================================
# DASHBOARD
# =====================================================

@app.get("/dashboard")
def dashboard():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            COUNT(*) AS total,
            SUM(
                CASE
                    WHEN risk_score >= 80 THEN 1
                    ELSE 0
                END
            ) AS high_risk,
            SUM(
                CASE
                    WHEN risk_score BETWEEN 50 AND 79 THEN 1
                    ELSE 0
                END
            ) AS medium_risk
        FROM risk_scores
    """)

    row = cur.fetchone()

    cur.close()
    conn.close()

    return {
        "total_transactions": row[0] or 0,
        "high_risk": row[1] or 0,
        "medium_risk": row[2] or 0
    }


# =====================================================
# QUARANTINE
# =====================================================

@app.get("/quarantine")
def quarantine():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            id,
            account_id,
            amount,
            country,
            risk_score
        FROM risk_scores
        WHERE risk_score >= 80
        ORDER BY amount DESC
    """)

    rows = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": row[0],
            "account_id": row[1],
            "amount": float(row[2]),
            "country": row[3],
            "risk_score": row[4]
        }
        for row in rows
    ]


# =====================================================
# ALERTS
# =====================================================

@app.get("/alerts")
def alerts():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            id,
            account_id,
            amount,
            country,
            risk_score
        FROM risk_scores
        WHERE risk_score >= 80
        ORDER BY id DESC
    """)

    rows = cur.fetchall()

    cur.close()
    conn.close()

    return [
        {
            "id": row[0],
            "account_id": row[1],
            "amount": float(row[2]),
            "country": row[3],
            "risk_score": row[4]
        }
        for row in rows
    ]


# =====================================================
# REPORTS
# =====================================================

@app.get("/reports/summary")
def report_summary():

    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT
            COUNT(*),
            AVG(risk_score),
            MAX(risk_score),
            SUM(amount)
        FROM risk_scores
    """)

    row = cur.fetchone()

    cur.close()
    conn.close()

    return {
        "total_transactions": row[0] or 0,
        "average_risk_score": float(row[1] or 0),
        "highest_risk_score": row[2] or 0,
        "total_amount": float(row[3] or 0)
    }


# =====================================================
# CSV UPLOAD
# =====================================================

@app.post("/upload-csv")
async def upload_csv_file(
    file: UploadFile = File(...)
):

    content = await file.read()

    result = upload_csv(
        file.filename,
        content
    )

    return result