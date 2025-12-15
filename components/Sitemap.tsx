import React from 'react';
import { Link } from 'react-router-dom';

export const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 uppercase font-sans">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-[2rem] border border-gray-700 shadow-2xl">
        <h1 className="text-3xl font-black text-jr-blue mb-2">DEV SITEMAP</h1>
        <p className="text-gray-400 text-sm font-bold mb-8 tracking-widest">AMBIENTE DE PREVIEW DETECTADO</p>
        
        <nav className="space-y-4">
          <Link 
            to="/home" 
            className="block w-full bg-jr-blue hover:bg-white hover:text-jr-blue text-white font-black py-4 px-6 rounded-xl transition-all text-center border border-transparent hover:border-jr-blue"
          >
            ACESSAR APP PRINCIPAL
          </Link>
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 font-bold mb-2">ROTAS DE SISTEMA:</p>
            <span className="block p-2 bg-black/30 rounded text-xs font-mono text-green-400 mb-1">/ (Root Redirect)</span>
            <span className="block p-2 bg-black/30 rounded text-xs font-mono text-green-400">/sitemap (You are here)</span>
          </div>
        </nav>
      </div>
    </div>
  );
};