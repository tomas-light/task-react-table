import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import readableClassnames from 'vite-plugin-readable-classnames';

export default defineConfig({
  plugins: [react(), readableClassnames()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    target: 'esnext',
  },
  server: {
    allowedHosts: true, // allow all hosts for running in codesandbox
  },
});
