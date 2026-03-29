import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Championship",
  leagueSlug: "championship",
  season: "2021-22",
  seasonDisplay: "2021-22",
  champion: "Fulham",
  championSlug: "fulham",
  topScorer: "Aleksandar Mitrovic",
  topScorerGoals: 43,
  totalGoals: 1372,
  standings: [
    { pos: 1, club: "Fulham", clubSlug: "fulham", p: 46, w: 27, d: 9, l: 10, gf: 106, ga: 43, gd: 63, pts: 90, zone: "promotion" },
    { pos: 2, club: "AFC Bournemouth", clubSlug: "bournemouth", p: 46, w: 25, d: 9, l: 12, gf: 74, ga: 40, gd: 34, pts: 84, zone: "promotion" },
    { pos: 3, club: "Huddersfield Town", clubSlug: "huddersfield-town", p: 46, w: 23, d: 13, l: 10, gf: 64, ga: 47, gd: 17, pts: 82 },
    { pos: 4, club: "Sheffield United", clubSlug: "sheffield-united", p: 46, w: 22, d: 11, l: 13, gf: 63, ga: 47, gd: 16, pts: 77 },
    { pos: 5, club: "Nottingham Forest", clubSlug: "nottingham-forest", p: 46, w: 23, d: 10, l: 13, gf: 73, ga: 45, gd: 28, pts: 80 },
    { pos: 6, club: "Luton Town", clubSlug: "luton-town", p: 46, w: 22, d: 10, l: 14, gf: 63, ga: 52, gd: 11, pts: 75 },
    { pos: 7, club: "Middlesbrough", clubSlug: "middlesbrough", p: 46, w: 22, d: 7, l: 17, gf: 61, ga: 50, gd: 11, pts: 73 },
    { pos: 8, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 46, w: 20, d: 11, l: 15, gf: 56, ga: 48, gd: 8, pts: 71 },
    { pos: 9, club: "Millwall", clubSlug: "millwall", p: 46, w: 19, d: 10, l: 17, gf: 52, ga: 47, gd: 5, pts: 67 },
    { pos: 10, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 46, w: 18, d: 13, l: 15, gf: 52, ga: 49, gd: 3, pts: 67 },
    { pos: 11, club: "Queens Park Rangers", clubSlug: "queens-park-rangers", p: 46, w: 18, d: 12, l: 16, gf: 54, ga: 55, gd: -1, pts: 66 },
    { pos: 12, club: "Coventry City", clubSlug: "coventry-city", p: 46, w: 17, d: 14, l: 15, gf: 55, ga: 54, gd: 1, pts: 65 },
    { pos: 13, club: "Stoke City", clubSlug: "stoke-city", p: 46, w: 16, d: 14, l: 16, gf: 52, ga: 52, gd: 0, pts: 62 },
    { pos: 14, club: "Swansea City", clubSlug: "swansea-city", p: 46, w: 17, d: 10, l: 19, gf: 56, ga: 62, gd: -6, pts: 61 },
    { pos: 15, club: "Blackpool", clubSlug: "blackpool", p: 46, w: 16, d: 12, l: 18, gf: 53, ga: 57, gd: -4, pts: 60 },
    { pos: 16, club: "Preston North End", clubSlug: "preston-north-end", p: 46, w: 15, d: 13, l: 18, gf: 44, ga: 57, gd: -13, pts: 58 },
    { pos: 17, club: "Bristol City", clubSlug: "bristol-city", p: 46, w: 15, d: 12, l: 19, gf: 56, ga: 62, gd: -6, pts: 57 },
    { pos: 18, club: "Cardiff City", clubSlug: "cardiff-city", p: 46, w: 15, d: 12, l: 19, gf: 53, ga: 63, gd: -10, pts: 57 },
    { pos: 19, club: "Birmingham City", clubSlug: "birmingham-city", p: 46, w: 14, d: 13, l: 19, gf: 54, ga: 64, gd: -10, pts: 55 },
    { pos: 20, club: "Hull City", clubSlug: "hull-city", p: 46, w: 14, d: 11, l: 21, gf: 43, ga: 52, gd: -9, pts: 53 },
    { pos: 21, club: "Reading", clubSlug: "reading", p: 46, w: 14, d: 9, l: 23, gf: 51, ga: 65, gd: -14, pts: 51 },
    { pos: 22, club: "Peterborough United", clubSlug: "peterborough-united", p: 46, w: 11, d: 12, l: 23, gf: 42, ga: 76, gd: -34, pts: 45, zone: "relegation" },
    { pos: 23, club: "Derby County", clubSlug: "derby-county", p: 46, w: 13, d: 14, l: 19, gf: 41, ga: 53, gd: -12, pts: 34, zone: "relegation" },
    { pos: 24, club: "Barnsley", clubSlug: "barnsley", p: 46, w: 7, d: 14, l: 25, gf: 36, ga: 67, gd: -31, pts: 30, zone: "relegation" },
  ],
  scorers: [
    { name: "Aleksandar Mitrovic", playerSlug: "aleksandar-mitrovic", club: "Fulham", clubSlug: "fulham", goals: 43, assists: 7 },
    { name: "Ben Brereton Díaz", playerSlug: "ben-brereton-diaz", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", goals: 22, assists: 3 },
    { name: "Dominic Solanke", playerSlug: "dominic-solanke", club: "AFC Bournemouth", clubSlug: "bournemouth", goals: 20, assists: 5 },
    { name: "Joel Piroe", playerSlug: "joel-piroe", club: "Swansea City", clubSlug: "swansea-city", goals: 22, assists: 4 },
    { name: "Andreas Weimann", playerSlug: "andreas-weimann", club: "Bristol City", clubSlug: "bristol-city", goals: 19, assists: 5 },
    { name: "Chris Willock", playerSlug: "chris-willock", club: "Queens Park Rangers", clubSlug: "queens-park-rangers", goals: 14, assists: 8 },
    { name: "Brennan Johnson", playerSlug: "brennan-johnson", club: "Nottingham Forest", clubSlug: "nottingham-forest", goals: 16, assists: 9 },
    { name: "Keinan Davis", playerSlug: "keinan-davis", club: "Nottingham Forest", clubSlug: "nottingham-forest", goals: 12, assists: 4 },
    { name: "Viktor Gyökeres", playerSlug: "viktor-gyokeres", club: "Coventry City", clubSlug: "coventry-city", goals: 17, assists: 3 },
    { name: "Harry Wilson", playerSlug: "harry-wilson", club: "Fulham", clubSlug: "fulham", goals: 11, assists: 12 },
  ],
  assisters: [
    { name: "Harry Wilson", playerSlug: "harry-wilson", club: "Fulham", clubSlug: "fulham", assists: 12 },
    { name: "Brennan Johnson", playerSlug: "brennan-johnson", club: "Nottingham Forest", clubSlug: "nottingham-forest", assists: 9 },
    { name: "Chris Willock", playerSlug: "chris-willock", club: "Queens Park Rangers", clubSlug: "queens-park-rangers", assists: 8 },
    { name: "Aleksandar Mitrovic", playerSlug: "aleksandar-mitrovic", club: "Fulham", clubSlug: "fulham", assists: 7 },
    { name: "Ryan Manning", playerSlug: "ryan-manning", club: "Swansea City", clubSlug: "swansea-city", assists: 7 },
  ],
  cleanSheets: [
    { name: "Wes Foderingham", playerSlug: "wes-foderingham", club: "Sheffield United", clubSlug: "sheffield-united", cleanSheets: 18 },
    { name: "Marek Rodák", playerSlug: "marek-rodak", club: "Fulham", clubSlug: "fulham", cleanSheets: 16 },
    { name: "Lee Nicholls", playerSlug: "lee-nicholls", club: "Huddersfield Town", clubSlug: "huddersfield-town", cleanSheets: 16 },
    { name: "Mark Travers", playerSlug: "mark-travers", club: "AFC Bournemouth", clubSlug: "bournemouth", cleanSheets: 14 },
    { name: "Brice Samba", playerSlug: "brice-samba", club: "Nottingham Forest", clubSlug: "nottingham-forest", cleanSheets: 14 },
  ],
  awards: [
    { title: "Player of the Season", winner: "Aleksandar Mitrovic", playerSlug: "aleksandar-mitrovic" },
    { title: "Young Player of the Season", winner: "Brennan Johnson", playerSlug: "brennan-johnson" },
    { title: "Golden Glove", winner: "Wes Foderingham", playerSlug: "wes-foderingham" },
    { title: "Manager of the Season", winner: "Marco Silva" },
  ],
  relegated: ["Peterborough United", "Derby County", "Barnsley"],
  promoted: ["Fulham", "AFC Bournemouth", "Nottingham Forest"],
  narrative: `The 2021-22 Championship season was defined by one man: Aleksandar Mitrovic. The Serbian striker rewrote the record books with a staggering 43 league goals for Fulham, shattering the previous Championship record of 30 goals set by Ivan Toney. His incredible haul powered Fulham to the title with 90 points as Marco Silva's side played some of the most breathtaking attacking football the second tier has ever seen, scoring 106 goals in total.

AFC Bournemouth joined Fulham in securing automatic promotion, finishing second on 84 points under Scott Parker. The Cherries' solid defensive record of just 40 goals conceded provided the foundation for their return to the top flight, with Dominic Solanke contributing 20 goals from centre-forward.

The playoff picture produced compelling drama. Huddersfield Town, who had been in League One just two years earlier, secured third place on 82 points under Carlos Corberán. Nottingham Forest, managed by Steve Cooper, clinched fifth on 80 points after a remarkable second-half-of-season surge that saw them go from mid-table obscurity to playoff contention.

Forest's fairy tale continued in the playoffs. After beating Sheffield United on penalties in the semi-final, they defeated Huddersfield Town 1-0 in the final at Wembley through Levi Colwill's own goal, ending a 23-year absence from the top flight. It was one of the most emotional promotions in English football history as the City Ground erupted.

At the bottom, Derby County's plight was the season's saddest story. Despite Wayne Rooney's best efforts as player-manager-turned-manager, a 21-point deduction for entering administration and previous financial breaches made survival virtually impossible. The Rams showed immense spirit to accumulate 53 points on the pitch, but finished on just 34 after penalties. Peterborough United and Barnsley also went down, with the latter managing only seven wins all season.`,
  notableMoments: [
    "Aleksandar Mitrovic scored 43 Championship goals, smashing the all-time record for a single second-tier season",
    "Nottingham Forest ended a 23-year absence from the top flight by winning the playoff final at Wembley",
    "Fulham scored 106 goals across the season, the most in the Championship in years",
    "Derby County received a 21-point deduction for administration and financial breaches, finishing on 34 points despite earning 55 on the pitch",
    "Brennan Johnson emerged as one of the Championship's brightest young talents with 16 goals and 9 assists for Nottingham Forest",
  ],
  metaTitle: "Championship 2021-22 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2021-22 EFL Championship season. Final standings, top goalscorers, assists, player awards and a complete season recap.",
};

export default data;
