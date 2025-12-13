import React from 'react';

export const Events: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto bg-white uppercase">
      <h2 className="text-6xl font-black text-jr-blue text-center mb-16 tracking-tighter">
        AGENDA <span className="text-black bg-blue-50 px-4 rounded-3xl">JR</span>
      </h2>

      <div className="flex flex-col items-center justify-center">
         
         <div className="bg-white border border-blue-100 p-8 md:p-16 text-center shadow-soft max-w-4xl relative overflow-hidden group rounded-[4rem]">
            <div className="relative z-10 flex flex-col items-center">
                <div className="text-jr-blue mb-6 animate-bounce">
                    <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                    DE <span className="text-jr-blue underline decoration-4 underline-offset-8 decoration-blue-200">FÉRIAS</span>
                </h3>
                <div className="inline-block bg-blue-50 text-jr-blue px-6 py-2 text-xl font-bold rounded-full mb-8 uppercase">
                    (MAS TRABALHANDO)
                </div>
                <p className="text-xl md:text-2xl font-bold text-gray-500 max-w-2xl mx-auto uppercase">
                    ESTAMOS RECARREGANDO AS ENERGIAS E PREPARANDO NOVIDADES INCRÍVEIS PARA A PRÓXIMA TEMPORADA DO JESUS REVOLUTION. FIQUE LIGADO NO INSTA!
                </p>
                
                <div className="mt-10">
                    <a 
                        href="https://www.instagram.com/jesus.revolution7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-jr-blue text-white px-8 py-4 font-black uppercase text-lg rounded-full shadow-glow hover:bg-blue-600 transition-all inline-block"
                    >
                        ACOMPANHE NO INSTAGRAM
                    </a>
                </div>
            </div>
         </div>

      </div>
    </div>
  );
};