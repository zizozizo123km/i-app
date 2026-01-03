import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Standard path alias mapping '@/' to the 'src' directory
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    // Standard port for modern development
    port: 3000,
    // Enable strict host checking (useful in containerized environments)
    host: true,
  },
  build: {
    // Modern rollup options for better asset management and caching
    rollupOptions: {
      output: {
        // Group dependencies into vendor chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group major libraries like react and react-dom separately
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
        // Custom asset file structure
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash].css';
          }
          if (assetInfo.name?.match(/\.(jpe?g|png|gif|svg|webp)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});