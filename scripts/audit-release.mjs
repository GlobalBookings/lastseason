import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const site = "https://lastseason.co.uk";
const required = [
  "/",
  "/scores/",
  "/premier-league/",
  "/premier-league/2025-26/",
  "/championship/2025-26/",
  "/bundesliga/2025-26/",
  "/serie-a/2025-26/",
  "/la-liga/2025-26/",
  "/ligue-1/2025-26/",
  "/compare/",
  "/compare/arsenal-2025-26-vs-invincibles-2003-04/",
  "/football-shirts/",
  "/daily/",
  "/games/",
  "/games/player-path/",
  "/games/missing-club/",
  "/on-this-day/",
  "/fantasy-football/",
  "/fantasy-football/squad-builder/",
  "/fantasy-football/fixture-planner/",
  "/fantasy-football/captain-picker/",
  "/fantasy-football/team-name-generator/",
  "/fantasy-football/team-names/",
  "/fantasy-football/gameweek-1/",
  "/fantasy-football/transfer-planner/",
  "/fantasy-football/updates/",
];

function outputPath(urlPath) {
  const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (clean === "/") return join(dist, "index.html");
  if (clean.endsWith("/")) return join(dist, clean, "index.html");
  return join(dist, clean);
}

const errors = [];
const sitemapFiles = readdirSync(dist).filter((name) => /^sitemap-\d+\.xml$/.test(name));
const sitemap = sitemapFiles.map((name) => readFileSync(join(dist, name), "utf8")).join("\n");

for (const urlPath of required) {
  const file = outputPath(urlPath);
  if (!existsSync(file)) {
    errors.push(`Missing required output: ${urlPath}`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const canonical = `<link rel="canonical" href="${site}${urlPath}">`;
  if (!html.includes(canonical)) errors.push(`Missing self-canonical: ${urlPath}`);
  if (/name="robots" content="[^"]*noindex/i.test(html)) errors.push(`Required page is noindex: ${urlPath}`);
  if (!sitemap.includes(`<loc>${site}${urlPath}</loc>`)) errors.push(`Required page absent from sitemap: ${urlPath}`);
}

const htmlFiles = readdirSync(dist, { recursive: true })
  .filter((entry) => typeof entry === "string" && entry.endsWith(".html"));
for (const entry of htmlFiles) {
  const file = join(dist, entry);
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) {
    const href = match[1];
    if (href.startsWith("//") || href.includes("{")) continue;
    if (!existsSync(outputPath(href))) errors.push(`${relative(dist, file)} links to missing ${href}`);
  }
}

if (errors.length) {
  console.error(`Release audit failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Release audit passed: ${required.length} launch pages and ${htmlFiles.length} generated HTML files checked.`);
