import React from 'react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'MOVIMENTO',
      icon: (
        <svg className="w-12 h-12 text-jr-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      desc: 'NÃO CAMINHAMOS SOZINHOS. SOMOS UMA FAMÍLIA QUE SE APOIA, RI JUNTO E BUSCA A SANTIDADE EM UNIDADE.',
      color: 'bg-white border-blue-100'
    },
    {
      title: 'NOVA REALIDADE',
      icon: (
        <svg className="w-12 h-12 text-jr-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      desc: 'NOSSA MÚSICA E ORAÇÃO NÃO SÃO APENAS RITUAIS, SÃO UM ESTILO DE VIDA. VIVEMOS PARA ADORAR.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'MISSÃO',
      icon: (
        <svg className="w-12 h-12 text-jr-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: 'LEVAMOS A REVOLUÇÃO PARA AS RUAS, ESCOLAS E INTERNET. O AMOR DE DEUS PRECISA SER VIRAL!',
      color: 'bg-white border-blue-100'
    }
  ];

  return (
    <div id="about-section" className="py-24 bg-white relative overflow-hidden uppercase">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 rounded-l-[4rem] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center mb-20">
          <span className="text-jr-blue font-bold tracking-widest text-sm uppercase mb-2">SINCE 2023</span>
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter text-center leading-none">
            QUEM SOMOS <span className="text-jr-blue">NÓS?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`${pillar.color} p-10 rounded-[3rem] border shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col items-center text-center group`}
            >
              <div className="mb-6 bg-white p-6 rounded-full shadow-sm group-hover:scale-110 transition-transform border border-blue-50">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-black">{pillar.title}</h3>
              <p className="font-bold text-gray-400 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-blue-600 rounded-[3rem] relative overflow-hidden shadow-2xl">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-20"></div>
          
          <h3 className="text-3xl font-black text-white mb-6 uppercase relative z-10">NOSSA HISTÓRIA</h3>
          <p className="text-blue-100 font-medium text-lg md:text-xl leading-relaxed relative z-10 uppercase">
            O JESUS REVOLUTION NASCEU DE UMA CHAMA ACESA NO CORAÇÃO DO <span className="text-white font-black">EDUARDO</span>, DA <span className="text-white font-black">ALÉXIA</span> E DA <span className="text-white font-black">BRUNA</span>, A PARTIR DE UM PROFUNDO DESEJO DE VIVER E ANUNCIAR JESUS DE FORMA VERDADEIRA E ATUAL. EM ORAÇÃO, AMIZADE E ESCUTA DO ESPÍRITO SANTO, SURGIU A VONTADE DE IR ALÉM DE UM GRUPO COMUM E SE TORNAR UM MOVIMENTO. ASSIM, O JR COMEÇOU COM PASSOS SIMPLES, MAS COM UM PROPÓSITO GIGANTE: <span className="text-white font-black">JESUSZAR O MUNDO</span>, LEVANDO O AMOR DE CRISTO A TODOS OS LUGARES.
          </p>
        </div>
      </div>
    </div>
  );
};