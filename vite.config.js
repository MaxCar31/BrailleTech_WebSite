import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BrailleTech_WebSite/',
  build: {
    outDir: '../dist',
  },
  server: {
    open: true,
  },
});
