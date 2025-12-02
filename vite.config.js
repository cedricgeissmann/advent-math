import path from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

function generateAlias(absolutePath) {
  // eslint-disable-next-line no-undef
  return path.resolve(process.cwd(), absolutePath);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/advent-math/",
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": generateAlias("/"),
      "@components": generateAlias("/src/components/"),
      "@pages": generateAlias("/src/pages/"),
      "@img": generateAlias("/img/"),
      "@pdfs": generateAlias("/pdfs/"),
    },
  },
});
