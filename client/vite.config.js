import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    port: process.env.PORT || 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'https://yums2-3c8c929ea654.herokuapp.com/',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
