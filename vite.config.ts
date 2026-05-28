import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // --- FIX 1 ---
  // Tell Vite that your "root" (where index.html is) is inside the 'client' folder
  root: 'client', 

  resolve: {
    alias: {
      // This path is still correct for your "@" imports
      "@": path.resolve(__dirname, "./client/src"),
    },
  },

  build: {
    // --- FIX 2 ---
    // Tell Vite to build the 'dist' folder in the *project root* // (one level up from the 'client' folder)
    outDir: '../dist',
  }
})

