import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(),    tailwindcss() ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Add these new configurations
  build: {
    outDir: 'dist', // Explicitly set build directory
  },
  base: '/', // Ensure base path is set correctly
});
