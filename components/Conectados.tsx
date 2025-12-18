import React from 'react';

export const Conectados: React.FC = () => {
  const connectedStates = [
    { id: 'AM', name: 'AMAZONAS' },
    { id: 'PA', name: 'PARÁ' },
    { id: 'CE', name: 'CEARÁ' },
    { id: 'MS', name: 'MATO GROSSO DO SUL' },
    { id: 'MG', name: 'MINAS GERAIS' },
    { id: 'ES', name: 'ESPÍRITO SANTO' },
    { id: 'SP', name: 'SÃO PAULO' },
    { id: 'PR', name: 'PARANÁ' },
  ];

  return (
    <div className="min-h-screen bg-offwhite uppercase overflow-hidden font-sans">
      <div className="relative bg-gradient-conectados text-white py-24 rounded-b-[4rem] shadow-neopop-purple mb-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full mb-8 border border-white/30 font-bold tracking-widest text-sm shadow-lg">
                JESUSZANDO O BRASIL
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-md">
                PROJETO <br/>
                <span className="text-purple-200">CONECTADOS</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-purple-100 max-w-3xl mx-auto leading-relaxed">
                ESPALHANDO JESUS POR TODO O BRASIL DE FORMA VIVA, ATUAL E CONECTADA.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="mb-32">
            <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-jr-blue to-jr-purple mb-4 tracking-tighter">
                   JÁ CHEGAMOS EM
                </h3>
                <div className="h-1 w-24 bg-gradient-conectados mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {connectedStates.map((state) => (
                    <div key={state.id} className="group relative bg-white p-6 rounded-3xl border border-purple-100 shadow-sm hover:shadow-neopop-purple transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-conectados opacity-10 rounded-bl-[4rem]"></div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-conectados text-white flex items-center justify-center font-black text-lg shadow-md">{state.id}</div>
                            <h4 className="font-black text-lg text-jr-black leading-none">{state.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 text-center border border-purple-100 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-black text-jr-black mb-12 tracking-tight">COMO FAZER PARTE?</h3>
            <div className="mt-16 bg-gradient-conectados border border-purple-200 p-10 rounded-[3rem] inline-block max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                <p className="text-2xl font-black text-white mb-2 relative z-10">EM BREVE</p>
                <p className="font-bold text-purple-100 mb-8 relative z-10">ABRIREMOS AS INSCRIÇÕES PARA NOVOS MISSIONÁRIOS NO PROJETO CONECTADOS.</p>
                <button disabled className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-black text-lg cursor-not-allowed uppercase border border-white/30">
                    AGUARDE NOVIDADES
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};