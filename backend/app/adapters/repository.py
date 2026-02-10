from typing import List, Optional
from app.core.domain import Risk
from app.core.ports import RiskRepository
from app.adapters.database import Database


class SQLiteRiskRepository(RiskRepository):
    def __init__(self, database: Database):
        self.database = database

    def save(self, risk: Risk) -> Risk:
        with self.database.get_connection() as conn:
            cursor = conn.execute("""
                                  INSERT INTO risks (asset, threat, likelihood, impact, score, level)
                                  VALUES (?, ?, ?, ?, ?, ?)
                                  """, (risk.asset, risk.threat, risk.likelihood, risk.impact, risk.score, risk.level))

            conn.commit()
            risk.id = cursor.lastrowid

            row = conn.execute(
                "SELECT created_at FROM risks WHERE id = ?", (risk.id,)
            ).fetchone()

            if row:
                risk.created_at = row['created_at']

            return risk

    def find_all(self, level: Optional[str] = None) -> List[Risk]:
        with self.database.get_connection() as conn:
            if level:
                rows = conn.execute(
                    "SELECT * FROM risks WHERE level = ? ORDER BY created_at DESC",
                    (level,)
                ).fetchall()
            else:
                rows = conn.execute(
                    "SELECT * FROM risks ORDER BY created_at DESC"
                ).fetchall()

            return [
                Risk(
                    id=row['id'],
                    asset=row['asset'],
                    threat=row['threat'],
                    likelihood=row['likelihood'],
                    impact=row['impact'],
                    score=row['score'],
                    level=row['level'],
                    created_at=row['created_at']
                )
                for row in rows
            ]