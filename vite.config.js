// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "movie.html": resolve(__dirname, "movie.html"),
        "search.html": resolve(__dirname, "search.html"),
      },
    },
  },
});
