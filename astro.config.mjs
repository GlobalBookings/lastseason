import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lastseason.co.uk",
  integrations: [sitemap()],
  output: "static",
  build: {
    format: "directory",
  },
  trailingSlash: "always",
});
