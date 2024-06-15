import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BrailleTech_WebSite/', 
  root: 'src',
  build: {
    outDir: '../dist'
  },
  server: {
    open: true
  }
});
