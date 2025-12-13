import React from 'react';

export const Saints: React.FC = () => {
  const saints = [
    {
      name: "SANTA TERESINHA",
      title: "DOUTORA DA IGREJA",
      quote: "QUERO PASSAR O MEU CÉU FAZENDO O BEM NA TERRA.",
      image: "https://picsum.photos/400/400?random=200", 
      tags: ["AMOR", "ROSAS", "PEQUENA VIA"],
    },
    {
      name: "CARLO ACUTIS",
      title: "PADROEIRO DA INTERNET",
      quote: "A EUCARISTIA É A MINHA ESTRADA PARA O CÉU.",
      image: "https://picsum.photos/400/400?random=201", 
      tags: ["GEEK", "EUCARISTIA", "JOVEM"],
    },
    {
      name: "SÃO PADRE PIO",
      title: "SANTO DOS ESTIGMAS",
      quote: "REZE, ESPERE E NÃO SE PREOCUPE.",
      image: "https://picsum.photos/400/400?random=202", 
      tags: ["CONFISSÃO", "MILAGRES", "FÉ"],
    },
    {
      name: "SÃO BENTO",
      title: "PAI DOS MONGES",
      quote: "ORA ET LABORA.",
      image: "https://picsum.photos/400/400?random=203", 
      tags: ["PROTEÇÃO", "REGRA", "PAZ"],
    },
    {
      name: "SÃO MIGUEL ARCANJO",
      title: "PRÍNCIPE DA MILÍCIA CELESTE",
      quote: "QUEM COMO DEUS?",
      image: "https://picsum.photos/400/400?random=204", 
      tags: ["BATALHA", "DEFESA", "ANJO"],
    },
    {
      name: "SANTA GIANNA",
      title: "MÃE DE FAMÍLIA",
      quote: "O SEGREDO DA FELICIDADE É VIVER MOMENTO A MOMENTO.",
      image: "https://picsum.photos/400/400?random=205", 
      tags: ["FAMÍLIA", "VIDA", "MÉDICA"],
    },
    {
      name: "SANTA EDWIGES",
      title: "PROTETORA DOS POBRES",
      quote: "AMOU AOS POBRES COMO A SI MESMA.",
      image: "https://picsum.photos/400/400?random=206", 
      tags: ["ENDIVIDADOS", "CARIDADE", "FÉ"],
    },
    {
      name: "SANTA RITA DE CÁSSIA",
      title: "DAS CAUSAS IMPOSSÍVEIS",
      quote: "AMAI A DEUS SOBRE TODAS AS COISAS.",
      image: "https://picsum.photos/400/400?random=207", 
      tags: ["ESPERANÇA", "ROSAS", "MILAGRE"],
    }
  ];

  return (
    <div className="min-h-screen bg-surface py-20 px-4 uppercase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-jr-blue px-4 py-1 rounded-full text-xs font-black tracking-widest mb-4 transform -rotate-2">
             INTERCESSORES
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-2 tracking-tighter">
            SQUAD DO <span className="text-jr-blue">CÉU</span>
          </h2>
          <p className="text-gray-500 font-bold">NOSSOS AMIGOS NO ALTO.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {saints.map((saint, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-blue-50">
              
              {/* Image */}
              <div className="h-64 rounded-[2.5rem] overflow-hidden relative mb-4">
                 <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <img 
                  src={saint.image} 
                  alt={saint.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-jr-blue shadow-sm">
                    {saint.title}
                 </div>
              </div>
              
              {/* Content */}
              <div className="px-3 pb-4">
                <h3 className="text-xl font-black text-black mb-2 leading-tight">{saint.name}</h3>
                
                <div className="bg-blue-50/50 p-4 rounded-3xl mb-4 min-h-[80px] flex items-center">
                   <p className="text-gray-600 font-bold italic text-xs leading-relaxed">"{saint.quote}"</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {saint.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white border border-gray-100 text-gray-400 text-[9px] font-black rounded-full uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://api.whatsapp.com/send?phone=5516991417024&text=Olá!%20Gostaria%20de%20pedir%20intercessão."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-black text-white font-bold rounded-2xl hover:bg-green-500 transition-colors text-xs uppercase tracking-widest shadow-lg text-center"
                >
                  PEDIR INTERCESSÃO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};