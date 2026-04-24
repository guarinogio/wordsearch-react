import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

export default defineConfig({
  base: "/wordsearch-react/",
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        id: "/wordsearch-react/",
        name: "Daily Word Soup",
        short_name: "Daily Word Soup",
        description: "Daily word search puzzles to play on the web.",
        start_url: "/wordsearch-react/",
        scope: "/wordsearch-react/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#f5f7fb",
        theme_color: "#172033",
        lang: "es",
        icons: [
          { src: "/wordsearch-react/icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/wordsearch-react/icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "/wordsearch-react/icons/maskable-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,png,svg,ico,json,woff2}"]
      }
    })
  ]
});
