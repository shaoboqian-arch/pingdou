import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.PUBLIC_BASE || (process.env.GITHUB_PAGES === "true" ? "/pingdou/" : "/"),
  server: {
    allowedHosts: [".loca.lt", ".lhr.life", ".localhost.run"],
  },
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@imgly/background-removal")) return "bg-removal";
          if (id.includes("node_modules/onnxruntime-web")) return "onnx-runtime";
          if (id.includes("node_modules/pixi.js")) return "pixi";
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) return "react-vendor";
        },
      },
    },
  },
});
