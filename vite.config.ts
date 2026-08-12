import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/portfolio/',

  plugins: [
    react(),

    {
      name: 'redirect-portfolio',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/portfolio') {
            res.statusCode = 302
            res.setHeader('Location', '/portfolio/')
            res.end()
            return
          }

          next()
        })
      }
    }
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})