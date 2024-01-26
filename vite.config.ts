import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/test/react-zem-ts1/dist/",
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": {},
  },
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },
});
