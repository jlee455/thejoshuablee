import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        site: fileURLToPath(new URL('./index.html', import.meta.url)),
        collection: fileURLToPath(new URL('./collection/index.html', import.meta.url)),
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
