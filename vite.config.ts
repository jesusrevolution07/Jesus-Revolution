import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ESSENTIAL: Sets base to relative './' to ensure assets load correctly 
  // in sub-paths or proxy environments (like Cloud Shell/IDX/Github Pages).
  base: './',
});