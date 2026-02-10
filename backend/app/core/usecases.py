from typing import List, Optional
from app.core.domain import Risk
from app.core.ports import RiskRepository
from app.core.exception import ValidationException


class AssessRiskUseCase:
    def __init__(self, repository: RiskRepository):
        self.repository = repository

    def execute(self, asset: str, threat: str, likelihood: int, impact: int) -> Risk:
        if not asset or not asset.strip():
            raise ValidationException("Asset name is required")

        if not threat or not threat.strip():
            raise ValidationException("Threat description is required")

        if not isinstance(likelihood, int) or not (1 <= likelihood <= 5):
            raise ValidationException("Likelihood must be an integer between 1 and 5")

        if not isinstance(impact, int) or not (1 <= impact <= 5):
            raise ValidationException("Impact must be an integer between 1 and 5")

        risk = Risk.create(
            asset=asset.strip(),
            threat=threat.strip(),
            likelihood=likelihood,
            impact=impact
        )

        return self.repository.save(risk)


class GetRisksUseCase:
    def __init__(self, repository: RiskRepository):
        self.repository = repository

    def execute(self, level: Optional[str] = None) -> List[Risk]:
        if level and level not in ["Low", "Medium", "High", "Critical"]:
            raise ValidationException(
                "Invalid level. Must be one of: Low, Medium, High, Critical"
            )

        return self.repository.find_all(level=level)