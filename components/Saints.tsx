import React from 'react';

export const Saints: React.FC = () => {
  const saints = [
    { name: "SANTA TERESINHA", title: "DOUTORA DA IGREJA", quote: "QUERO PASSAR O MEU CÉU FAZENDO O BEM NA TERRA.", image: "https://picsum.photos/400/400?random=200", tags: ["AMOR", "ROSAS"] },
    { name: "CARLO ACUTIS", title: "PADROEIRO DA INTERNET", quote: "A EUCARISTIA É A MINHA ESTRADA PARA O CÉU.", image: "https://picsum.photos/400/400?random=201", tags: ["GEEK", "EUCARISTIA"] },
    { name: "SÃO PADRE PIO", title: "SANTO DOS ESTIGMAS", quote: "REZE, ESPERE E NÃO SE PREOCUPE.", image: "https://picsum.photos/400/400?random=202", tags: ["CONFISSÃO", "FÉ"] },
    { name: "SÃO MIGUEL ARCANJO", title: "PRÍNCIPE DA MILÍCIA", quote: "QUEM COMO DEUS?", image: "https://picsum.photos/400/400?random=204", tags: ["BATALHA", "ANJO"] },
  ];

  return (
    <div className="min-h-screen bg-surface py-20 px-4 uppercase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-jr-blue px-4 py-1 rounded-full text-xs font-black tracking-widest mb-4">INTERCESSORES</div>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-2 tracking-tighter">SQUAD DO <span className="text-jr-blue">CÉU</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saints.map((saint, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-3 shadow-sm hover:shadow-xl transition-all group border border-blue-50">
              <div className="h-64 rounded-[2.5rem] overflow-hidden relative mb-4">
                 <img src={saint.image} alt={saint.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="px-3 pb-4 text-center">
                <h3 className="text-xl font-black text-black mb-2">{saint.name}</h3>
                <p className="text-gray-600 font-bold italic text-xs mb-6">"{saint.quote}"</p>
                <a 
                  href="https://api.whatsapp.com/send?phone=5516991417024&text=Olá%20Jesus%20Revolution!%20Peço%20intercessão."
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full py-3 bg-jr-blue text-white font-bold rounded-2xl hover:bg-jr-darkblue transition-colors text-xs shadow-lg uppercase"
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