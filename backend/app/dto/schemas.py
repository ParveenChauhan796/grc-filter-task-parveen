from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class AssessRiskRequest(BaseModel):
    asset: str = Field(..., min_length=1, description="Asset name")
    threat: str = Field(..., min_length=1, description="Threat description")
    likelihood: int = Field(..., ge=1, le=5, description="Likelihood (1-5)")
    impact: int = Field(..., ge=1, le=5, description="Impact (1-5)")


class RiskResponse(BaseModel):
    id: int
    asset: str
    threat: str
    likelihood: int
    impact: int
    score: int
    level: str
    created_at: Optional[str] = None