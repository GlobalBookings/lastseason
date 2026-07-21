import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const outputDirectory = join(process.cwd(), "public", "og");

const cards = [
  {
    file: "lastseason.png",
    eyebrow: "THE COMPLETE FOOTBALL ARCHIVE",
    lines: ["Every finished season.", "One place."],
    subtitle: "Final tables · top scorers · records · tools",
    accent: "#71e69e",
    glow: "#1c8d5c",
    badge: "ARCHIVE",
  },
  {
    file: "scores.png",
    eyebrow: "SCORES, FIXTURES & FORM",
    lines: ["Follow today.", "Understand the season."],
    subtitle: "Current scores with the historical context behind them",
    accent: "#ff6b57",
    glow: "#b93429",
    badge: "LIVE",
  },
  {
    file: "tools.png",
    eyebrow: "FREE FOOTBALL TOOLS",
    lines: ["Turn football data", "into an answer."],
    subtitle: "Compare seasons · calculate tables · explore club history",
    accent: "#79b7ff",
    glow: "#315ea8",
    badge: "TOOLS",
  },
  {
    file: "fantasy.png",
    eyebrow: "INDEPENDENT 2026/27 PLANNING LAB",
    lines: ["Make a smarter", "fantasy plan."],
    subtitle: "Advice and data — not another fantasy game",
    accent: "#b7ff5a",
    glow: "#7c49e8",
    badge: "FANTASY",
  },
  {
    file: "fantasy-squad-builder.png",
    eyebrow: "SMART SQUAD ASSISTANT",
    lines: ["Build a smarter", "first draft."],
    subtitle: "15 players · fixtures · evidence · planning value",
    accent: "#b7ff5a",
    glow: "#4eaa77",
    badge: "SQUAD",
  },
  {
    file: "fantasy-fixture-planner.png",
    eyebrow: "GAMEWEEKS 1–6",
    lines: ["See the run.", "Find the rotation."],
    subtitle: "Every club · clear difficulty ratings · useful pairings",
    accent: "#b7ff5a",
    glow: "#347cc8",
    badge: "FIXTURES",
  },
  {
    file: "fantasy-captain-picker.png",
    eyebrow: "CAPTAIN DECISION HELPER",
    lines: ["Choose the armband", "for the right reasons."],
    subtitle: "Evidence · opponent · venue · minutes confidence",
    accent: "#b7ff5a",
    glow: "#d49b27",
    badge: "CAPTAIN",
  },
  {
    file: "fantasy-team-names.png",
    eyebrow: "CURATED TEAM-NAME LAB",
    lines: ["Your mini-league", "deserves a better name."],
    subtitle: "Funny · clean · club-specific · copy-ready",
    accent: "#b7ff5a",
    glow: "#a449d0",
    badge: "TEAM NAMES",
  },
  {
    file: "fantasy-planner.png",
    eyebrow: "YOUR PRE-SEASON CONTROL ROOM",
    lines: ["Pressure-test", "every tempting move."],
    subtitle: "Compare · shortlist · plan · revisit",
    accent: "#b7ff5a",
    glow: "#4c64d8",
    badge: "PLANNER",
  },
];

const escapeXml = (value) => value.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
})[character]);

function buildCard(card) {
  const [firstLine, secondLine] = card.lines.map(escapeXml);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#07131c"/>
          <stop offset="1" stop-color="#132b37"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="${card.glow}" stop-opacity=".72"/>
          <stop offset="1" stop-color="${card.glow}" stop-opacity="0"/>
        </radialGradient>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#fff" fill-opacity=".08"/>
        </pattern>
      </defs>
      <rect width="1200" height="630" fill="url(#background)"/>
      <rect width="1200" height="630" fill="url(#dots)"/>
      <circle cx="1055" cy="116" r="330" fill="url(#glow)"/>
      <circle cx="1032" cy="105" r="192" fill="none" stroke="${card.accent}" stroke-opacity=".18" stroke-width="2"/>
      <circle cx="1032" cy="105" r="126" fill="none" stroke="#fff" stroke-opacity=".09" stroke-width="2"/>
      <path d="M820 45h314v540H820z M820 315h314 M977 45v540 M820 185h92a65 65 0 0 1 0-130 M1134 445h-92a65 65 0 0 0 0 130" fill="none" stroke="#fff" stroke-opacity=".065" stroke-width="2"/>

      <g transform="translate(68 56)">
        <rect width="62" height="62" rx="15" fill="#0b1620" stroke="#fff" stroke-opacity=".16"/>
        <path d="M17 13v36h18" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M47 18c-3.8-4.3-13.7-4.4-17.2.2-3.6 4.8-.2 9.2 7.6 11.1 7.8 1.9 11.1 6.5 8.3 12.1-3 6-13.3 7.2-18.4 2" fill="none" stroke="#71e69e" stroke-width="6.5" stroke-linecap="round"/>
      </g>
      <text x="148" y="98" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="31" font-weight="800" letter-spacing="-1.4">last<tspan fill="#71e69e" font-weight="500">season</tspan></text>
      <rect x="68" y="168" width="7" height="25" rx="3.5" fill="${card.accent}"/>
      <text x="92" y="189" fill="${card.accent}" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="800" letter-spacing="3.2">${escapeXml(card.eyebrow)}</text>
      <text x="64" y="299" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="76" font-weight="800" letter-spacing="-3.8">${firstLine}</text>
      <text x="64" y="383" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="76" font-weight="800" letter-spacing="-3.8">${secondLine}</text>
      <text x="68" y="456" fill="#b7c6ce" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="400">${escapeXml(card.subtitle)}</text>
      <g transform="translate(68 520)">
        <rect width="190" height="48" rx="24" fill="${card.accent}"/>
        <text x="95" y="31" text-anchor="middle" fill="#09141d" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="800" letter-spacing="1.4">${escapeXml(card.badge)}</text>
      </g>
      <text x="1132" y="552" text-anchor="end" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700">lastseason.co.uk</text>
      <text x="1132" y="580" text-anchor="end" fill="#8fa3ae" font-family="Arial,Helvetica,sans-serif" font-size="17">Football data worth coming back to.</text>
    </svg>`;
}

await mkdir(outputDirectory, { recursive: true });
for (const card of cards) {
  const outputPath = join(outputDirectory, card.file);
  await sharp(Buffer.from(buildCard(card)))
    .png({ compressionLevel: 9, palette: true, quality: 94 })
    .toFile(outputPath);
  console.log(`Generated ${outputPath}`);
}
