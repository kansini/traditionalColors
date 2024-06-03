import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import"@/assets/scss/index.scss";'
            }
        }
    },
})
