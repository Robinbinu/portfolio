import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://robin.github.io',
  base: 'portfolio',
  integrations: [mdx(), sitemap(), icon(),tailwind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
