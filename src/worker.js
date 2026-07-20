const SCORE_LEAGUES = {
  "premier-league": { id: "4328", name: "Premier League" },
  championship: { id: "4329", name: "Championship" },
  "la-liga": { id: "4335", name: "La Liga" },
  bundesliga: { id: "4331", name: "Bundesliga" },
  "serie-a": { id: "4332", name: "Serie A" },
  "ligue-1": { id: "4334", name: "Ligue 1" },
  "scottish-premiership": { id: "4330", name: "Scottish Premiership" },
};

const SCORE_SOURCE = "https://www.thesportsdb.com/api/v1/json/123";

function cleanEvent(event) {
  if (!event) return null;
  return {
    id: event.idEvent,
    home: event.strHomeTeam,
    away: event.strAwayTeam,
    homeScore: event.intHomeScore === null ? null : Number(event.intHomeScore),
    awayScore: event.intAwayScore === null ? null : Number(event.intAwayScore),
    date: event.dateEvent,
    timestamp: event.strTimestamp || `${event.dateEvent}T${event.strTime || "00:00:00"}`,
    status: event.strStatus,
    round: event.intRound ? Number(event.intRound) : null,
    venue: event.strVenue || null,
    season: event.strSeason || null,
  };
}

async function readEvents(path, leagueId) {
  const response = await fetch(`${SCORE_SOURCE}/${path}.php?id=${leagueId}`, {
    cf: { cacheEverything: true, cacheTtl: 900 },
    headers: { "User-Agent": "lastseason.co.uk scores/1.0" },
  });
  if (!response.ok) throw new Error(`Scores provider returned ${response.status}`);
  const payload = await response.json();
  return Array.isArray(payload.events) ? payload.events : [];
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": status === 200 ? "public, max-age=120, s-maxage=900, stale-while-revalidate=86400" : "no-store",
      "access-control-allow-origin": "https://lastseason.co.uk",
      "x-content-type-options": "nosniff",
    },
  });
}

function cleanNickname(value) {
  return String(value || "Archive fan").replace(/[^\p{L}\p{N} _.-]/gu, "").trim().slice(0, 24) || "Archive fan";
}

async function readLeaderboard(env, url) {
  if (!env.COMMUNITY_DB) return json({ available: false, solved: 0, averageAttempts: null, leaders: [] });
  const date = url.searchParams.get("date") || new Date().toISOString().slice(0, 10);
  const mode = url.searchParams.get("mode") || "season";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return json({ error: "Invalid date" }, 400);
  const summary = await env.COMMUNITY_DB.prepare(
    "SELECT COUNT(*) AS played, SUM(solved) AS solved, AVG(CASE WHEN solved = 1 THEN attempts END) AS averageAttempts FROM daily_scores WHERE puzzle_date = ? AND mode = ?"
  ).bind(date, mode).first();
  const leaders = await env.COMMUNITY_DB.prepare(
    "SELECT nickname, attempts FROM daily_scores WHERE puzzle_date = ? AND mode = ? AND solved = 1 ORDER BY attempts ASC, duration_ms ASC, created_at ASC LIMIT 20"
  ).bind(date, mode).all();
  return json({
    available: true,
    played: Number(summary?.played || 0),
    solved: Number(summary?.solved || 0),
    averageAttempts: summary?.averageAttempts === null ? null : Number(summary.averageAttempts),
    leaders: leaders.results || [],
  });
}

async function writeLeaderboard(request, env) {
  if (!env.COMMUNITY_DB) return json({ available: false }, 202);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  const date = String(body.date || "");
  const mode = String(body.mode || "");
  const playerId = String(body.playerId || "").slice(0, 64);
  const attempts = Number(body.attempts);
  const durationMs = Math.max(1000, Math.min(3_600_000, Number(body.durationMs) || 1000));
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !["season", "player", "missing-club"].includes(mode) || !/^[a-zA-Z0-9-]{12,64}$/.test(playerId) || !Number.isInteger(attempts) || attempts < 1 || attempts > 6) {
    return json({ error: "Invalid score" }, 400);
  }
  await env.COMMUNITY_DB.prepare(
    `INSERT INTO daily_scores (puzzle_date, mode, player_id, nickname, attempts, solved, duration_ms)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(puzzle_date, mode, player_id) DO UPDATE SET
       nickname = excluded.nickname,
       attempts = MIN(daily_scores.attempts, excluded.attempts),
       solved = MAX(daily_scores.solved, excluded.solved),
       duration_ms = MIN(daily_scores.duration_ms, excluded.duration_ms)`
  ).bind(date, mode, playerId, cleanNickname(body.nickname), attempts, body.solved ? 1 : 0, durationMs).run();
  return json({ saved: true }, 201);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/leaderboard") {
      if (request.method === "GET") return readLeaderboard(env, url);
      if (request.method === "POST") return writeLeaderboard(request, env);
      return json({ error: "Method not allowed" }, 405);
    }
    if (url.pathname === "/api/scores") {
      const slug = url.searchParams.get("league") || "premier-league";
      const league = SCORE_LEAGUES[slug];
      if (!league) return json({ error: "Unknown league" }, 400);

      try {
        const [recent, upcoming] = await Promise.all([
          readEvents("eventspastleague", league.id),
          readEvents("eventsnextleague", league.id),
        ]);
        return json({
          league: { slug, name: league.name },
          recent: recent.slice(0, 5).map(cleanEvent).filter(Boolean),
          upcoming: upcoming.slice(0, 5).map(cleanEvent).filter(Boolean),
          updatedAt: new Date().toISOString(),
          attribution: { name: "TheSportsDB", url: "https://www.thesportsdb.com/" },
        });
      } catch {
        return json({ error: "Scores are temporarily unavailable. Please try again shortly." }, 502);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
