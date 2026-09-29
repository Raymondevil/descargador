import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/static',
        emptyOutDir: false,
        copyPublicDir: false,
        rollupOptions: {
          input: './src/main.tsx',
          output: { entryFileNames: 'client.js', assetFileNames: '[name][extname]' },
        },
      },
    }
  }

  return {
    plugins: [
      build(),
      react(),
      devServer({ adapter, entry: 'src/index.tsx' }),
    ],
    server: { port: 3000, host: '0.0.0.0' },
  }
})
