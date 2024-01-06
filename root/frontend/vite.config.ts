import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/test": {
        target:
          "https://ag-budget-backend-3slhga2ry-jonssons-projects.vercel.app",
        secure: true,
        changeOrigin: true,
      },
    },
  },
});
