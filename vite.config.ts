import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";

export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
