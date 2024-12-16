import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), AutoImport({
    imports: [
      'vue',
      'vue/macros',
      'vue-router',
      '@vueuse/core',
    ],
    dts: true,
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
