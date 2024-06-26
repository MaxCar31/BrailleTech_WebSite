import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/',  
  root: '.',
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        acerca: path.resolve(__dirname, 'acerca.html'),
        Testimonios: path.resolve(__dirname, 'Testimonios.html'),
        Traductor: path.resolve(__dirname, 'Traductor.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
});
