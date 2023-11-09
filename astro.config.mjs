import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), preact(), mdx()],
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'no-cors',
      'X-Content-Type-Options': 'nosniff'
    }
  },
  adapter: netlify()
});