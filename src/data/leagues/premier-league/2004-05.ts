import type { SeasonData } from "../../../types";

const data: SeasonData = {
  league: "Premier League",
  leagueSlug: "premier-league",
  season: "2004-05",
  seasonDisplay: "2004-05",
  champion: "Chelsea",
  championSlug: "chelsea",
  topScorer: "Thierry Henry",
  topScorerGoals: 25,
  totalGoals: 975,
  standings: [
    { pos: 1, club: "Chelsea", clubSlug: "chelsea", p: 38, w: 29, d: 8, l: 1, gf: 72, ga: 15, gd: 57, pts: 95, zone: "cl" },
    { pos: 2, club: "Arsenal", clubSlug: "arsenal", p: 38, w: 25, d: 8, l: 5, gf: 87, ga: 36, gd: 51, pts: 83, zone: "cl" },
    { pos: 3, club: "Manchester United", clubSlug: "manchester-united", p: 38, w: 22, d: 11, l: 5, gf: 58, ga: 26, gd: 32, pts: 77, zone: "cl" },
    { pos: 4, club: "Everton", clubSlug: "everton", p: 38, w: 18, d: 7, l: 13, gf: 45, ga: 46, gd: -1, pts: 61, zone: "cl" },
    { pos: 5, club: "Liverpool", clubSlug: "liverpool", p: 38, w: 17, d: 7, l: 14, gf: 52, ga: 41, gd: 11, pts: 58, zone: "el" },
    { pos: 6, club: "Bolton Wanderers", clubSlug: "bolton-wanderers", p: 38, w: 16, d: 10, l: 12, gf: 49, ga: 44, gd: 5, pts: 58, zone: "el" },
    { pos: 7, club: "Middlesbrough", clubSlug: "middlesbrough", p: 38, w: 14, d: 13, l: 11, gf: 53, ga: 46, gd: 7, pts: 55 },
    { pos: 8, club: "Manchester City", clubSlug: "manchester-city", p: 38, w: 13, d: 13, l: 12, gf: 47, ga: 39, gd: 8, pts: 52 },
    { pos: 9, club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", p: 38, w: 14, d: 10, l: 14, gf: 47, ga: 41, gd: 6, pts: 52 },
    { pos: 10, club: "Aston Villa", clubSlug: "aston-villa", p: 38, w: 12, d: 11, l: 15, gf: 45, ga: 52, gd: -7, pts: 47 },
    { pos: 11, club: "Charlton Athletic", clubSlug: "charlton-athletic", p: 38, w: 12, d: 10, l: 16, gf: 42, ga: 58, gd: -16, pts: 46 },
    { pos: 12, club: "Birmingham City", clubSlug: "birmingham-city", p: 38, w: 11, d: 12, l: 15, gf: 40, ga: 46, gd: -6, pts: 45 },
    { pos: 13, club: "Fulham", clubSlug: "fulham", p: 38, w: 12, d: 8, l: 18, gf: 52, ga: 60, gd: -8, pts: 44 },
    { pos: 14, club: "Newcastle United", clubSlug: "newcastle-united", p: 38, w: 10, d: 14, l: 14, gf: 47, ga: 57, gd: -10, pts: 44 },
    { pos: 15, club: "Blackburn Rovers", clubSlug: "blackburn-rovers", p: 38, w: 9, d: 15, l: 14, gf: 32, ga: 43, gd: -11, pts: 42 },
    { pos: 16, club: "Portsmouth", clubSlug: "portsmouth", p: 38, w: 10, d: 9, l: 19, gf: 43, ga: 59, gd: -16, pts: 39 },
    { pos: 17, club: "West Bromwich Albion", clubSlug: "west-bromwich-albion", p: 38, w: 6, d: 16, l: 16, gf: 36, ga: 61, gd: -25, pts: 34 },
    { pos: 18, club: "Crystal Palace", clubSlug: "crystal-palace", p: 38, w: 7, d: 12, l: 19, gf: 41, ga: 62, gd: -21, pts: 33, zone: "relegation" },
    { pos: 19, club: "Norwich City", clubSlug: "norwich-city", p: 38, w: 7, d: 12, l: 19, gf: 42, ga: 77, gd: -35, pts: 33, zone: "relegation" },
    { pos: 20, club: "Southampton", clubSlug: "southampton", p: 38, w: 6, d: 14, l: 18, gf: 45, ga: 66, gd: -21, pts: 32, zone: "relegation" },
  ],
  scorers: [
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", goals: 25, assists: 14 },
    { name: "Andy Johnson", playerSlug: "andy-johnson", club: "Crystal Palace", clubSlug: "crystal-palace", goals: 21, assists: 1 },
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", goals: 14, assists: 7 },
    { name: "Jermain Defoe", playerSlug: "jermain-defoe", club: "Tottenham Hotspur", clubSlug: "tottenham-hotspur", goals: 13, assists: 2 },
    { name: "Jimmy Floyd Hasselbaink", playerSlug: "jimmy-floyd-hasselbaink", club: "Middlesbrough", clubSlug: "middlesbrough", goals: 13, assists: 2 },
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", goals: 13, assists: 16 },
    { name: "Yakubu Aiyegbeni", playerSlug: "yakubu-aiyegbeni", club: "Portsmouth", clubSlug: "portsmouth", goals: 13, assists: 1 },
    { name: "Andy Cole", playerSlug: "andy-cole", club: "Fulham", clubSlug: "fulham", goals: 12, assists: 3 },
    { name: "Wayne Rooney", playerSlug: "wayne-rooney", club: "Manchester United", clubSlug: "manchester-united", goals: 11, assists: 5 },
    { name: "Didier Drogba", playerSlug: "didier-drogba", club: "Chelsea", clubSlug: "chelsea", goals: 10, assists: 5 },
  ],
  assisters: [
    { name: "Frank Lampard", playerSlug: "frank-lampard", club: "Chelsea", clubSlug: "chelsea", assists: 16 },
    { name: "Thierry Henry", playerSlug: "thierry-henry", club: "Arsenal", clubSlug: "arsenal", assists: 14 },
    { name: "Arjen Robben", playerSlug: "arjen-robben", club: "Chelsea", clubSlug: "chelsea", assists: 8 },
    { name: "Robert Pires", playerSlug: "robert-pires", club: "Arsenal", clubSlug: "arsenal", assists: 7 },
    { name: "Lauren", playerSlug: "lauren", club: "Arsenal", clubSlug: "arsenal", assists: 6 },
  ],
  cleanSheets: [
    { name: "Petr Cech", playerSlug: "petr-cech", club: "Chelsea", clubSlug: "chelsea", cleanSheets: 24 },
    { name: "Jens Lehmann", playerSlug: "jens-lehmann", club: "Arsenal", clubSlug: "arsenal", cleanSheets: 13 },
    { name: "Roy Carroll", playerSlug: "roy-carroll", club: "Manchester United", clubSlug: "manchester-united", cleanSheets: 12 },
    { name: "Nigel Martyn", playerSlug: "nigel-martyn", club: "Everton", clubSlug: "everton", cleanSheets: 11 },
    { name: "Brad Friedel", playerSlug: "brad-friedel", club: "Blackburn Rovers", clubSlug: "blackburn-rovers", cleanSheets: 10 },
  ],
  awards: [
    { title: "Player of the Season", winner: "John Terry", playerSlug: "john-terry" },
    { title: "Young Player of the Season", winner: "Wayne Rooney", playerSlug: "wayne-rooney" },
    { title: "Golden Glove", winner: "Petr Cech", playerSlug: "petr-cech" },
    { title: "Manager of the Season", winner: "Jose Mourinho" },
  ],
  relegated: ["Crystal Palace", "Norwich City", "Southampton"],
  promoted: ["Sunderland", "Wigan Athletic", "West Ham United"],
  narrative: `Chelsea stormed to their first league title in 50 years in 2004-05, Jose Mourinho's debut season in English football producing one of the most dominant campaigns the Premier League had ever seen. The Blues amassed a then-record 95 points, losing just once all season -- a 1-0 defeat to Manchester City -- while conceding a historically low 15 goals across 38 matches.

Mourinho's pragmatic yet devastatingly effective approach was built on an impenetrable defence marshalled by John Terry and Ricardo Carvalho, with Petr Cech setting a new clean sheet record of 24. Frank Lampard was the creative heartbeat, contributing 13 goals and 16 assists from midfield, while Arjen Robben and Damien Duff provided pace and trickery on the wings. Didier Drogba, in his debut season, showed glimpses of the match-winner he would become.

Arsenal mounted the strongest challenge, finishing second on 83 points. Thierry Henry once again claimed the Golden Boot with 25 goals, while adding 14 assists for good measure. The Gunners' unbeaten run from the previous season was finally ended at 49 games when Manchester United beat them 2-0 at Old Trafford in October -- the infamous 'Battle of the Buffet' match.

Manchester United finished third on 77 points, with the emerging Wayne Rooney claiming the Young Player of the Season award after a brilliant debut campaign at Old Trafford. Everton's remarkable fourth-place finish under David Moyes was one of the stories of the season, the Toffees qualifying for the Champions League against all expectations.

Liverpool finished fifth but saved their best for Europe, producing one of the greatest Champions League campaigns in history. Rafael Benitez's side came back from 3-0 down against AC Milan in the final in Istanbul to win on penalties and lift the famous trophy.

At the bottom, the Great Escape defined the relegation battle. West Bromwich Albion became the first club in Premier League history to avoid relegation after being bottom at Christmas. Crystal Palace, Norwich City and Southampton all went down on the final day in one of the most dramatic finishes in league history.

Petr Cech's 24 clean sheets and Chelsea's 15 goals conceded remain records that have stood the test of time, cementing the 2004-05 season as one of the great defensive campaigns.`,
  notableMoments: [
    "Chelsea won the title with a then-record 95 points in Jose Mourinho's first season",
    "Petr Cech kept 24 clean sheets while Chelsea conceded just 15 goals -- both PL records",
    "Arsenal's 49-game unbeaten run ended with defeat at Old Trafford in the 'Battle of the Buffet'",
    "West Brom became the first club to survive after being bottom at Christmas",
    "Liverpool won the Champions League in Istanbul despite finishing fifth domestically",
  ],
  metaTitle: "Premier League 2004-05 | Final Table, Top Scorers & Season Review",
  metaDescription: "Full stats for the 2004-05 Premier League season. Chelsea's record-breaking title, final standings, top goalscorers, assists, awards and season recap.",
};

export default data;
