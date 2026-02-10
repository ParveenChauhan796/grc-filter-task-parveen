import sqlite3
from contextlib import contextmanager


class Database:
    def __init__(self, db_path: str = "risks.db"):
        self.db_path = db_path
        self._initialize_database()

    def _initialize_database(self):
        with self.get_connection() as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS risks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    asset TEXT NOT NULL,
                    threat TEXT NOT NULL,
                    likelihood INTEGER NOT NULL,
                    impact INTEGER NOT NULL,
                    score INTEGER NOT NULL,
                    level TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()

    @contextmanager
    def get_connection(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        try:
            yield conn
        finally:
            conn.close()