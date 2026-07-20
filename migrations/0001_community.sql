CREATE TABLE IF NOT EXISTS daily_scores (
  puzzle_date TEXT NOT NULL,
  mode TEXT NOT NULL,
  player_id TEXT NOT NULL,
  nickname TEXT NOT NULL,
  attempts INTEGER NOT NULL,
  solved INTEGER NOT NULL DEFAULT 0,
  duration_ms INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (puzzle_date, mode, player_id)
);

CREATE INDEX IF NOT EXISTS daily_scores_rank
  ON daily_scores (puzzle_date, mode, solved DESC, attempts ASC, duration_ms ASC);
