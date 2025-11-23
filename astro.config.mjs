// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import mdx from "@astrojs/mdx";
import { imageService } from "@unpic/astro/service";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://skiogmagi.no",
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow remote Cloudinary images as well
    domains: ["res.cloudinary.com"],
    service: imageService({
      // Disable Unpic SSR placeholders to avoid Invalid Cloudinary URL/build fetches
      // when sources are public IDs or network is blocked during SSR.
      placeholder: "none",
      // Generate responsive srcset without explicit width/height
      layout: "fullWidth",
    }),
  },

  // Framework + media integrations
  integrations: [astroIcon(), mdx()],

  adapter: netlify(),
});
