import sharp from "sharp";
import { addDays, getSeasonPuzzle, isoDate } from "../../utils/games";

export function getStaticPaths() {
  const today = isoDate();
  return Array.from({ length: 60 }, (_, index) => {
    const date = addDays(today, -index);
    return { params: { date }, props: { date, puzzle: getSeasonPuzzle(date) } };
  });
}

function escapeXml(value: string): string {
  return value.replace(/[<>&"']/g, (character) => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;", '"':"&quot;", "'":"&apos;" })[character]!);
}

export async function GET({ props }: { props: { date: string; puzzle: ReturnType<typeof getSeasonPuzzle> } }) {
  const { date, puzzle } = props;
  const dateLabel = new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long", year:"numeric" });
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <rect width="1200" height="630" fill="#0b1620"/>
      <circle cx="1050" cy="80" r="330" fill="${escapeXml(puzzle.accent)}" opacity=".22"/>
      <circle cx="1080" cy="50" r="190" fill="#71e69e" opacity=".13"/>
      <rect x="70" y="66" width="64" height="64" rx="15" fill="#132737" stroke="#ffffff" stroke-opacity=".15"/>
      <path d="M87.5 79.5v36h18" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M117.5 84.2c-3.8-4.3-13.7-4.4-17.2.2-3.6 4.8-.2 9.2 7.6 11.1 7.8 1.9 11.1 6.5 8.3 12.1-3 6-13.3 7.2-18.4 2" fill="none" stroke="#71e69e" stroke-width="6.5" stroke-linecap="round"/>
      <text x="153" y="110" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="700">last<tspan fill="#71e69e" font-weight="500">season</tspan></text>
      <text x="70" y="245" fill="#71e69e" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" letter-spacing="4">ONE SEASON. SIX CLUES.</text>
      <text x="70" y="340" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="78" font-weight="800" letter-spacing="-3">Last Season Daily</text>
      <text x="70" y="405" fill="#a9bac6" font-family="Arial,Helvetica,sans-serif" font-size="30">${escapeXml(dateLabel)}</text>
      <g transform="translate(70 485)">
        ${Array.from({ length: 6 }, (_, index) => `<rect x="${index * 86}" width="70" height="10" rx="5" fill="${index === 0 ? "#71e69e" : "#344653"}"/>`).join("")}
      </g>
      <text x="70" y="565" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="600">Can you identify the mystery ${escapeXml(puzzle.category)} season?</text>
    </svg>`;
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { "content-type":"image/png", "cache-control":"public, max-age=31536000, immutable" } });
}
