// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Adresse publique : définie par la variable SITE_URL (Cloudflare → Settings → Variables), sinon l'adresse de test
  site: process.env.SITE_URL || "https://arobaz.pages.dev",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !/\/(production|merci|mentions-legales)\/|\/espace\/(ressources\/)?$|\/validation\/$/.test(page) })],
});
