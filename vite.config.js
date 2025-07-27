import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Opens the report in the browser after build
      filename: "stats.html", // Output file name for the report
    }),
  ],
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
});
