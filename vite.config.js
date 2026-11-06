import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 231,
    strictPort: true,
    allowedHosts: ['trumpyfnb.cyberpunk.co.in', '.cyberpunk.co.in', 'localhost', '127.0.0.1'],
  },
  preview: {
    host: '0.0.0.0',
    port: 231,
    strictPort: true,
    allowedHosts: ['trumpyfnb.cyberpunk.co.in', '.cyberpunk.co.in', 'localhost', '127.0.0.1'],
  },
});

