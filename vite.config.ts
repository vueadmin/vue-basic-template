import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), VueRouter(), AutoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia',
      '@vueuse/core',
    ],
    dts: 'src/auto-imports.d.ts',
  }), Components({
    dts: 'src/components.d.ts',
    resolvers: [
      ElementPlusResolver(),
    ],
  })],
  server: {
    port: 8080,
  },
})
