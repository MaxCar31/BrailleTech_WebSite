import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BrailleTech_WebSite/',  
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
