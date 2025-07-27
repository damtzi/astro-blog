// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://github.com/withastro/astro/issues/12824
const alias = import.meta.env.PROD
    ? {
          'react-dom/server': 'react-dom/server.edge'
      }
    : undefined;

// https://astro.build/config
export default defineConfig({
    adapter: cloudflare({
        imageService: 'compile'
    }),

    vite: {
        plugins: [tailwindcss()],
        resolve: { alias }
    },

    integrations: [mdx(), react()]
});
