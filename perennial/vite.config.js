import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/perennial/', // Keep this! It's still necessary for sub-folder routing.
  build: {
    outDir: 'docs', // <-- Tells Vite to name the output folder "docs" instead of "dist"
  }
})