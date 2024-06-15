import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  },
  base: '/BrailleTech_WebSite/',
  server: {
    open: true
  }
});
