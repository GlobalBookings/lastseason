export interface FootballAnniversary {
  slug: string;
  dateLabel: string;
  year: number;
  title: string;
  summary: string;
  seasonUrl: string;
  seasonLabel: string;
  sourceName: string;
  sourceUrl: string;
}

export const footballAnniversaries: FootballAnniversary[] = [
  {
    slug: "april-25", dateLabel: "25 April", year: 2004,
    title: "Arsenal clinched the title at Tottenham",
    summary: "Robert Pires scored the title-winning goal as Arsenal secured the 2003–04 Premier League crown at White Hart Lane on the way to an unbeaten campaign.",
    seasonUrl: "/premier-league/2003-04/", seasonLabel: "Premier League 2003–04",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
  {
    slug: "april-30", dateLabel: "30 April", year: 2005,
    title: "Lampard delivered Chelsea’s first Premier League title",
    summary: "Frank Lampard’s goals at Bolton confirmed Chelsea as Premier League champions in José Mourinho’s first season in charge.",
    seasonUrl: "/premier-league/2004-05/", seasonLabel: "Premier League 2004–05",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
  {
    slug: "may-2", dateLabel: "2 May", year: 2016,
    title: "Leicester City became Premier League champions",
    summary: "Chelsea’s 2–2 draw with Tottenham confirmed Leicester City’s extraordinary 2015–16 title with two matches still to play.",
    seasonUrl: "/premier-league/2015-16/", seasonLabel: "Premier League 2015–16",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/46352",
  },
  {
    slug: "may-8", dateLabel: "8 May", year: 2002,
    title: "Wiltord won the title for Arsenal at Old Trafford",
    summary: "Sylvain Wiltord scored the decisive goal as Arsenal beat Manchester United 1–0 and secured the 2001–02 Premier League title.",
    seasonUrl: "/premier-league/2001-02/", seasonLabel: "Premier League 2001–02",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
  {
    slug: "may-11", dateLabel: "11 May", year: 2008,
    title: "Manchester United won a final-day title race",
    summary: "Cristiano Ronaldo scored at Wigan as Manchester United secured the 2007–08 Premier League title on the final day.",
    seasonUrl: "/premier-league/2007-08/", seasonLabel: "Premier League 2007–08",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
  {
    slug: "may-13", dateLabel: "13 May", year: 2012,
    title: "Agüero scored the most dramatic title winner",
    summary: "Sergio Agüero’s stoppage-time goal completed Manchester City’s 3–2 comeback against QPR and won the title on goal difference.",
    seasonUrl: "/premier-league/2011-12/", seasonLabel: "Premier League 2011–12",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/60142",
  },
  {
    slug: "may-14", dateLabel: "14 May", year: 1995,
    title: "Blackburn Rovers ended an 81-year wait",
    summary: "Blackburn became Premier League champions despite losing at Liverpool, after Manchester United could only draw with West Ham.",
    seasonUrl: "/premier-league/1994-95/", seasonLabel: "Premier League 1994–95",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/59526",
  },
  {
    slug: "may-16", dateLabel: "16 May", year: 1999,
    title: "Manchester United completed the first leg of the treble",
    summary: "Andy Cole scored the title-winning goal against Tottenham as Manchester United secured the 1998–99 Premier League crown.",
    seasonUrl: "/premier-league/1998-99/", seasonLabel: "Premier League 1998–99",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
  {
    slug: "june-25", dateLabel: "25 June", year: 2020,
    title: "Liverpool’s thirty-year title wait ended",
    summary: "Chelsea’s victory over Manchester City mathematically confirmed Liverpool as 2019–20 Premier League champions.",
    seasonUrl: "/premier-league/2019-20/", seasonLabel: "Premier League 2019–20",
    sourceName: "Premier League", sourceUrl: "https://www.premierleague.com/en/news/1690545",
  },
];
