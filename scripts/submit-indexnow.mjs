import { readFile } from 'node:fs/promises';

const host = 'lastseason.co.uk';
const key = 'f4d9c2a8b7614e0d93fa65b28c7e1046';
const keyLocation = `https://${host}/${key}.txt`;
const sitemapPath = new URL('../dist/sitemap-0.xml', import.meta.url);

const sitemap = await readFile(sitemapPath, 'utf8').catch((error) => {
  throw new Error(`Could not read ${sitemapPath.pathname}. Run npm run build first.`, {
    cause: error,
  });
});

const urlList = [...sitemap.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => new URL(url).hostname === host);

if (urlList.length === 0) {
  throw new Error('No Last Season URLs were found in the generated sitemap.');
}

if (urlList.length > 10_000) {
  throw new Error(`IndexNow supports at most 10,000 URLs per request; found ${urlList.length}.`);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok) {
  const detail = await response.text();
  throw new Error(`IndexNow rejected the submission (${response.status}): ${detail}`);
}

console.log(`Submitted ${urlList.length} URLs to IndexNow (${response.status}).`);
