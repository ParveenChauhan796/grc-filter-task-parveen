from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional

from app.dto.schemas import AssessRiskRequest, RiskResponse
from app.container import container
from app.core.exception import GRCException

router = APIRouter()


@router.post("/assess-risk", response_model=RiskResponse, status_code=201)
def assess_risk(request: AssessRiskRequest):
    try:
        risk = container.assess_risk_use_case.execute(
            asset=request.asset,
            threat=request.threat,
            likelihood=request.likelihood,
            impact=request.impact
        )
        return risk.to_dict()
    except GRCException as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)


@router.get("/risks", response_model=List[RiskResponse])
def get_risks(level: Optional[str] = Query(None, description="Filter by risk level")):
    try:
        risks = container.get_risks_use_case.execute(level=level)
        return [risk.to_dict() for risk in risks]
    except GRCException as e:
        raise HTTPException(status_code=e.status_code, detail=e.message)