import React, { useState } from 'react';
import { getJesusTalk } from '../services/geminiService';
import { JesusMessageResponse } from '../types';

interface HeroProps {
  onJoinClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onAboutClick }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState<JesusMessageResponse | null>(null);
  const [chatLoading, setChatLoading] = useState(false);

  const handleAskJesus = async () => {
    if (!chatInput.trim()) return;
    setChatLoading(true);
    setChatResponse(null);
    try {
      const result = await getJesusTalk(chatInput);
      setChatResponse(result);
    } catch (e) {
      console.error(e);
    } finally {
      setChatLoading(false);
    }
  };

  const LightningIcon = () => (
    <svg className="w-5 h-5 mx-4 inline-block text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  return (
    <div className="relative bg-white min-h-[90vh] flex flex-col justify-center overflow-hidden uppercase">
      
      {/* Soft Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-white z-0"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-jr-blue rounded-full blur-[120px] opacity-10"></div>

      {/* Marquee Top */}
      <div className="w-full bg-jr-blue py-3 mb-12 z-10 rotate-[-1deg] shadow-soft">
        <div className="marquee-container">
          <div className="marquee-content text-white font-bold text-lg tracking-widest uppercase whitespace-nowrap">
             <span className="flex items-center">
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO 
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO 
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO 
             </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        {/* Main Title */}
        <div className="mb-10 flex flex-col items-center justify-center md:gap-4">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-2 md:mb-0 text-jr-blue drop-shadow-sm">
            JESUS
          </h1>
          <span className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-black">
            REVOLUTION
          </span>
        </div>

        {/* Verse & Theme Box */}
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur border border-blue-100 p-8 rounded-[3rem] shadow-soft mb-12 hover:-translate-y-1 transition-transform">
          <p className="text-lg md:text-xl font-medium text-gray-600 uppercase mb-6">
            "Ide por todo o mundo e pregai o Evangelho a toda criatura."
          </p>
          
          <div className="flex flex-col items-center gap-4">
             <span className="bg-blue-50 text-jr-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
               Marcos 16:15
             </span>
             
             <div className="w-full h-px bg-blue-100 my-2"></div>
             
             <div className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <p className="font-black text-lg md:text-xl tracking-tight">
                   TEMA 2026: ELE ESTÁ NO MEIO DE NÓS
                </p>
             </div>
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

      {/* FLOATING JESUS TALK WIDGET - BIG VERSION */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
         
         {/* The Card (Visible only when open) */}
         {isChatOpen && (
             <div className="bg-white p-8 rounded-[3rem] rounded-br-none shadow-2xl border-2 border-blue-100 w-96 md:w-[28rem] mb-6 animate-fade-in-up origin-bottom-right">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-black text-black flex items-center gap-2 tracking-tight">
                        FALA JESUS <span className="text-blue-500 drop-shadow-sm">♥</span>
                    </h3>
                    <button onClick={() => setIsChatOpen(false)} className="bg-gray-100 p-2 rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {!chatResponse ? (
                    <>
                        <p className="text-gray-500 font-bold text-lg mb-6 leading-tight">
                            COMO ESTÁ SEU CORAÇÃO HOJE? DIGITE ABAIXO E RECEBA UMA PALAVRA.
                        </p>
                        <textarea 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value.toUpperCase())}
                            placeholder="JESUS, EU SINTO..."
                            className="w-full bg-blue-50/50 rounded-3xl p-6 text-xl font-bold text-blue-900 placeholder-blue-300 outline-none resize-none mb-4 h-32 border-2 border-transparent focus:border-blue-400 focus:bg-white transition-all shadow-inner"
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleAskJesus()}
                        />
                        <button 
                            onClick={handleAskJesus}
                            disabled={!chatInput.trim() || chatLoading}
                            className="w-full bg-black text-white py-5 rounded-3xl font-black text-xl uppercase hover:bg-jr-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
                        >
                            {chatLoading ? 'JESUS ESTÁ ESCREVENDO...' : 'ENVIAR PARA O CÉU'}
                        </button>
                    </>
                ) : (
                    <div className="animate-fade-in">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl mb-6 relative border border-blue-100 shadow-sm">
                           <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow-md border border-blue-50">
                                <span className="text-2xl">🕊️</span>
                           </div>
                           <p className="text-blue-900 font-bold text-xl italic leading-relaxed font-serif">
                                "{chatResponse.message}"
                           </p>
                        </div>
                        <div className="text-center bg-gray-50 p-4 rounded-3xl border border-gray-100">
                            <p className="text-xs font-black text-gray-400 mb-2 tracking-widest uppercase">VERSÍCULO PARA VOCÊ</p>
                            <p className="text-lg font-black text-black mb-2 leading-tight">"{chatResponse.verse.text}"</p>
                            <span className="text-xs bg-black text-white px-3 py-1 rounded-full font-bold">{chatResponse.verse.reference}</span>
                        </div>
                        <button 
                            onClick={() => { setChatResponse(null); setChatInput(''); }}
                            className="w-full mt-6 py-3 text-sm font-black text-jr-blue hover:text-black hover:bg-blue-50 rounded-xl transition-colors underline decoration-2 underline-offset-4"
                        >
                            FALAR OUTRA COISA
                        </button>
                    </div>
                )}
             </div>
         )}

         {/* Floating Button - BIGGER AND PULSING */}
         <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="group flex items-center gap-4 bg-white pl-8 pr-3 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] border-2 border-blue-50 transition-all hover:scale-105"
         >
            <div className="flex flex-col items-start">
                <span className="font-black text-2xl text-black group-hover:text-jr-blue transition-colors leading-none">FALA JESUS</span>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest group-hover:text-blue-300">CLIQUE AQUI</span>
            </div>
            
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-jr-blue transition-colors relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:animate-ping"></div>
                
                <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
         </button>
      </div>

    </div>
  );
};