import React from 'react';

export const Conectados: React.FC = () => {
  // Positioning markers based on a 1000x1000 SVG coordinate system for Brazil
  // Coordinates approximated to match the simplified SVG path below
  const connectedStates = [
    { id: 'AM', name: 'AMAZONAS', top: '20%', left: '25%' },
    { id: 'PA', name: 'PARÁ', top: '22%', left: '48%' },
    { id: 'CE', name: 'CEARÁ', top: '22%', left: '85%' },
    { id: 'MS', name: 'MATO GROSSO DO SUL', top: '65%', left: '45%' },
    { id: 'MG', name: 'MINAS GERAIS', top: '62%', left: '68%' },
    { id: 'ES', name: 'ESPÍRITO SANTO', top: '65%', left: '78%' },
    { id: 'SP', name: 'SÃO PAULO', top: '72%', left: '60%' },
    { id: 'PR', name: 'PARANÁ', top: '78%', left: '55%' },
  ];

  return (
    <div className="min-h-screen bg-white uppercase overflow-hidden">
      
      {/* Hero Section with Purple/Blue Gradient */}
      <div className="relative bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-600 text-white py-24 rounded-b-[4rem] shadow-glow mb-20">
        
        {/* Abstract shapes / Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="font-bold tracking-widest text-sm text-blue-100">JESUSZANDO O BRASIL</span>
            </div>
            
            <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-tr from-white to-blue-100 text-indigo-700 p-6 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                    <svg className="w-16 h-16 md:w-20 md:h-20 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-lg">
                PROJETO <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">CONECTADOS</span>
            </h2>

            <p className="text-lg md:text-xl font-bold text-indigo-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                ESPALHANDO JESUS POR TODO O BRASIL DE FORMA VIVA, ATUAL E CONECTADA. ONDE TEM JR, TEM FOGO!
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        
        {/* Map Section */}
        <div className="mb-32">
            <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 tracking-tighter">
                   JÁ CHEGAMOS EM
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">A REVOLUÇÃO ESTÁ ACONTECENDO</p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto aspect-[5/5] bg-gradient-to-b from-gray-50 to-white rounded-[4rem] border border-blue-50 shadow-soft p-4 md:p-8">
                
                {/* Real Brazil Map SVG */}
                <div className="relative w-full h-full">
                   <svg viewBox="0 0 612 612" className="w-full h-full drop-shadow-2xl opacity-50">
                      {/* Detailed Brazil Outline */}
                      <path 
                        d="M213.9,78.2c-2.8-1.4-5.4-3.5-5.6-7.1c-0.2-2.7-2.1-4.7-4.1-6.1c-5.8-3.9-10.4-1.2-14.9,2.4 c-4.9,3.9-9.9,7.6-15.6,10.2c-5.9,2.7-12.7,3-18.1-0.9c-4.9-3.5-5.9-9.1-5-14.7c1-5.9,2.8-11.6,4-17.5c1.1-5.3-0.9-9.9-5.1-13.1 c-4.1-3.1-9.3-2.6-14,0.1c-6.1,3.4-12.8,2.7-18.8-0.8c-3.1-1.8-6.1-3.6-9.1-5.5C102,1,96.3-0.7,89.9,1.7C86,3.1,84.1,6.5,84,10.5 c-0.1,5.2-0.8,10.3-3.6,14.8c-3.2,5.1-1.8,10.2,1.3,14.9c3.4,5.1,6.7,10.3,9.8,15.6c4,6.7,2.2,13.2-3.8,17.9 c-4.8,3.7-9.4,7.6-14.1,11.5c-3.9,3.3-8.3,4.7-13.2,3.3c-2.3-0.6-4.6-0.8-7-0.7c-4.5,0.2-7.5,2.6-9.2,6.5c-1.3,3-1.6,6.3-2.1,9.5 c-0.7,5.5-3.3,9.5-8.5,11.5c-2.5,1-5.2,1.8-7.9,1.9c-6.2,0.3-10.9,3.6-13.5,9.2C10,131,8.3,135.5,6.5,139.9 c-1.6,3.8-3.4,7.6-4.4,11.6c-1.4,5.4,0.2,10.1,4.2,13.8c3,2.8,4.7,6.3,4.7,10.5c-0.1,6.6,1.4,12.7,5.7,17.9c4.3,5.1,5.5,11,4,17.4 c-1.5,6.2-2.1,12.6,2.1,18.1c3.1,4.1,5,8.7,4.8,14c-0.3,7.9,3.6,13.9,10.4,17.3c7.2,3.6,10.5,9.9,11.3,17.5c0.6,6,4.6,9.8,9.7,12 c6.1,2.6,8.9,7.6,9.2,14c0.3,5.5,0.2,11,2,16.2c3.4,9.6,9.7,16.8,18.9,20.8c5.4,2.3,7.6,7.1,8.4,12.7c0.6,4.1,3,7.4,6.8,9.4 c6.3,3.3,12.7,6.4,19.3,9.1c5.9,2.4,12,4.6,18.1,6.5c8.3,2.6,12.2,8.9,12.7,17.4c0.5,8,3.7,14.6,10,19.4c5.8,4.4,12.5,7.1,19.7,8.2 c7.3,1.1,13.1,5.1,16.9,11.3c2.9,4.7,5.6,9.5,8.5,14.2c3.4,5.5,5.1,11.4,3,17.8c-2,6.1-1.3,12.1,1.9,17.6c3.1,5.2,6.5,10.3,8,16.3 c1.6,6.3,5.3,11.1,11.2,13.9c7.7,3.6,15.5,7.1,23.5,9.9c7.4,2.6,11.6,8.2,12.7,15.9c0.8,6,3.8,10.8,8.8,14.1 c6.8,4.4,12,10.3,15.5,17.7c2.5,5.2,6.6,8.8,12.2,10.2c5.6,1.4,10.4,4.4,13.7,9.3c3.4,4.9,8.2,7.3,13.9,7.8c7.8,0.7,15,3.2,21.5,7.8 c4.4,3.1,9.2,4.5,14.5,4.3c8.1-0.3,14.6,3.4,20,8.8c4.3,4.4,8.8,6,14.9,5.7c5.4-0.3,10.8-0.9,16.1-0.1c7.4,1,13.4-1.9,18.5-7.1 c3.7-3.8,6.8-8.1,10.7-11.7c6.1-5.7,11.8-11.7,13.7-20.1c1.4-6.3,5.1-10.9,11.5-12.2c7-1.4,12.4-5.3,16.2-11.3 c5.1-8.1,10.7-15.8,18.8-21.5c4.7-3.3,7.1-7.7,7.2-13.4c0.2-8.3,2.4-15.6,8.8-21.1c5.2-4.5,9-10.3,12.6-16.1 c4.4-7.2,6.2-14.8,2.7-22.9c-2.3-5.2-1.7-10.4,1.4-15.1c3.7-5.5,8.2-10.3,14-13.7c5.6-3.3,8.7-8.3,10-14.5 c1.5-7.3,4.8-13.4,11.1-17.3c6.1-3.8,11.9-8,17.2-12.7c5.8-5.2,8.8-11.9,9-19.7c0.2-6.6,1.7-12.8,5.4-18.4c4.1-6.1,4.4-12.7,2.8-19.6 c-2-8.5,0.7-15.7,7.2-21.3c4.2-3.7,6.4-8.3,7-13.8c0.7-7.2,3.3-13.7,8.6-18.8c4.4-4.2,6.4-9.3,6.2-15.3c-0.2-4.9,0.8-9.7,3.6-13.8 c4-5.8,3.9-12.2,2.4-18.6c-2.2-9.6-6.6-17.9-14-24.8c-2.2-2.1-4.1-4.7-5.3-7.5c-2.9-7-2.6-14,2.3-20.3c3-3.8,3.2-8,1.2-12.4 c-2.3-5-1.9-10.1,1.8-14.5c4.6-5.4,4.4-11.6,2.2-17.8c-2.3-6.5-6.3-11.8-12.3-15.2c-7-4-10.8-10.4-11.2-18.4 c-0.4-8.2-3.1-15.5-9.2-21.3c-5.8-5.5-8.4-12.4-7.6-20.3c0.6-5.9-1.2-11.2-5.4-15.5c-4.4-4.4-6.4-9.8-6.1-16 c0.3-6.4-2.1-11.9-6.8-16.1c-5.9-5.3-7.9-12.2-7.5-19.9c0.3-6.3-2.1-11.8-7.3-15.6c-5.2-3.8-7.6-9.1-8.2-15.4 c-0.6-6.7-3.7-12-9.1-15.7c-5.6-3.8-9.7-8.9-12-15.3c-1.3-3.7-3.5-6.6-7-8.2c-5.3-2.4-8-7.1-9.1-12.7c-1-5.1-4.2-8.6-9.2-10.1 c-5.5-1.7-8.5-5.9-9.5-11.5c-1.1-6.1-5.4-9.8-11.2-11.2c-5.9-1.4-11.9-0.8-17.6,1.5c-5.5,2.2-10.4,6-16.5,5.6 c-6.4-0.4-11.1,2.3-14.9,7.2c-3.1,4-6.9,7.5-12.2,8.1c-5.8,0.7-10.5,3.6-14.3,8c-5.4,6.2-11.8,7.9-19.5,5.6c-6.1-1.8-12.3-1.4-18.4,0.8 C222.7,69.5,217.4,72.4,213.9,78.2z"
                        className="fill-gray-200 stroke-gray-300 stroke-1"
                      />
                   </svg>
                   
                   {/* State Markers Layer - PINS */}
                   <div className="absolute inset-0 w-full h-full">
                        {connectedStates.map((state) => (
                            <div 
                                key={state.id}
                                className="absolute transform -translate-x-1/2 -translate-y-full flex flex-col items-center group cursor-pointer z-10 hover:-translate-y-[110%] transition-transform"
                                style={{ top: state.top, left: state.left }}
                            >
                                {/* PIN ICON */}
                                <div className="relative">
                                    <svg className="w-10 h-10 text-blue-600 drop-shadow-xl filter" viewBox="0 0 24 24" fill="currentColor">
                                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black/30 blur-sm rounded-full"></div>
                                </div>

                                <div className="mt-1 bg-white/90 backdrop-blur px-2 py-0.5 rounded-md border border-blue-100 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-16 whitespace-nowrap z-30 pointer-events-none">
                                    <span className="text-[10px] font-black text-indigo-900">{state.name}</span>
                                </div>
                            </div>
                        ))}
                   </div>
                </div>

                {/* Grid Lines Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 rounded-[4rem] pointer-events-none"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto">
                {connectedStates.map(state => (
                    <span key={state.id} className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold border border-indigo-100 shadow-sm">
                        {state.name}
                    </span>
                ))}
            </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 relative z-20 mb-20">
            
            {/* Missionário Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-blue-500 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-3xl font-black text-black mb-4">MISSIONÁRIO</h3>
                <p className="font-bold text-gray-500 mb-6 text-sm leading-relaxed">
                    CAMINHA CONOSCO, PARTICIPA DAS REUNIÕES, RECEBE FORMAÇÕES E COLABORA NA DIVULGAÇÃO. É A PRESENÇA ATIVA DO AMOR DE CRISTO NO DIA A DIA.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        REPRESENTANTE LOCAL
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        VIVÊNCIA DO CARISMA
                    </li>
                </ul>
            </div>

            {/* Missionário Alfa Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-purple-600 hover:transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 bg-purple-100 text-purple-700 px-4 py-2 rounded-bl-2xl font-black text-xs relative z-10">LIDERANÇA</div>
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-6 relative z-10">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-3xl font-black text-black mb-4 relative z-10">MISSIONÁRIO <span className="text-purple-600">ALFA</span></h3>
                <p className="font-bold text-gray-500 mb-6 text-sm leading-relaxed relative z-10">
                    ASSUME UMA RESPONSABILIDADE MAIOR DE LIDERANÇA LOCAL. AJUDA A ORGANIZAR AÇÕES, MOBILIZAR PESSOAS E É REFERÊNCIA DO CONECTADOS EM SUA REGIÃO.
                </p>
                <ul className="space-y-3 relative z-10">
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        LÍDER E ORGANIZADOR
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        MATURIDADE NA MISSÃO
                    </li>
                </ul>
            </div>
        </div>

        {/* Steps Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-[3rem] p-8 md:p-16 text-center border border-gray-100 shadow-lg">
            <h3 className="text-3xl md:text-5xl font-black text-black mb-12 tracking-tight">COMO FAZER PARTE?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: "📝", title: "INSCREVER-SE", desc: "QUANDO AS VAGAS ABRIREM" },
                    { icon: "🤝", title: "PARTICIPAR", desc: "DAS REUNIÕES ONLINE" },
                    { icon: "📚", title: "VIVER", desc: "AS FORMAÇÕES DO PROJETO" },
                    { icon: "❤️", title: "SERVIR", desc: "COM DESEJO SINCERO" },
                ].map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-blue-50">
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h4 className="font-black text-lg mb-2 text-indigo-900">{step.title}</h4>
                        <p className="text-xs font-bold text-gray-400">{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white border-4 border-double border-indigo-100 p-10 rounded-[3rem] inline-block max-w-2xl mx-auto shadow-sm">
                <p className="text-2xl font-black text-indigo-600 mb-2">EM BREVE</p>
                <p className="font-bold text-gray-500 mb-8">ABRIREMOS AS INSCRIÇÕES PARA NOVOS MISSIONÁRIOS.</p>
                <button 
                    disabled
                    className="bg-gray-100 text-gray-400 px-10 py-4 rounded-full font-black text-lg cursor-not-allowed uppercase tracking-wider"
                >
                    AGUARDE NOVIDADES
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};