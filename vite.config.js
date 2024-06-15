import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BrailleTech_WebSite/',  // Asegúrate de que coincide con el nombre de tu repositorio
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
