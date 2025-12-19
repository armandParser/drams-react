import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' // Verified plugin for generating types
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        dts({ include: ['src'] }) // Generates .d.ts files
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'DramsReact',
            fileName: 'drams-react',
        },
        rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})