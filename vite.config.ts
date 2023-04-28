import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

function resolve(dir: string) {
  return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve("src")
    }
  },
  plugins: [vue()],
})
