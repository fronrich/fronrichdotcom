import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,    
    strictPort: true,
  },
  plugins: [svelte(), chunkSplitPlugin({})],
})
