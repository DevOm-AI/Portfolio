import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Tell Vite where your HTML file is
  root: '.', 

  resolve: {
    alias: {
      // This allows you to use "@/" imports
      "@": path.resolve(__dirname, "./client/src"),
    },
  },

  build: {
    // Tell Vite to build to a simple "dist" folder
    outDir: 'dist',
  }
})

