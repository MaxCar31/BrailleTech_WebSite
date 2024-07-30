import { defineConfig } from 'vite';
import html from 'vite-plugin-html';

export default defineConfig({
  base: '/BrailleTech_WebSite/', // Asegúrate de que esta ruta sea correcta
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        acerca: './acerca.html',
        Testimonios: './Testimonios.html',
        Traductor: './Traductor.html',
      }
    }
  },
  plugins: [
    html({
      inject: {
        injectData: {
          title: 'BrailleTech'
        }
      }
    })
  ]
});