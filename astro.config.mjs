import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://lastseason.co.uk",
  integrations: [sitemap()],
  output: "static",

  build: {
    format: "directory",
  },

  trailingSlash: "always",
  adapter: cloudflare(),
});