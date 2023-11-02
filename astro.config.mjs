import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), preact()],
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'no-cors',
    },
  }
});