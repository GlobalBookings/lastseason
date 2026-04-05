import { generateAllKitArchives } from "./generate";
import type { ClubKitArchive, HistoricKit } from "./types";

export type { ClubKitArchive, HistoricKit };

export const allClubKitArchives: ClubKitArchive[] = generateAllKitArchives();

export function getClubKitArchive(clubSlug: string): ClubKitArchive | undefined {
  return allClubKitArchives.find((c) => c.clubSlug === clubSlug);
}

export function getKitArchivesByLeague(leagueSlug: string): ClubKitArchive[] {
  return allClubKitArchives.filter((c) => c.leagueSlug === leagueSlug);
}

export function getKit(clubSlug: string, season: string, type: string): HistoricKit | undefined {
  const club = getClubKitArchive(clubSlug);
  return club?.kits.find((k) => k.season === season && k.type === type);
}

export function getAllKitPaths(): { clubSlug: string; season: string; type: string }[] {
  const paths: { clubSlug: string; season: string; type: string }[] = [];
  for (const club of allClubKitArchives) {
    for (const kit of club.kits) {
      paths.push({ clubSlug: club.clubSlug, season: kit.season, type: kit.type });
    }
  }
  return paths;
}
