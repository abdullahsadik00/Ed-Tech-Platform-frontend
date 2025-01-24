import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensures modern JS output
    outDir: 'dist', // Default build directory
    modulePreload: true, // Adds <link rel="modulepreload"> for module scripts
  },
});
