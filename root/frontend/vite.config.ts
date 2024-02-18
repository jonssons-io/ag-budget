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
      "/api": {
        // target:
        //   "https://ag-budget-backend-3slhga2ry-jonssons-projects.vercel.app",
        target: "http://192.168.50.160:5000",
        secure: true,
        changeOrigin: true,
      },
    },
  },
});
