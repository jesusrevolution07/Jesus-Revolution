import React, { useState } from 'react';
import { getJesusTalk } from '../services/geminiService';
import { JesusMessageResponse } from '../types';

export const JesusTalk: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<JesusMessageResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const feelings = [
    "SINTO MEDO",
    "ESTOU CANSADO",
    "PRECISO DE UM MILAGRE",
    "ME SINTO SOZINHO",
    "QUERO AGRADECER",
    "ESTOU CONFUSO"
  ];

  const handleAsk = async (text: string) => {
    setLoading(true);
    setResponse(null);
    try {
      const result = await getJesusTalk(text);
      setResponse(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 uppercase">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-black shadow-neopop mb-6 border-2 border-black text-white">
             <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-4">
            FALA <span className="text-jr-blue text-outline">JESUS</span>
          </h2>
          <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">
            UM ESPAÇO DE CONFORTO, COMPAIXÃO E AMOR. ABRA SEU CORAÇÃO E RECEBA UMA PALAVRA DO CÉU.
          </p>
        </div>

        {!response ? (
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-neopop border-4 border-black text-center">
            <h3 className="text-2xl font-black mb-8 text-black">COMO ESTÁ SEU CORAÇÃO HOJE?</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {feelings.map((feel) => (
                <button
                  key={feel}
                  onClick={() => handleAsk(feel)}
                  disabled={loading}
                  className="p-4 bg-white rounded-2xl font-bold text-sm text-black hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-sm border-2 border-black"
                >
                  {feel}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="OU DIGITE AQUI O QUE SENTE..."
                value={input}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
                className="w-full bg-gray-50 p-6 rounded-[2rem] text-center font-bold outline-none border-2 border-black focus:shadow-neopop-blue transition-all uppercase text-black"
                onKeyDown={(e) => e.key === 'Enter' && handleAsk(input)}
              />
              <button
                onClick={() => handleAsk(input)}
                disabled={!input.trim() || loading}
                className="absolute right-2 top-2 bg-jr-blue text-white p-4 rounded-full hover:bg-black transition-colors disabled:opacity-50 border-2 border-black"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {loading && (
              <div className="mt-8 text-black font-bold animate-pulse">
                JESUS ESTÁ PREPARANDO UMA PALAVRA PARA VOCÊ...
              </div>
            )}
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            {/* The Message */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-neopop border-4 border-black relative overflow-hidden">
               <div className="mb-6 flex justify-center">
                  <span className="bg-black px-4 py-1 rounded-full text-xs font-black text-white shadow-sm uppercase">COM AMOR, JESUS</span>
               </div>
               <p className="text-2xl md:text-3xl font-serif text-center font-bold text-black leading-relaxed italic">
                 "{response.message}"
               </p>
            </div>

            {/* Verse & Tip */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[3rem] shadow-neopop border-4 border-black">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">PALAVRA SAGRADA</h4>
                  <p className="text-xl font-black text-black mb-2">"{response.verse.text}"</p>
                  <p className="text-jr-blue font-bold text-sm bg-black inline-block text-white px-2 py-1">{response.verse.reference}</p>
               </div>

               <div className="bg-black text-white p-8 rounded-[3rem] shadow-neopop border-4 border-black">
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">DIREÇÃO ESPIRITUAL</h4>
                  <div className="flex items-start gap-4">
                     <span className="text-2xl">🙏</span>
                     <p className="text-lg font-bold leading-relaxed">{response.prayer_tip}</p>
                  </div>
               </div>
            </div>

            <div className="text-center">
               <button 
                 onClick={() => setResponse(null)}
                 className="text-black font-bold hover:bg-black hover:text-white px-6 py-2 rounded-full border-2 border-black transition-colors"
               >
                 RECEBER OUTRA PALAVRA
               </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};