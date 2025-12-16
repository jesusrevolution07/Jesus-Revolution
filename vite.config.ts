import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ESSENTIAL: Sets base to relative './' to ensure assets load correctly 
  // in sub-paths or proxy environments (like Cloud Shell/IDX/Github Pages).
  base: './',
  build: {
    // Aumenta o limite de aviso para 1600kb (1.6MB) para acomodar bibliotecas grandes sem avisos
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas do React em um arquivo 'vendor'
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Separa a biblioteca de IA em um arquivo próprio, pois é pesada
          genai: ['@google/genai']
        }
      }
    }
  }
});