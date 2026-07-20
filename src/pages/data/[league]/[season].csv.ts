import type { APIRoute } from "astro";
import { getAllLoadedSeasons } from "../../../utils/data";

const seasons = getAllLoadedSeasons();

export function getStaticPaths() {
  return seasons.map((data) => ({ params: { league: data.leagueSlug, season: data.season }, props: { data } }));
}

const csvCell = (value: string | number) => `"${String(value).replaceAll('"', '""')}"`;

export const GET: APIRoute = ({ props }) => {
  const data = props.data;
  const header = ["position", "club", "played", "wins", "draws", "losses", "goals_for", "goals_against", "goal_difference", "points"];
  const rows = data.standings.map((row: any) => [row.pos, row.club, row.p, row.w, row.d, row.l, row.gf, row.ga, row.gd, row.pts]);
  const body = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
  return new Response(body, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="${data.leagueSlug}-${data.season}-table.csv"`, "Cache-Control": "public, max-age=86400" } });
};
