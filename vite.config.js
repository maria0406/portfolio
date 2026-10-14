import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Served from https://maria0406.github.io/portfolio/
// Multi-page build: About me (home), Projects index, one page per project, and a redirect from the old about.html.
export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects.html', import.meta.url)),
        setPrep: fileURLToPath(new URL('./set-prep.html', import.meta.url)),
        arca: fileURLToPath(new URL('./arca.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
      },
    },
  },
})
