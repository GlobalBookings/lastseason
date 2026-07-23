CREATE TABLE IF NOT EXISTS fantasy_interests (
  email TEXT PRIMARY KEY,
  wants_briefing INTEGER NOT NULL DEFAULT 1,
  wants_supporter INTEGER NOT NULL DEFAULT 0,
  source TEXT NOT NULL DEFAULT 'fantasy',
  consent_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL DEFAULT 'interested'
);

CREATE INDEX IF NOT EXISTS fantasy_interests_status
  ON fantasy_interests (status, wants_briefing, wants_supporter);

CREATE TABLE IF NOT EXISTS fantasy_name_votes (
  club_slug TEXT NOT NULL,
  name TEXT NOT NULL,
  voter_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (club_slug, name, voter_id)
);

CREATE INDEX IF NOT EXISTS fantasy_name_votes_totals
  ON fantasy_name_votes (club_slug, name);
