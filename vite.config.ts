import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  visualizer({
    filename: './dist/stats.html',
    open: true, // opens the report in your browser automatically
    gzipSize: true,
    brotliSize: true,
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
