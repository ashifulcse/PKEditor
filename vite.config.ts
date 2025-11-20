import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Adjust the entry path to your library's entry file
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'PKEditor',
      fileName: 'pk-editor',
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})