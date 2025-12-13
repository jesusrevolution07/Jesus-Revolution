import React, { useState } from 'react';
import { getSpiritualGuidance } from '../services/geminiService';
import { SpiritualResponse } from '../types';

export const MoodAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<SpiritualResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const quickMoods = [
    "ESTOU TRISTE",
    "ESTOU FELIZ!",
    "PRECISO FALAR COM JESUS",
    "ESTOU ANSIOSO",
    "CORAÇÃO GRATO"
  ];

  const handleAsk = async (customInput?: string) => {
    const textToUse = customInput || input;
    if (!textToUse.trim()) return;
    
    // If specific button clicked, set input visually
    if (customInput) setInput(customInput);

    setLoading(true);
    setError('');
    setResponse(null);
    try {
      const result = await getSpiritualGuidance(textToUse);
      setResponse(result);
    } catch (e) {
      setError('OPS! O SINAL COM O CÉU FALHOU UM POUQUINHO. TENTE DE NOVO! 🙏');
    } finally {
      setLoading(false);
    }
  };

  const openSpotify = () => {
    window.open("https://open.spotify.com/playlist/5BkQnG2DoukW3i4DNk6hL1?si=3Sx8ywOQR4GYZQuZCKiDIg", "_blank");
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-white relative overflow-hidden uppercase">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
             ONLINE
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">
            DJ <span className="text-jr-blue">JR</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 font-medium uppercase">
            SUA PLAYLIST E CONSELHO DO CÉU.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white p-2 rounded-[3rem] shadow-soft border border-blue-100">
          <div className="p-6 md:p-8">
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">COMO VOCÊ ESTÁ?</p>
             
             {/* Quick Moods */}
             <div className="flex flex-wrap gap-3 mb-6">
                {quickMoods.map(mood => (
                    <button 
                        key={mood}
                        onClick={() => handleAsk(mood)}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-50 rounded-full text-sm font-bold text-gray-600 hover:bg-jr-blue hover:text-white transition-all border border-blue-100 uppercase"
                    >
                        {mood}
                    </button>
                ))}
             </div>

            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
                placeholder="OU DIGITE ALGO ESPECÍFICO AQUI..."
                className="w-full h-24 bg-transparent text-lg font-bold text-black placeholder-gray-300 outline-none resize-none uppercase"
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-[2.5rem] flex justify-end">
            <button
              onClick={() => handleAsk()}
              disabled={loading || !input.trim()}
              className={`px-8 py-4 rounded-full font-bold text-white transition-all shadow-lg uppercase ${
                loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-black hover:bg-jr-blue hover:shadow-blue-200'
              }`}
            >
              {loading ? 'SINTONIZANDO...' : 'ENVIAR 🚀'}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-6 text-red-500 text-center font-bold bg-red-50 p-4 rounded-3xl uppercase">
            {error}
          </div>
        )}

        {response && (
          <div className="mt-12 space-y-6">
            {/* Mensagem */}
            <div className="bg-jr-blue text-white p-8 rounded-[3rem] shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
               <h4 className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">MENSAGEM</h4>
              <p className="text-xl md:text-2xl font-bold leading-relaxed uppercase">
                {response.message}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Versículo */}
                <div className="bg-white p-8 rounded-[3rem] shadow-soft border border-blue-50">
                    <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">PALAVRA VIVA</h4>
                    <p className="text-lg font-black italic mb-4 text-gray-800 uppercase">"{response.verse.text}"</p>
                    <p className="text-sm font-bold text-jr-blue uppercase">— {response.verse.reference}</p>
                </div>

                {/* Músicas */}
                <div className="bg-black text-white p-8 rounded-[3rem] shadow-lg">
                    <h3 className="text-xl font-black mb-6 flex items-center gap-2 uppercase">
                        🎧 PLAYLIST DJ JR
                    </h3>
                    <div className="space-y-4">
                        {response.songs.map((song, idx) => (
                        <div key={idx} onClick={openSpotify} className="flex items-center gap-4 group cursor-pointer hover:bg-white/10 p-3 rounded-2xl transition-all">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold text-sm text-gray-400 group-hover:bg-jr-blue group-hover:text-white transition-colors">
                                {idx + 1}
                            </div>
                            <div>
                                <p className="font-bold uppercase">{song.title}</p>
                                <p className="text-gray-500 text-xs uppercase tracking-wide">{song.artist}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                     <div className="mt-6 pt-4 border-t border-gray-800">
                         <button onClick={openSpotify} className="w-full text-center text-xs font-bold text-green-400 hover:text-green-300 uppercase">
                            ABRIR NO SPOTIFY 
                         </button>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};