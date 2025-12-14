import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base must be relative ('./') or the repo name ('/repo/') for GitHub Pages to find assets
  base: './', 
  build: {
    outDir: 'dist',
  }
});