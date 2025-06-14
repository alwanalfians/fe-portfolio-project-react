import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@mockData": path.resolve(__dirname, "./src/mockData"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Optimize chunk size
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // Combined manual chunks configuration
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('antd') || id.includes('@ant-design')) {
              return 'vendor-antd';
            }
            if (id.includes('apexcharts')) {
              return 'vendor-charts';
            }
            if (id.includes('moment') || id.includes('path')) {
              return 'vendor-utils';
            }
          }
          
          // Feature chunks
          if (id.includes('/src/pages/dashboard') || 
              id.includes('/src/components/charts/')) {
            return 'feature-dashboard';
          }
          if (id.includes('/src/pages/educations') || 
              id.includes('/src/components/headerTable')) {
            return 'feature-education';
          }
          if (id.includes('/src/pages/experiences')) {
            return 'feature-experience';
          }
          if (id.includes('/src/components/layout/')) {
            return 'feature-layout';
          }
        }
      }
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps in production
    sourcemap: true,
    // Optimize CSS
    cssCodeSplit: true,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
