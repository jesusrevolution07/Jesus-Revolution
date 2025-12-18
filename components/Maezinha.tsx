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
    <div className="min-h-screen bg-white text-jr-darkblue relative overflow-hidden uppercase">
      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-jr-blue text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-neopop border-2 border-jr-blue">
            MÃEZINHA
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight text-jr-darkblue leading-tight">
            TUDO COM JESUS E<br/> NADA SEM MARIA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="h-[500px] bg-white rounded-[3rem] p-4 shadow-neopop border-4 border-jr-blue flex items-center justify-center relative overflow-hidden">
             <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-xl">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>
             <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-jr-darkblue font-bold uppercase tracking-widest">RAINHA DA JUVENTUDE</p>
             </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 p-10 rounded-[3rem] shadow-sm border-2 border-blue-200 text-center">
               <p className="text-xl font-medium text-jr-darkblue italic leading-relaxed uppercase">
                 "AVE MARIA, CHEIA DE GRAÇA, O SENHOR É CONVOSCO..."
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded-[2.5rem] text-center hover:shadow-neopop transition-all cursor-pointer border-2 border-blue-200 hover:border-jr-blue group" onClick={() => setCandles(c => c + 1)}>
                  <div className="w-12 h-12 bg-jr-blue rounded-full mx-auto mb-3 flex items-center justify-center text-white group-hover:bg-jr-darkblue">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C12 2 8 8 8 13C8 16.5 10 19 12 19C14 19 16 16.5 16 13C16 8 12 2 12 2Z"/></svg>
                  </div>
                  <div className="font-black text-3xl text-jr-darkblue">{candles}</div>
                  <div className="text-xs font-bold uppercase mt-1 text-blue-400">ACENDER VELA</div>
               </div>
               <div className="bg-white p-6 rounded-[2.5rem] text-center hover:shadow-neopop transition-all cursor-pointer border-2 border-blue-200 hover:border-jr-blue group" onClick={() => setFlowers(f => f + 1)}>
                   <div className="w-12 h-12 bg-jr-blue rounded-full mx-auto mb-3 flex items-center justify-center text-white group-hover:bg-jr-darkblue">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5c0 0-3 3-3 6.5s3 4.5 3 4.5 3-1 3-4.5-3-6.5-3-6.5z" /></svg>
                  </div>
                  <div className="font-black text-3xl text-jr-darkblue">{flowers}</div>
                  <div className="text-xs font-bold uppercase mt-1 text-blue-400">DAR FLOR</div>
               </div>
            </div>
            <div className="bg-jr-darkblue text-white p-6 rounded-[2rem] text-center text-sm font-bold uppercase border-2 border-jr-darkblue shadow-lg">
               A CADA FLORZINHA OU ACENDER UMA VELA, REZE UMA AVE MARIA.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};