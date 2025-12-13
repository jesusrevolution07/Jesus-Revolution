import React, { useState } from 'react';

export const Maezinha: React.FC = () => {
  const [candles, setCandles] = useState(0);
  const [flowers, setFlowers] = useState(0);

  const titles = [
    { name: "NOSSA SENHORA APARECIDA", desc: "PADROEIRA DO BRASIL. ENCONTRADA NAS ÁGUAS DO RIO PARAÍBA." },
    { name: "NOSSA SENHORA DE FÁTIMA", desc: "A VIRGEM QUE PEDIU ORAÇÃO E PENITÊNCIA." },
    { name: "NOSSA SENHORA DE GUADALUPE", desc: "A IMPERATRIZ DAS AMÉRICAS, AMOR MATERNAL POR TODOS." },
    { name: "NOSSA SENHORA DAS GRAÇAS", desc: "A MEDIANEIRA DE TODAS AS GRAÇAS." },
    { name: "NOSSA SENHORA DO CARMO", desc: "MÃE E PROTETORA DO ESCAPULÁRIO." }
  ];

  return (
    <div className="min-h-screen bg-blue-50/50 text-black relative overflow-hidden uppercase">
      
      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
        
        <div className="text-center mb-16">
          <span className="bg-white text-jr-blue px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
            MÃEZINHA
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight text-blue-900 leading-tight">
            TUDO COM JESUS E<br/> NADA SEM MARIA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          
          {/* Card Image */}
          <div className="h-[500px] bg-white rounded-[3rem] p-4 shadow-soft border border-white flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50"></div>
             {/* Simple Icon */}
             <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center text-blue-300">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>
             <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-blue-900 font-bold opacity-50 uppercase">RAINHA DA JUVENTUDE</p>
             </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-white text-center">
               <p className="text-xl font-medium text-gray-600 italic leading-relaxed uppercase">
                 "AVE MARIA, CHEIA DE GRAÇA, O SENHOR É CONVOSCO..."
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {/* Candle Action */}
               <div className="bg-white p-6 rounded-[2.5rem] text-center hover:shadow-lg transition-all cursor-pointer border border-blue-50 group hover:-translate-y-1" onClick={() => setCandles(c => c + 1)}>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 19C14 19 16 16.5 16 13C16 8 12 2 12 2ZM12 22C11 22 10 21.5 10 20.5C10 19.5 11 19 12 19C13 19 14 19.5 14 20.5C14 21.5 13 22 12 22Z"/></svg>
                  </div>
                  <div className="font-black text-3xl text-gray-800">{candles}</div>
                  <div className="text-xs font-bold uppercase mt-1 text-gray-400">ACENDER VELA</div>
               </div>

               {/* Flower Action */}
               <div className="bg-white p-6 rounded-[2.5rem] text-center hover:shadow-lg transition-all cursor-pointer border border-blue-50 group hover:-translate-y-1" onClick={() => setFlowers(f => f + 1)}>
                   <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center text-pink-500 group-hover:bg-pink-200 transition-colors">
                     {/* Distinct Flower Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-.6 0-1.1.2-1.5.6-.4-.4-.9-.6-1.5-.6-1.1 0-2 .9-2 2 0 .6.2 1.1.6 1.5-.4.4-.6.9-.6 1.5 0 1.1.9 2 2 2 .6 0 1.1-.2 1.5-.6.4.4.9.6 1.5.6 1.1 0 2-.9 2-2 0-.6-.2-1.1-.6-1.5.4-.4.6-.9.6-1.5 0-1.1-.9-2-2-2-.6 0-1.1.2-1.5.6-.4-.4-.9-.6-1.5-.6zm-1 9v11h2v-11h-2z"/></svg>
                  </div>
                  <div className="font-black text-3xl text-gray-800">{flowers}</div>
                  <div className="text-xs font-bold uppercase mt-1 text-gray-400">DAR FLOR</div>
               </div>
            </div>
            
            <div className="bg-blue-100 text-jr-blue p-6 rounded-[2rem] text-center text-sm font-bold uppercase">
               A CADA FLORZINHA OU VELA, REZAMOS UMA AVE MARIA.
            </div>
          </div>
        </div>

        {/* Titles Section */}
        <div className="pt-10">
            <h3 className="text-2xl font-black text-black tracking-tight mb-8 ml-4 uppercase">TÍTULOS DE AMOR</h3>
            <div className="grid md:grid-cols-2 gap-4">
                {titles.map((title, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2.5rem] hover:shadow-soft transition-all border border-transparent hover:border-blue-100 hover:rotate-1">
                        <h4 className="font-bold text-lg text-blue-900 mb-1 uppercase">
                            {title.name}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-bold uppercase">{title.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};