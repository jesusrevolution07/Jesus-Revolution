import React from 'react';

export const Conectados: React.FC = () => {
  return (
    <div className="min-h-screen bg-white uppercase overflow-hidden">
      
      {/* Hero Section with Purple/Blue Gradient */}
      <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white py-24 rounded-b-[4rem] shadow-glow mb-20">
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-[80px]"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/30 animate-pulse">
                <span className="font-bold tracking-widest text-sm">EXPANDINDO O REINO</span>
            </div>
            
            <div className="flex justify-center mb-6">
                <div className="bg-white text-indigo-600 p-6 rounded-full shadow-lg">
                    <svg className="w-16 h-16 md:w-20 md:h-20 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
                PROJETO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">CONECTADOS</span>
            </h2>

            <p className="text-lg md:text-xl font-bold text-blue-100 max-w-3xl mx-auto leading-relaxed">
                ESPALHANDO JESUS POR TODO O BRASIL DE FORMA VIVA, ATUAL E CONECTADA. SEJA UMA PONTE ENTRE O MOVIMENTO E A SUA CIDADE.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 -mt-20 relative z-20 mb-20">
            
            {/* Missionário Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-blue-400 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-3xl font-black text-black mb-4">MISSIONÁRIO</h3>
                <p className="font-bold text-gray-500 mb-6 text-sm leading-relaxed">
                    CAMINHA CONOSCO, PARTICIPA DAS REUNIÕES, RECEBE FORMAÇÕES E COLABORA NA DIVULGAÇÃO. É A PRESENÇA ATIVA DO AMOR DE CRISTO NO DIA A DIA.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        REPRESENTANTE LOCAL
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        VIVÊNCIA DO CARISMA
                    </li>
                </ul>
            </div>

            {/* Missionário Alfa Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-purple-500 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-100 text-purple-600 px-4 py-2 rounded-bl-2xl font-black text-xs">LIDERANÇA</div>
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-3xl font-black text-black mb-4">MISSIONÁRIO <span className="text-purple-600">ALFA</span></h3>
                <p className="font-bold text-gray-500 mb-6 text-sm leading-relaxed">
                    ASSUME UMA RESPONSABILIDADE MAIOR DE LIDERANÇA LOCAL. AJUDA A ORGANIZAR AÇÕES, MOBILIZAR PESSOAS E É REFERÊNCIA DO CONECTADOS EM SUA REGIÃO.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        LÍDER E ORGANIZADOR
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        MATURIDADE NA MISSÃO
                    </li>
                </ul>
            </div>
        </div>

        {/* Steps Section */}
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 text-center border border-gray-100">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-12">COMO FAZER PARTE?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: "📝", title: "INSCREVER-SE", desc: "QUANDO AS VAGAS ABRIREM" },
                    { icon: "🤝", title: "PARTICIPAR", desc: "DAS REUNIÕES ONLINE" },
                    { icon: "📚", title: "VIVER", desc: "AS FORMAÇÕES DO PROJETO" },
                    { icon: "❤️", title: "SERVIR", desc: "COM DESEJO SINCERO" },
                ].map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h4 className="font-black text-lg mb-2 text-indigo-900">{step.title}</h4>
                        <p className="text-xs font-bold text-gray-400">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white border-2 border-dashed border-indigo-200 p-8 rounded-[3rem] inline-block max-w-2xl mx-auto">
                <p className="text-2xl font-black text-indigo-600 mb-2">EM BREVE</p>
                <p className="font-bold text-gray-500 mb-6">ABRIREMOS AS INSCRIÇÕES PARA NOVOS MISSIONÁRIOS.</p>
                <button 
                    disabled
                    className="bg-gray-200 text-gray-400 px-8 py-4 rounded-full font-black text-lg cursor-not-allowed uppercase"
                >
                    AGUARDE NOVIDADES
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};