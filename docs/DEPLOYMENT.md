# Deployment

The production target is the Cloudflare Worker named `lastseason`. Static assets are configured in `wrangler.jsonc` and the local release command is:

```sh
npm run deploy
```

`--keep-vars` preserves variables already stored in Cloudflare. Affiliate credentials and other account values must never be committed.

## Automatic builds from `main`

In Cloudflare Dashboard, open **Workers & Pages → lastseason → Settings → Builds** and connect the GitHub repository `GlobalBookings/lastseason`.

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --keep-vars`
- Root directory: `/`
- Build watch paths: all paths

After connecting, push a harmless documentation-only commit and confirm the Cloudflare build succeeds before relying on it for production releases.

## Release verification

1. Run `npm run validate`.
2. Confirm no quarantined historical draft files are staged.
3. Deploy or merge to `main` once automatic builds are connected.
4. Check the homepage, all six current-season routes, comparison index, one comparison detail page, sitemap index and a CSV download.
5. Confirm the deployed Worker version in Cloudflare and record any rollback reason in the commit or incident notes.
