import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port : 5173,
    proxy: {
        '/api/v1/user': {
            target: 'http://localhost:8082',
            changeOrigin: true
        }
    }
  }
})
