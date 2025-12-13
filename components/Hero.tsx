import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onAboutClick }) => {
  return (
    <div className="relative bg-white min-h-[90vh] flex flex-col justify-center overflow-hidden uppercase">
      
      {/* Soft Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-white z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-jr-blue rounded-full blur-[120px] opacity-10"></div>

      {/* Marquee Top */}
      <div className="w-full bg-jr-blue py-3 mb-12 z-10 rotate-[-1deg] shadow-soft">
        <div className="marquee-container">
          <div className="marquee-content text-white font-bold text-lg tracking-widest uppercase">
             ★ JESUS REVOLUTION ★ IDE PELO MUNDO ★ GERAÇÃO JOÃO PAULO II ★ O AMOR VENCEU ★ JESUS REVOLUTION ★ IDE PELO MUNDO ★ GERAÇÃO JOÃO PAULO II ★ O AMOR VENCEU
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        {/* Main Title */}
        <div className="mb-10">
          <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter leading-none mb-2">
            IDE PELO
          </h1>
          <span className="inline-block gradient-text text-6xl md:text-9xl font-black tracking-tighter">
            MUNDO
          </span>
        </div>

        {/* Verse Box */}
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur border border-blue-100 p-8 rounded-[3rem] shadow-soft mb-12 hover:-translate-y-1 transition-transform">
          <p className="text-lg md:text-xl font-medium text-gray-600 uppercase">
            "Ide por todo o mundo e pregai o Evangelho a toda criatura."
          </p>
          <div className="mt-4 flex justify-center">
             <span className="bg-blue-50 text-jr-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
               Marcos 16:15
             </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onJoinClick}
            className="px-10 py-5 bg-jr-blue text-white font-bold text-lg rounded-full shadow-glow hover:bg-blue-600 hover:shadow-lg transition-all transform hover:scale-105 uppercase tracking-wide"
          >
            Fazer Parte da Missão
          </button>
          <button 
             onClick={onAboutClick}
             className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full border border-gray-100 shadow-sm hover:bg-gray-50 transition-all uppercase tracking-wide"
          >
            Quem Somos
          </button>
        </div>
      </div>
    </div>
  );
};