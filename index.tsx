import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    // Caso o elemento ainda não esteja no DOM por delay de carregamento, tenta novamente em breve
    setTimeout(mountApp, 10);
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Garante que a montagem só ocorra quando o DOM estiver pronto ou após o parsing inicial
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
