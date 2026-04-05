# lastseason.co.uk — Project Notes

## Domain & Hosting
- Domain: lastseason.co.uk (registered, DNS propagating to Cloudflare)
- Hosted on: Cloudflare Pages (free tier, zero cost)
- GitHub repo: github.com/GlobalBookings/lastseason (public)
- Auto-deploys on every push to `main` branch
- Build command: `npm run build` | Output directory: `dist`

## Tech Stack
- Astro 5.x static site generator (zero JS shipped to browser)
- TypeScript strict mode
- @astrojs/sitemap for XML sitemap generation
- Inter font (Google Fonts, preloaded)
- Pure CSS (no Tailwind/framework), mobile-first responsive design

## Business Model
Three revenue streams, all passive once ranked:
1. **Display ads** — Ezoic (no minimum traffic) → upgrade to Mediavine at 50k sessions/month
2. **Betting affiliates** — Bet365/Sky Bet/William Hill via Income Access (£50-100 CPA per depositing customer)
3. **Kit affiliates** — AWIN (JD Sports, Kitbag) at 2-6% commission per sale

### Revenue Projections
| Milestone | Traffic | Est. monthly revenue | Timeline |
|-----------|---------|----------------------|----------|
| Launch | 0 | £0 | Day 1 |
| First rankings | 500 sessions/mo | £20-50 | Month 2-3 |
| Growing | 5,000 sessions/mo | £150-300 | Month 4-6 |
| Established | 20,000 sessions/mo | £400-700 | Month 8-12 |
| Mediavine eligible | 50,000 sessions/mo | £800-1,500 | Month 12-18 |
| Scaled | 100,000+ sessions/mo | £2,000+ | Month 18-24 |

### Running Costs
- Cloudflare Pages: Free
- Domain renewal: ~£10/year
- Total: ~£1/month

## What's Been Built (454 Pages)
- **21 season pages** across 8 leagues (primary SEO target pages):
  - Premier League: 2023-24, 2022-23, 2021-22, 2020-21, 2019-20
  - Championship: 2023-24, 2022-23, 2021-22
  - La Liga: 2023-24, 2022-23, 2021-22
  - Bundesliga: 2023-24, 2022-23
  - Serie A: 2023-24, 2022-23
  - Ligue 1: 2023-24, 2022-23
  - Scottish Premiership: 2023-24, 2022-23
  - MLS: 2023, 2022
- **8 league hub pages** (lists all seasons per league)
- **~200 auto-generated club pages** (season-by-season history per club)
- **~200 auto-generated player pages** (career stats from scorer/assist/clean sheet data)
- Homepage with hero stats, league sections, and season cards
- Privacy policy + cookie policy (UK GDPR / PECR compliant)
- 404 page
- XML sitemap + robots.txt

### Each Season Page Contains:
- Full league table (sortable, colour-coded zones: CL/EL/ECL/relegation)
- Top 10 scorers with goals + assists
- Top 5 assisters
- Top 5 clean sheet leaders (goalkeepers)
- Season awards (Player of Season, Young Player, Golden Boot, etc.)
- 500-word season review narrative
- Relegation and promotion summary
- Notable moments (3-5 bullet points)
- Betting CTA (contextual, subtle, with gambling disclaimer)
- Previous/next season navigation

### URL Structure:
```
/                                    → homepage
/[league-slug]/                      → league hub
/[league-slug]/[yyyy-yy]/           → season page (PRIMARY SEO TARGET)
/clubs/[club-slug]/                  → club page
/players/[player-slug]/              → player page
```

## SEO Setup (Complete)
- Unique `<title>` and `<meta description>` per page
- Canonical URLs on every page
- `hreflang="en-GB"` + `x-default` on every page
- `geo.region=GB` and `geo.placename=United Kingdom` meta tags
- Open Graph tags with `og:locale=en_GB`
- Twitter Card (`summary_large_image`)
- `robots` directive: `index, follow, max-snippet:-1, max-image-preview:large`
- **JSON-LD Structured Data:**
  - `WebSite` schema on every page
  - `SportsEvent` + `Table` schema on every season page
  - `BreadcrumbList` schema on every sub-page
  - `FAQPage` schema on every season page (3 FAQs: who won, top scorer, who was relegated)
- Internal linking mesh: seasons ↔ clubs ↔ players ↔ league hubs ↔ homepage
- Breadcrumb navigation on all sub-pages
- XML sitemap auto-generated at `/sitemap-index.xml`
- `robots.txt` allows all crawlers, points to sitemap
- Bing Webmaster Tools meta tag placeholder in `<head>`

### Target Keyword Clusters (per season page):
Example for `/premier-league/2023-24/`:
- **Primary:** "Premier League 2023 24", "Premier League last season", "Premier League 2023-24 table"
- **Secondary:** "Premier League 2023-24 top scorers", "who won the Premier League 2023-24"
- **Long-tail:** "Premier League 2023-24 final standings", "who was relegated from Premier League 2023-24", "Premier League 2023-24 golden boot"

### SEO Strategy:
- Organic search only. No paid ads, no social media spend.
- Topical authority via comprehensive coverage (8 leagues, 21 seasons, hundreds of clubs/players)
- Tight internal link mesh builds authority across all pages
- Structured data increases chances of rich results / featured snippets
- Page speed advantage: zero JS, static HTML, Cloudflare edge CDN
- Target Lighthouse score: 95+

## Monetisation Setup
- **Ezoic:** Placeholder comment in `Base.astro` `<head>` — add script once account approved
- **GA4:** Placeholder comment in `Base.astro` before `</body>` — add gtag.js once property created
- **Betting CTA:** One per season page, contextual text link to Bet365, uses `rel="nofollow sponsored"`
- **Gambling disclaimer:** On every page (footer) — "18+ | BeGambleAware.org | T&Cs apply"
- **AWIN kit links:** Not yet added — add tracked URLs to club pages once AWIN publisher account approved

