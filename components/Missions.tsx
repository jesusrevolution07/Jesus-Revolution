import React from 'react';

export const Missions: React.FC = () => {
  const ministries = [
    {
      title: 'MÚSICA',
      desc: 'RESPONSÁVEL POR CONDUZIR OS MOMENTOS DE LOUVOR, ADORAÇÃO E ORAÇÃO. É ATRAVÉS DA MÚSICA QUE MUITOS CORAÇÕES SE ABREM PARA A PRESENÇA DE DEUS.',
      color: 'bg-blue-500 text-white',
      rotate: 'rotate-1',
      iconBg: 'bg-white/20',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
    },
    {
      title: 'ANIMAÇÃO / DANÇA',
      desc: 'É O PRIMEIRO SORRISO, O ABRAÇO, A ALEGRIA E O FOGO DO ESPÍRITO. ESSE MINISTÉRIO ACOLHE, ANIMA, DANÇA E CRIA UM AMBIENTE DE FAMÍLIA.',
      color: 'bg-black text-white',
      rotate: '-rotate-2',
      iconBg: 'bg-white/20',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
    },
    {
      title: 'COMUNICAÇÃO',
      desc: 'CUIDA DAS REDES SOCIAIS, IDENTIDADE VISUAL, FOTOS, VÍDEOS E CONTEÚDOS QUE EVANGELIZAM. LEVANDO JESUS PARA ALÉM DAS PAREDES.',
      color: 'bg-white border-2 border-black text-black',
      rotate: 'rotate-2',
      iconBg: 'bg-black/10',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      title: 'DINÂMICA',
      desc: 'RESPONSÁVEL POR JOGOS, DINÂMICAS E MOMENTOS INTERATIVOS QUE ENSINAM, UNEM E DESPERTAM REFLEXÕES PROFUNDAS DE FORMA LEVE.',
      color: 'bg-jr-blue text-white',
      rotate: '-rotate-1',
      iconBg: 'bg-white/20',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    {
      title: 'RECREAÇÃO',
      desc: 'TRABALHA NOSSAS CRIANÇAS, PARA QUE JÁ ENCONTREM O CAMINHO ATÉ O CÉU.',
      color: 'bg-blue-100 text-jr-blue',
      rotate: 'rotate-1',
      iconBg: 'bg-jr-blue/10',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  const socialActions = [
    { title: 'AMOR E MEMÓRIA', tags: ['IDOSOS', 'CARINHO'] },
    { title: 'JR KIDS', tags: ['CRIANÇAS', 'FUTURO'] },
    { title: 'DOAÇÃO DE ABRAÇOS', tags: ['RUA', 'ACOLHIDA'] },
    { title: 'RETIRO DESPERTAI-VOS', tags: ['AVIVAMENTO', 'JOVENS'] },
  ];

  return (
    <div className="py-20 bg-white uppercase overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-black text-white px-6 py-2 rounded-full text-xs font-black tracking-widest inline-block transform -rotate-2">
            FAÇA PARTE
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-jr-blue tracking-tighter mt-4 leading-none">
            NOSSA <span className="text-black">MISSÃO</span>
          </h2>
        </div>

        {/* Meeting Info Card */}
        <div className="mb-20 transform hover:scale-[1.01] transition-transform duration-300">
           <div className="bg-jr-blue text-white p-8 md:p-16 rounded-[4rem] shadow-glow relative overflow-hidden border-4 border-white ring-4 ring-blue-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                 <div className="flex-1 text-center md:text-left">
                    <div className="inline-block bg-white text-jr-blue px-4 py-1 rounded-full text-sm font-black mb-4">
                       ONDE TUDO ACONTECE
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                       SÁBADOS ÀS 16H
                    </h3>
                    <div className="space-y-2 text-xl font-bold text-blue-100">
                       <p className="flex items-center justify-center md:justify-start gap-2">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          PARÓQUIA SANTA EDWIGES
                       </p>
                       <p className="text-sm md:text-lg opacity-80">
                          AV. PADRE ANTÔNIO VIÊIRA, 555 - PARQUE RES. NOVA FRANCA<br/>FRANCA - SP
                       </p>
                    </div>
                 </div>
                 
                 <div className="bg-white text-black p-8 rounded-[3rem] rotate-2 shadow-lg max-w-xs text-center">
                    <p className="font-black text-2xl mb-2">VEM PRO JR!</p>
                    <p className="text-sm font-bold text-gray-500">TRAGA SEUS AMIGOS E VENHA VIVER ESSA EXPERIÊNCIA.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Ministries Section */}
        <div className="mb-24">
           <h3 className="text-4xl font-black text-black mb-10 text-center tracking-tight">
              QUER SER <span className="text-jr-blue bg-blue-50 px-2 rounded-xl">SERVO?</span>
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((m, idx) => (
                 <div key={idx} className={`${m.color} ${m.rotate} p-8 rounded-[3rem] shadow-sm hover:rotate-0 hover:scale-105 transition-all duration-300 min-h-[300px] flex flex-col justify-between`}>
                    <div>
                       <div className={`w-12 h-12 ${m.iconBg} rounded-full flex items-center justify-center mb-4`}>
                          {m.icon}
                       </div>
                       <h4 className="text-2xl font-black mb-4 leading-none">{m.title}</h4>
                    </div>
                    <p className="font-bold text-sm leading-relaxed opacity-90">
                       {m.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>

        {/* Social Actions Grid */}
        <div>
           <h3 className="text-4xl font-black text-black mb-10 text-center tracking-tight">NOSSAS AÇÕES</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialActions.map((action, idx) => (
                 <div key={idx} className="bg-white border-2 border-blue-100 p-8 rounded-[3rem] hover:border-jr-blue transition-colors group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h4 className="text-3xl font-black text-black group-hover:text-jr-blue transition-colors">{action.title}</h4>
                        <div className="flex gap-2 mt-2 md:mt-0">
                        {action.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold">
                                #{tag}
                            </span>
                        ))}
                        </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};