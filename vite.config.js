// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/wattupapp-prototype/",   // keep this
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",        // SW updates itself
      injectRegister: "auto",            // auto-injects the small register script
      includeAssets: [
        "logo.jpg",
        "icons/icon-192.png",
        "icons/icon-512.png",
        "icons/maskable-192.png",
        "icons/maskable-512.png",
      ],
      manifest: {
        name: "WattUp",
        short_name: "WattUp",
        description: "Ride smarter. Insurance, routes, tools.",
        theme_color: "#0f172a",          // slate-900
        background_color: "#0f172a",
        display: "standalone",
        scope: "/wattupapp-prototype/",
        start_url: "/wattupapp-prototype/",  // IMPORTANT for GitHub Pages
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
          { src: "icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"],
        // GH Pages lives under /wattupapp-prototype/, so set the fallback to that path:
        navigateFallback: "/wattupapp-prototype/index.html",
      },
    }),
  ],
});