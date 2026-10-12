from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class Transaction(BaseModel):

    account_id: int
    amount: float
    transaction_type: str
    country: str
    transaction_date: Optional[datetime] = None


class RiskScore(BaseModel):

    transaction_id: int
    risk_score: int
    risk_level: str
    reason: str


class Alert(BaseModel):

    risk_event_id: int
    alert_type: str
    alert_status: str = "OPEN"


class Account(BaseModel):

    account_id: int
    account_number: str
    customer_name: str
    email: str
    status: str = "ACTIVE"