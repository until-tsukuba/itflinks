import { defineConfig } from 'astro/config';
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://link.tsukuba.dev",
  integrations: [purgecss(), sitemap()]
});