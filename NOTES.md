# lastseason.co.uk — Project Notes

## Domain
- lastseason.co.uk (registered, DNS propagating to Cloudflare)
- Hosted on Cloudflare Pages (free tier)
- GitHub repo: GlobalBookings/lastseason

## Tech Stack
- Astro 5.x static site generator (zero JS shipped to browser)
- TypeScript strict mode
- @astrojs/sitemap for XML sitemap generation
- Deployed via Cloudflare Pages (build cmd: `npm run build`, output: `dist`)

## What's Been Built (Phase 1)
- 453 static pages total
- 21 season pages across 8 leagues:
  - Premier League: 2023-24, 2022-23, 2021-22, 2020-21, 2019-20
  - Championship: 2023-24, 2022-23, 2021-22
  - La Liga: 2023-24, 2022-23, 2021-22
  - Bundesliga: 2023-24, 2022-23
  - Serie A: 2023-24, 2022-23
  - Ligue 1: 2023-24, 2022-23
  - Scottish Premiership: 2023-24, 2022-23
  - MLS: 2023, 2022
- 8 league hub pages
- ~200 auto-generated club pages
- ~200 auto-generated player pages
- Homepage, privacy policy, cookie policy
- XML sitemap, robots.txt, structured data (SportsEvent + Table schema)

## SEO Setup
- Unique <title> and <meta description> per page
- Canonical URLs on every page
- Open Graph + Twitter Card meta tags
- SportsEvent + Table JSON-LD schema on season pages
- Breadcrumb navigation on all sub-pages
- Internal linking mesh: seasons <-> clubs <-> players <-> league hubs
- hreflang en-GB for UK targeting
- Bing IndexNow / webmaster placeholder
- robots.txt allowing all, pointing to sitemap

## Monetisation Setup
- Ezoic: placeholder in <head> (add script once account approved)
- Betting CTA: one per season page, contextual text link to Bet365
- All affiliate links use rel="nofollow sponsored"
- Gambling disclaimer on every page (footer)
- AWIN kit affiliate links: placeholder structure ready (add tracked URLs once approved)

## Accounts Needed (Manual Setup Required)
- [ ] Google Analytics 4 — create property, add measurement ID to Base.astro
- [ ] Google Search Console — verify domain, submit sitemap
- [ ] Bing Webmaster Tools — verify domain, submit sitemap
- [ ] Ezoic — sign up, get script tag, add to Base.astro <head>
- [ ] Income Access — apply for Bet365, Sky Bet, William Hill affiliate programmes
- [ ] AWIN — apply as publisher, join JD Sports, Kitbag, Nike, Adidas programmes

## Future Actions
- [ ] Add 2024-25 season pages as soon as seasons end (May/June 2025)
- [ ] Expand backwards: add 2018-19, 2017-18, 2016-17 for Premier League
- [ ] Add more leagues: Eredivisie, Liga Portugal, Turkish Super Lig
- [ ] Add Championship playoff results pages
- [ ] Upgrade to Mediavine at 50,000 sessions/month
- [ ] Add kit affiliate links to club pages once AWIN approved
- [ ] Monthly GSC review: find new ranking queries, create pages targeting them
- [ ] Consider adding comparison pages: "Premier League 2023-24 vs 2022-23"
- [ ] Add "current season" link/redirect once live season tracking is considered

## Design Overhaul (Completed)
- Professional sports-data aesthetic with dark navy theme
- League-specific accent colours throughout
- Mobile hamburger navigation
- Improved table scrolling with gradient fade indicators
- Better typography: Inter font, tighter heading tracking
- Enhanced card designs with hover animations
- Colour-coded table zones (CL green, EL blue, relegation red)
- Accessibility: ARIA labels, focus states, skip-to-content link
- 404 page with navigation back to content

## Changelog
- 2025-03-29: Initial build — 453 pages, full site architecture
- 2025-03-29: Pushed to GitHub (GlobalBookings/lastseason)
- 2025-03-29: Connected to Cloudflare Pages
- 2025-03-29: Visual and SEO overhaul
