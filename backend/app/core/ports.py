from abc import ABC, abstractmethod
from typing import List, Optional
from app.core.domain import Risk


class RiskRepository(ABC):
    @abstractmethod
    def save(self, risk: Risk) -> Risk:
        pass

    @abstractmethod
    def find_all(self, level: Optional[str] = None) -> List[Risk]:
        pass