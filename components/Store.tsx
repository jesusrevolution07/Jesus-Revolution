import React from 'react';

export const Store: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto bg-white uppercase min-h-[60vh] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl">
        <div className="bg-blue-50 p-6 rounded-full mb-8 animate-bounce">
            <svg className="w-20 h-20 text-jr-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-6">
            EM BREVE <br/> <span className="text-jr-blue">NOVIDADES</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-bold text-gray-400 max-w-xl mx-auto leading-relaxed">
            ESTAMOS PREPARANDO UMA COLEÇÃO EXCLUSIVA PARA VOCÊ VESTIR O PROPÓSITO.
        </p>

        <div className="mt-12">
            <span className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest border-2 border-black">
                AGUARDE 2026
            </span>
        </div>
      </div>
    </div>
  );
};