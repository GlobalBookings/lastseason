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
const RESEND_API = "https://api.resend.com";
const RESEND_FROM = "Last Season <briefing@lastseason.co.uk>";
const RESEND_REPLY_TO = "jack@lastseason.co.uk";
const RESEND_TOPICS = {
  briefing: "7656cc08-ff15-4060-aec5-861a35e64eff",
  supporter: "60b0331e-8471-496c-9205-1d936493295a",
};

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

function cleanShortText(value, max = 80) {
  return String(value || "").replace(/[^\p{L}\p{N} '&().,_-]/gu, "").trim().slice(0, max);
}

function cleanEmail(value) {
  const email = String(value || "").trim().toLowerCase().slice(0, 254);
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? email : "";
}

async function resendRequest(env, path, options = {}) {
  if (!env.RESEND_API_KEY) return { ok: false, status: 0, data: null };
  try {
    const response = await fetch(`${RESEND_API}${path}`, {
      ...options,
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
        ...(options.headers || {}),
      },
    });
    const data = await response.json().catch(() => null);
    return { ok: response.ok, status: response.status, data };
  } catch (error) {
    console.error("Resend request failed", path, error);
    return { ok: false, status: 0, data: null };
  }
}

function welcomeEmail(email, briefing, supporter) {
  const chosen = [
    briefing ? "the fantasy gameweek briefing" : "",
    supporter ? "optional supporter-plan updates" : "",
  ].filter(Boolean);
  const choiceText = chosen.length > 1 ? `${chosen[0]} and ${chosen[1]}` : chosen[0];
  return {
    from: RESEND_FROM,
    to: [email],
    reply_to: RESEND_REPLY_TO,
    subject: briefing ? "You're on the Last Season fantasy briefing" : "You're on the Last Season updates list",
    text: `You're in.\n\nYou've joined ${choiceText}.\n\nStart planning here: https://lastseason.co.uk/fantasy-football/this-week/\n\nFuture briefings include an unsubscribe and preference-management link. Questions? Reply to this email.\n\nLast Season — independent football history and fantasy tools`,
    html: `<!doctype html><html><body style="margin:0;background:#f4f1e8;color:#17251f;font-family:Arial,sans-serif"><div style="max-width:600px;margin:0 auto;padding:32px 18px"><div style="background:#17251f;color:#fff;border-radius:16px 16px 0 0;padding:24px 28px"><div style="font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#d5ff54">Last Season</div><h1 style="font-size:30px;line-height:1.1;margin:10px 0 0">You're in.</h1></div><div style="background:#fff;border:1px solid #d9d4c7;border-top:0;border-radius:0 0 16px 16px;padding:28px"><p style="font-size:17px;line-height:1.6;margin-top:0">You've joined ${choiceText}.</p><p style="font-size:16px;line-height:1.6">We’ll send useful, independent guidance—not daily noise, paid rankings or false certainty.</p><p style="margin:28px 0"><a href="https://lastseason.co.uk/fantasy-football/this-week/" style="display:inline-block;background:#d5ff54;color:#17251f;text-decoration:none;font-weight:700;padding:13px 18px;border-radius:8px">Open this week’s planner</a></p><p style="font-size:13px;line-height:1.5;color:#66706b;margin-bottom:0">Future briefings include unsubscribe and preference-management links. Questions? Reply to this email.</p></div></div></body></html>`,
  };
}

async function syncResendContact(env, email, briefing, supporter, sendWelcome) {
  if (!env.RESEND_API_KEY) return false;
  const topics = [
    { id: RESEND_TOPICS.briefing, subscription: briefing ? "opt_in" : "opt_out" },
    { id: RESEND_TOPICS.supporter, subscription: supporter ? "opt_in" : "opt_out" },
  ];
  let contact = await resendRequest(env, "/contacts", {
    method: "POST",
    body: JSON.stringify({ email, unsubscribed: false, topics }),
  });

  if (!contact.ok && [409, 422].includes(contact.status)) {
    contact = await resendRequest(env, `/contacts/${encodeURIComponent(email)}`, {
      method: "PATCH",
      body: JSON.stringify({ unsubscribed: false }),
    });
    if (contact.ok) {
      const topicUpdate = await resendRequest(env, `/contacts/${encodeURIComponent(email)}/topics`, {
        method: "PATCH",
        body: JSON.stringify({ topics }),
      });
      if (!topicUpdate.ok) console.error("Resend topic update failed", topicUpdate.status, topicUpdate.data);
    }
  }

  if (!contact.ok) {
    console.error("Resend contact sync failed", contact.status, contact.data);
    return false;
  }

  if (briefing && env.RESEND_BRIEFING_SEGMENT_ID) {
    const segment = await resendRequest(
      env,
      `/contacts/${encodeURIComponent(email)}/segments/${encodeURIComponent(env.RESEND_BRIEFING_SEGMENT_ID)}`,
      { method: "POST" },
    );
    if (!segment.ok && segment.status !== 409) {
      console.error("Resend briefing segment sync failed", segment.status, segment.data);
    }
  }

  if (sendWelcome) {
    const sent = await resendRequest(env, "/emails", {
      method: "POST",
      body: JSON.stringify(welcomeEmail(email, briefing, supporter)),
    });
    if (!sent.ok) console.error("Resend welcome email failed", sent.status, sent.data);
  }
  return true;
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

async function readFantasyVotes(env, url) {
  if (!env.COMMUNITY_DB) return json({ available: false, votes: {} });
  const club = cleanShortText(url.searchParams.get("club"), 48);
  if (!/^[a-z0-9-]{2,48}$/.test(club)) return json({ error: "Invalid club" }, 400);
  const rows = await env.COMMUNITY_DB.prepare(
    "SELECT name, COUNT(*) AS votes FROM fantasy_name_votes WHERE club_slug = ? GROUP BY name ORDER BY votes DESC LIMIT 100"
  ).bind(club).all();
  return json({ available: true, votes: Object.fromEntries((rows.results || []).map((row) => [row.name, Number(row.votes || 0)])) });
}

async function writeFantasyVote(request, env) {
  if (!env.COMMUNITY_DB) return json({ available: false }, 202);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  const club = cleanShortText(body.club, 48);
  const name = cleanShortText(body.name, 80);
  const voterId = String(body.voterId || "").slice(0, 64);
  if (!/^[a-z0-9-]{2,48}$/.test(club) || name.length < 2 || !/^[a-zA-Z0-9-]{12,64}$/.test(voterId)) {
    return json({ error: "Invalid vote" }, 400);
  }
  await env.COMMUNITY_DB.prepare(
    "INSERT OR IGNORE INTO fantasy_name_votes (club_slug, name, voter_id) VALUES (?, ?, ?)"
  ).bind(club, name, voterId).run();
  const total = await env.COMMUNITY_DB.prepare(
    "SELECT COUNT(*) AS votes FROM fantasy_name_votes WHERE club_slug = ? AND name = ?"
  ).bind(club, name).first();
  return json({ saved: true, votes: Number(total?.votes || 0) }, 201);
}

async function writeFantasyInterest(request, env) {
  if (!env.COMMUNITY_DB) return json({ available: false, message: "The signup list is temporarily unavailable." }, 503);
  let body;
  try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  if (String(body.company || "").trim()) return json({ saved: true }, 201);
  const email = cleanEmail(body.email);
  const source = cleanShortText(body.source || "fantasy", 40) || "fantasy";
  const briefing = body.briefing !== false ? 1 : 0;
  const supporter = body.supporter ? 1 : 0;
  if (!email || (!briefing && !supporter)) return json({ error: "Enter a valid email and choose at least one update." }, 400);
  const existing = await env.COMMUNITY_DB.prepare(
    "SELECT email FROM fantasy_interests WHERE email = ? LIMIT 1"
  ).bind(email).first();
  await env.COMMUNITY_DB.prepare(
    `INSERT INTO fantasy_interests (email, wants_briefing, wants_supporter, source)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(email) DO UPDATE SET
       wants_briefing = MAX(fantasy_interests.wants_briefing, excluded.wants_briefing),
       wants_supporter = MAX(fantasy_interests.wants_supporter, excluded.wants_supporter),
       source = excluded.source,
       updated_at = CURRENT_TIMESTAMP,
       status = 'interested'`
  ).bind(email, briefing, supporter, source).run();
  const synced = await syncResendContact(env, email, Boolean(briefing), Boolean(supporter), !existing);
  return json({
    saved: true,
    synced,
    message: synced
      ? "You're in. Check your inbox for a welcome from Last Season."
      : "You're in. Your preferences have been saved.",
  }, 201);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/leaderboard") {
      if (request.method === "GET") return readLeaderboard(env, url);
      if (request.method === "POST") return writeLeaderboard(request, env);
      return json({ error: "Method not allowed" }, 405);
    }
    if (url.pathname === "/api/fantasy-name-vote") {
      if (request.method === "GET") return readFantasyVotes(env, url);
      if (request.method === "POST") return writeFantasyVote(request, env);
      return json({ error: "Method not allowed" }, 405);
    }
    if (url.pathname === "/api/fantasy-interest") {
      if (request.method === "POST") return writeFantasyInterest(request, env);
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
