// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://arobaz.fr",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !/\/(espace|production|merci|mentions-legales)\//.test(page) })],
});
