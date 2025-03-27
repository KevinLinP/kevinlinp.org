import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // Add any additional Vite configuration options here
  build: {
    // Generates smaller chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Better code splitting
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});