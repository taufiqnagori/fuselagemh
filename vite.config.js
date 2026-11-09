
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Vite configuration for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],

  // GitHub repository name
  base: "/fuselagemh/",
});
