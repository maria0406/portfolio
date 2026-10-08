import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Served from https://maria0406.github.io/portfolio/
// Multi-page build: the projects page and the About page.
export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
      },
    },
  },
})
