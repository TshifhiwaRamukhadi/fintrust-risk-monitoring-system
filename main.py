from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FinTrust Risk Monitoring System",
    version="1.0.0",
    description="Banking Risk Monitoring Platform"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def root():
    return {
        "message": "FinTrust Risk Monitoring System API",
        "version": "1.0.0",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