## Design System
- **Colours:** Dark navy header (#0f1923), white content area, league-specific accents
  - Premier League: #3d195b | Championship: #c8102e | La Liga: #ee8707
  - Bundesliga: #d20515 | Serie A: #024494 | Ligue 1: #091c3e
  - Scottish Premiership: #1a3668 | MLS: #013a5e
- **Typography:** Inter font, 800 weight headings, tight letter-spacing (-0.035em)
- **Tables:** Dark header, alternating row stripes, hover highlight, colour-coded zone indicators (inset border), horizontally scrollable on mobile with gradient fade indicator
- **Cards:** 12px radius, accent top border, hover lift + shadow animation, tag labels
- **Mobile:** Hamburger nav (JS toggle), single-column card grids, stacking awards/transfer sections

## Accessibility
- Skip-to-content link (visible on focus)
- ARIA labels on all tables, navigation sections, breadcrumbs, betting CTA
- `scope="col"` + `abbr` attributes on all table headers
- `tabindex="0"` on scrollable table wrappers for keyboard access
- `focus-visible` outlines on all interactive elements
- Proper heading hierarchy (h1 → h2 on every page)
- Print stylesheet (hides header/footer/betting, clean output)

## Competitors
| Competitor | Weakness we exploit |
|-----------|-------------------|
| Wikipedia | Dense, poorly formatted tables, no mobile optimisation, no structured data |
| Transfermarkt | Slow, cluttered with ads, confusing navigation |
| BBC Sport / Sky Sports | Historical archive is thin, old seasons buried |
| WorldFootball.net | Design from 2005, no editorial content |
| Football-Data.co.uk | CSV dumps, not a consumer site |
| Soccerway / Flashscore | Live scores first, historical second |
| 11v11.com | Zero design investment, no SEO strategy |

## Accounts Needed (Manual Setup — Cannot Be Automated)
- [ ] Google Analytics 4 — create property → get measurement ID → add to Base.astro
- [ ] Google Search Console — verify domain → submit sitemap URL
- [ ] Bing Webmaster Tools — verify domain → submit sitemap URL
- [ ] Ezoic — sign up (no minimum traffic) → get script → add to Base.astro `<head>`
- [ ] Income Access — apply for Bet365, Sky Bet, William Hill affiliate programmes
- [ ] AWIN — apply as publisher → join JD Sports, Kitbag, Nike, Adidas programmes

## Future Actions (Roadmap)
### Immediate (Week 1-2)
- [ ] Set up GA4, GSC, Bing Webmaster Tools
- [ ] Sign up for Ezoic, add script
- [ ] Apply to betting affiliate programmes
- [ ] Apply to AWIN
- [ ] Verify Cloudflare Pages deployment works on lastseason.co.uk domain

### Short-term (Month 1-3)
- [ ] Add 2024-25 season pages as each league ends (May/June)
- [ ] Expand backwards: 2018-19, 2017-18, 2016-17 for Premier League
- [ ] Add more Championship/La Liga/Bundesliga historical seasons
- [ ] Add kit affiliate links to club pages once AWIN approved
- [ ] Update betting CTAs with real tracked affiliate links once approved

### Medium-term (Month 3-6)
- [ ] Add new leagues: Eredivisie, Liga Portugal, Turkish Super Lig
- [ ] Add Championship playoff results pages
- [ ] Monthly GSC review: find new ranking queries, create pages targeting them
- [ ] Consider "comparison" pages: "Premier League 2023-24 vs 2022-23"

### Long-term (Month 6+)
- [ ] Upgrade to Mediavine at 50,000 sessions/month
- [ ] Add "current season" live-ish table (updated weekly)
- [ ] Consider adding cup competitions (FA Cup, Champions League results)
- [ ] Consider newsletter opt-in once traffic justifies it
- [ ] Explore programmatic SEO for auto-generating more long-tail pages

## Key Files Reference
| File | Purpose |
|------|---------|
| `src/layouts/Base.astro` | Master layout — add GA4/Ezoic scripts here |
| `src/styles/global.css` | All site styles |
| `src/data/leagues/index.ts` | League definitions (add new leagues here) |
| `src/data/leagues/[slug]/[season].ts` | Season data files (add new seasons here) |
| `src/types.ts` | TypeScript interfaces for all data |
| `src/utils/data.ts` | Data loading utilities |
| `src/utils/schema.ts` | JSON-LD structured data generators |
| `src/pages/[league]/[season].astro` | Season page template (money page) |
| `src/components/BettingCta.astro` | Betting affiliate CTA (update links here) |
| `astro.config.mjs` | Astro config, sitemap, site URL |
| `public/robots.txt` | Crawler rules |
| `NOTES.md` | This file |

## How to Add a New Season
1. Create `src/data/leagues/[league-slug]/[season].ts` following the `SeasonData` type
2. Add the season string to the league's `seasons` array in `src/data/leagues/index.ts`
3. Run `npm run build` — club and player pages auto-generate from the new data
4. Push to GitHub — Cloudflare auto-deploys

## Changelog
- 2025-03-29: Initial build — 453 pages, full site architecture, all data populated
- 2025-03-29: Pushed to GitHub (GlobalBookings/lastseason)
- 2025-03-29: Connected to Cloudflare Pages for deployment
- 2025-03-29: Visual & SEO overhaul — Inter font, mobile nav, accessibility, BreadcrumbList/FAQPage schema, hero stats, 404 page, print styles
- 2025-03-29: Updated NOTES.md with full project documentation
