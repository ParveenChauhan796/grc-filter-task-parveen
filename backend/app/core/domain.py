from dataclasses import dataclass
from typing import Optional
from datetime import datetime


@dataclass
class Risk:
    asset: str
    threat: str
    likelihood: int
    impact: int
    score: int
    level: str
    id: Optional[int] = None
    created_at: Optional[datetime] = None

    @staticmethod
    def calculate_score(likelihood: int, impact: int) -> int:
        return likelihood * impact

    @staticmethod
    def calculate_level(score: int) -> str:
        if 1 <= score <= 5:
            return "Low"
        elif 6 <= score <= 12:
            return "Medium"
        elif 13 <= score <= 18:
            return "High"
        elif 19 <= score <= 25:
            return "Critical"
        return "Unknown"

    @classmethod
    def create(cls, asset: str, threat: str, likelihood: int, impact: int) -> "Risk":
        score = cls.calculate_score(likelihood, impact)
        level = cls.calculate_level(score)
        return cls(
            asset=asset,
            threat=threat,
            likelihood=likelihood,
            impact=impact,
            score=score,
            level=level
        )

    def to_dict(self):
        return {
            "id": self.id,
            "asset": self.asset,
            "threat": self.threat,
            "likelihood": self.likelihood,
            "impact": self.impact,
            "score": self.score,
            "level": self.level,
            "created_at": self.created_at if self.created_at else None
        }