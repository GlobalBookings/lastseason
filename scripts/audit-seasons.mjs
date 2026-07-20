import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { transform } from "esbuild";

const root = resolve(import.meta.dirname, "..");
const includeAll = process.argv.includes("--all");
const summaryOnly = process.argv.includes("--summary");
const allFiles = execFileSync("find", ["src/data/leagues", "-mindepth", "2", "-maxdepth", "2", "-name", "*.ts"], { cwd: root, encoding: "utf8" }).trim().split("\n").filter(Boolean);

const indexSource = await readFile(resolve(root, "src/data/leagues/index.ts"), "utf8");
const { code: indexCode } = await transform(indexSource, { loader: "ts", format: "esm", target: "es2022" });
const { leagues } = await import(`data:text/javascript;base64,${Buffer.from(indexCode).toString("base64")}`);
const configuredKeys = new Set(leagues.flatMap((league) => league.seasons.map((season) => `${league.slug}/${season}`)));

const files = includeAll
  ? allFiles
  : allFiles.filter((file) => {
      const [leagueSlug, filename] = file.split(sep).slice(-2);
      return !configuredKeys.has(`${leagueSlug}/${filename.replace(/\.ts$/, "")}`);
    });

const results = [];

for (const file of files.sort()) {
  const absolute = resolve(root, file);
  const source = await readFile(absolute, "utf8");
  const { code } = await transform(source, { loader: "ts", format: "esm", target: "es2022" });
  const module = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
  const data = module.default;
  const [leagueSlug, filename] = file.split(sep).slice(-2);
  const season = filename.replace(/\.ts$/, "");
  const errors = [];
  const warnings = [];
  const error = (message) => errors.push(message);
  const warn = (message) => warnings.push(message);

  if (!data || typeof data !== "object") {
    error("Default export is missing.");
    results.push({ file, key: `${leagueSlug}/${season}`, errors, warnings });
    continue;
  }

  if (data.leagueSlug !== leagueSlug || data.season !== season) error("Path and season metadata do not match.");
  if (!Array.isArray(data.standings) || data.standings.length === 0) error("Standings are empty.");

  const rows = Array.isArray(data.standings) ? data.standings : [];
  const positions = rows.map((row) => row.pos);
  const expectedPositions = Array.from({ length: rows.length }, (_, index) => index + 1);
  if (JSON.stringify([...positions].sort((a, b) => a - b)) !== JSON.stringify(expectedPositions)) error("Positions are not a complete 1..N sequence.");
  if (new Set(rows.map((row) => row.clubSlug)).size !== rows.length) error("Club slugs are duplicated.");

  for (const row of rows) {
    if (row.p !== row.w + row.d + row.l) error(`${row.club}: P != W + D + L.`);
    if (row.gd !== row.gf - row.ga) error(`${row.club}: GD != GF - GA.`);
    const rawPoints = row.w * 3 + row.d;
    if (Math.abs(rawPoints - row.pts) > 12) warn(`${row.club}: points differ from 3W+D by ${row.pts - rawPoints}; check deductions or row accuracy.`);
  }

  const goalsFor = rows.reduce((sum, row) => sum + row.gf, 0);
  const goalsAgainst = rows.reduce((sum, row) => sum + row.ga, 0);
  if (goalsFor !== goalsAgainst) error(`League GF (${goalsFor}) does not equal GA (${goalsAgainst}).`);
  if (goalsFor !== data.totalGoals) error(`Headline totalGoals (${data.totalGoals}) does not equal table GF (${goalsFor}).`);
  if (rows.reduce((sum, row) => sum + row.w, 0) !== rows.reduce((sum, row) => sum + row.l, 0)) error("League wins do not equal league losses.");
  if (rows.reduce((sum, row) => sum + row.d, 0) % 2 !== 0) error("League draw count is not even.");

  if (leagueSlug !== "mls") {
    const first = [...rows].sort((a, b) => a.pos - b.pos)[0];
    if (first?.clubSlug !== data.championSlug) error("Champion does not match position 1.");
  }

  const scorers = Array.isArray(data.scorers) ? data.scorers : [];
  const maxGoals = Math.max(0, ...scorers.map((player) => player.goals));
  if (maxGoals !== data.topScorerGoals) error("Headline top-scorer total does not match scorer rows.");
  if (!scorers.some((player) => data.topScorer?.includes(player.name) && player.goals === maxGoals)) error("Headline top scorer is not represented among the joint leaders.");
  if (scorers.some((player, index) => index > 0 && player.goals > scorers[index - 1].goals)) warn("Scorer rows are not sorted by goals.");

  results.push({ file, key: `${leagueSlug}/${season}`, errors, warnings, clubs: rows.length, totalGoals: data.totalGoals, champion: data.champion, topScorer: data.topScorer, topScorerGoals: data.topScorerGoals });
}

const summary = {
  files: results.length,
  clean: results.filter((result) => result.errors.length === 0 && result.warnings.length === 0).length,
  warningsOnly: results.filter((result) => result.errors.length === 0 && result.warnings.length > 0).length,
  failing: results.filter((result) => result.errors.length > 0).length,
};

console.log(JSON.stringify(summaryOnly ? { summary } : { summary, results }, null, 2));
if (results.some((result) => result.errors.length > 0)) process.exitCode = 1;
