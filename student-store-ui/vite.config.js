/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// eslint-disable-next-line no-unused-vars
export default defineConfig((envConfig) => ({
  plugins: [react()],
  server: {
    open: true,
    host: true,
  },
}));
