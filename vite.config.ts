import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  // '/' for Hetzner (tviy.org.ua); GitHub Pages workflow sets VITE_BASE=/osce-tvyi/
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
})
