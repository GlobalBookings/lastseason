import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lastseason.co.uk",
  integrations: [sitemap({
    filter: (page) => ![
      "/clubs/",
      "/players/",
      "/kits/",
      "/faq/",
      "/records/",
      "/mls/",
      "/data/",
      "/my/",
      "/championship/2022-23/",
      "/championship/2021-22/",
      "/la-liga/2023-24/",
      "/la-liga/2022-23/",
      "/la-liga/2021-22/",
      "/scottish-premiership/2023-24/",
      "/scottish-premiership/2022-23/",
    ].some((path) => new URL(page).pathname.startsWith(path)),
  })],
  output: "static",
  build: {
    format: "directory",
  },
  trailingSlash: "always",
});
