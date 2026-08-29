import { mkdirSync, writeFileSync } from 'node:fs';
import { sites } from '@openai/sites-vite-plugin';
import { defineConfig } from 'vite';

const wranglerConfig = {
  name: 'pinki-kaur-angular-portfolio',
  compatibility_date: '2026-05-15',
  main: 'index.js',
  no_bundle: true,
  assets: { directory: '../client' },
};

export default defineConfig({
  plugins: [
    sites(),
    {
      name: 'angular-sites-worker-config',
      closeBundle() {
        mkdirSync('dist/server', { recursive: true });
        writeFileSync('dist/server/wrangler.json', JSON.stringify(wranglerConfig));
      },
    },
  ],
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    ssr: 'worker/index.ts',
    rollupOptions: { output: { entryFileNames: 'server/index.js', format: 'es' } },
  },
});