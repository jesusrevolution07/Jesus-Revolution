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
    <svg className="w-5 h-5 mx-4 inline-block mb-1 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden uppercase bg-offwhite">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
      
      {/* Marquee Top - Gradient Blue */}
      <div className="w-[110%] -ml-4 bg-gradient-to-r from-jr-blue to-blue-400 py-4 mb-12 z-10 rotate-[-2deg] shadow-lg hover:rotate-[-1deg] transition-transform cursor-default">
        <div className="marquee-container">
          <div className="marquee-content text-white font-black text-2xl tracking-widest uppercase whitespace-nowrap">
             <span className="flex items-center">
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO 
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO 
               <LightningIcon /> IDE PELO MUNDO <LightningIcon /> JESUSZANDO <LightningIcon /> TUDO PELO TUDO
             </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        {/* Main Title - Blue Outline & Gradient */}
        <div className="mb-10 flex flex-col items-center justify-center relative">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-primary drop-shadow-sm relative z-10 hover:scale-105 transition-transform duration-300 cursor-default">
            JESUS
            <svg className="absolute -top-10 -right-10 w-24 h-24 text-jr-darkblue animate-spin-slow opacity-20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </h1>
          <span className="text-5xl md:text-[7rem] font-black tracking-tighter leading-none text-outline md:-mt-4 relative z-0">
            REVOLUTION
          </span>
        </div>

        {/* Verse & Theme Box - Gradient Border */}
        <div className="max-w-2xl mx-auto bg-white border border-blue-200 p-8 rounded-[3rem] shadow-neopop mb-12 transform hover:-translate-y-1 transition-all">
          <p className="text-xl md:text-2xl font-bold text-jr-darkblue uppercase mb-6 leading-tight">
            "Ide por todo o mundo e pregai o Evangelho a toda criatura."
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <span className="bg-gradient-dark text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
               Marcos 16:15
             </span>
             
             <div className="hidden md:block w-px h-8 bg-blue-200"></div>
             
             <div className="bg-white text-jr-blue px-6 py-2 rounded-full border border-blue-200 transform hover:scale-105 transition-transform cursor-pointer hover:bg-gradient-primary hover:text-white hover:border-transparent">
                <p className="font-bold text-sm md:text-base tracking-tight">
                   TEMA 2026: ELE ESTÁ NO MEIO DE NÓS
                </p>
             </div>
          </div>
        </div>

        {/* Buttons - Blue Gradients */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onJoinClick}
            className="px-10 py-5 bg-gradient-primary text-white font-black text-xl rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all transform hover:-translate-y-1 uppercase tracking-wide w-full sm:w-auto"
          >
            Fazer Parte 🚀
          </button>
          <button 
             onClick={onAboutClick}
             className="px-10 py-5 bg-white text-jr-darkblue border border-blue-200 font-black text-xl rounded-full shadow-sm hover:bg-blue-50 transition-all transform hover:-translate-y-1 uppercase tracking-wide w-full sm:w-auto"
          >
            Quem Somos
          </button>
        </div>
      </div>

      {/* FLOATING JESUS TALK WIDGET - Blue Theme */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
         
         {/* The Card */}
         {isChatOpen && (
             <div className="bg-white border-2 border-blue-100 p-6 rounded-[2.5rem] shadow-2xl w-full max-w-[90vw] md:w-[28rem] mb-6 animate-fade-in-up origin-bottom-right">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                    <h3 className="text-3xl font-black text-jr-darkblue flex items-center gap-2 tracking-tight">
                        FALA JESUS <span className="text-jr-blue text-4xl">♥</span>
                    </h3>
                    <button onClick={() => setIsChatOpen(false)} className="bg-gray-100 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {!chatResponse ? (
                    <>
                        <p className="text-white font-bold text-xl mb-4 leading-none bg-gradient-primary inline-block px-4 py-2 rounded-full shadow-md">
                            COMO ESTÁ SEU CORAÇÃO?
                        </p>
                        <textarea 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value.toUpperCase())}
                            placeholder="JESUS, EU SINTO..."
                            className="w-full bg-blue-50 rounded-3xl p-4 text-xl font-bold text-jr-darkblue placeholder-blue-300 outline-none resize-none mb-4 h-32 border border-blue-100 focus:border-jr-blue focus:ring-2 focus:ring-blue-100 transition-all"
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleAskJesus()}
                        />
                        <button 
                            onClick={handleAskJesus}
                            disabled={!chatInput.trim() || chatLoading}
                            className="w-full bg-jr-darkblue text-white border-2 border-transparent py-4 rounded-full font-black text-xl uppercase hover:bg-jr-blue transition-all shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0"
                        >
                            {chatLoading ? 'CONECTANDO...' : 'ENVIAR PARA O CÉU'}
                        </button>
                    </>
                ) : (
                    <div className="animate-fade-in">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-3xl mb-6 relative border border-blue-100 shadow-inner">
                           <div className="absolute -top-5 -left-3 bg-gradient-primary text-white rounded-full p-2 shadow-lg">
                                <span className="text-2xl">🕊️</span>
                           </div>
                           <p className="text-jr-darkblue font-bold text-lg italic leading-relaxed font-serif mt-2">
                                "{chatResponse.message}"
                           </p>
                        </div>
                        <div className="text-center bg-jr-darkblue text-white p-4 rounded-3xl shadow-lg">
                            <p className="text-xs font-black text-blue-300 mb-2 tracking-widest uppercase">VERSÍCULO PARA VOCÊ</p>
                            <p className="text-lg font-bold mb-2 leading-tight">"{chatResponse.verse.text}"</p>
                            <span className="text-xs bg-white text-jr-darkblue px-3 py-1 rounded-full font-bold">{chatResponse.verse.reference}</span>
                        </div>
                        <button 
                            onClick={() => { setChatResponse(null); setChatInput(''); }}
                            className="w-full mt-6 py-3 text-sm font-black text-jr-blue hover:bg-blue-50 rounded-full transition-all underline decoration-2 underline-offset-4"
                        >
                            FALAR OUTRA COISA
                        </button>
                    </div>
                )}
             </div>
         )}

         {/* Floating Button */}
         <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="group flex items-center gap-3 bg-white pl-6 pr-2 py-2 rounded-full shadow-xl border border-blue-200 transition-all hover:-translate-y-1 hover:shadow-2xl active:translate-y-1 active:shadow-none"
         >
            <div className="flex flex-col items-start">
                <span className="font-black text-xl text-jr-darkblue leading-none">FALA JESUS</span>
                <span className="text-[10px] font-bold bg-jr-blue text-white px-2 rounded-full mt-1">ONLINE</span>
            </div>
            
            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center group-hover:brightness-110 transition-all shadow-md relative">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
            </div>
         </button>
      </div>

    </div>
  );
};