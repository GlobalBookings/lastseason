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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
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
