/** Tailwind configuration to enable Skeleton UI plugin in Astro
 * This file is loaded by Tailwind v4 via the @config directive in global.css
 */

// Use CommonJS to avoid ESM interop pain in CI/build tools
let skeletonPlugin = () => ({ name: "skeleton-fallback", handler: () => {} });
try {
  skeletonPlugin = require("@skeletonlabs/tw-plugin").skeleton;
} catch (_) {
  // Package not installed yet; continue with a no-op plugin.
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx,svelte}", "./public/**/*.html"],
  darkMode: ["class", '[data-theme="skeleton-dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    skeletonPlugin({
      themes: {
        preset: [
          "cerberus", // requested theme
          "skeleton-dark", // dark variant
        ],
      },
    }),
  ],
};
