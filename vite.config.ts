import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         '@components': path.resolve(__dirname, './src/components'),
         '@assets': path.resolve(__dirname, './src/assets'),
         '@hooks': path.resolve(__dirname, './src/hooks'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@contexts': path.resolve(__dirname, './src/contexts'),
         '@constants': path.resolve(__dirname, './src/constants'),
         '@utils': path.resolve(__dirname, './src/utils'),
         '@routes': path.resolve(__dirname, './src/routes'),
      },
   },
   plugins: [react()],
});
