from app.adapters.database import Database
from app.adapters.repository import SQLiteRiskRepository
from app.core.usecases import AssessRiskUseCase, GetRisksUseCase


class Container:
    def __init__(self):
        self.database = Database()
        self.risk_repository = SQLiteRiskRepository(self.database)
        self.assess_risk_use_case = AssessRiskUseCase(self.risk_repository)
        self.get_risks_use_case = GetRisksUseCase(self.risk_repository)


container = Container()