import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    compression({ algorithm: "brotliCompress" }), 
    visualizer({ open: true }),
  ],
  build: {
    target: "esnext",
    sourcemap: false,
    minify: "terser",
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: undefined, 
      },
    },
  },
});
