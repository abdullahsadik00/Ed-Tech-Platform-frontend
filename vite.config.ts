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
    rollupOptions: {
      output: {
        // Split large/independent vendor groups out of the main bundle so the
        // core pages (catalog, dashboard) ship less JS up front.
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          query: ['@tanstack/react-query'],
        },
      },
    },
  },
  base: '/', // Ensure base path is set correctly
});
