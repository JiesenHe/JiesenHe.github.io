import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver';

import { resolve } from 'path';//npm install @types/node


export default defineConfig({
  plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
          resolvers: [VantResolver()],
      }),
      Components({
          resolvers: [VantResolver()],
      }),
  ],
    resolve: {
        // 设置文件./src路径为 @
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    }
})
