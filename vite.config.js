import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://USERNAME.github.io/REPO_NAME, set base to '/REPO_NAME/'
// If deploying to https://USERNAME.github.io (user/org page), keep base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})
