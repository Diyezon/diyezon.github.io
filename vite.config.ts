import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // This ensures assets are loaded with relative paths
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable code splitting
      },
    },
  },
});