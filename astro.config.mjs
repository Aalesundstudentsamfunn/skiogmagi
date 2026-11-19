// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://skiogmagi.no",
  prefetch: true,
  // Preserve existing inline whitespace across the Astro 7 upgrade.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },

  // Framework + media integrations
  integrations: [astroIcon(), mdx()],

  // Astro serves the API routes locally without a deployment adapter.
  // Avoid starting Netlify's Deno/Edge emulator during `astro dev`.
  adapter: process.env.NODE_ENV === "development" ? undefined : netlify(),
});
