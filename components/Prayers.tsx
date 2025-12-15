import React, { useState } from 'react';

export const Prayers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basics' | 'liberation'>('basics');

  const prayersList = [
    { title: "AVE MARIA", text: "AVE MARIA, CHEIA DE GRAÇA, O SENHOR É CONVOSCO, BENDITA SOIS VÓS ENTRE AS MULHERES E BENDITO É O FRUTO DO VOSSO VENTRE, JESUS. SANTA MARIA, MÃE DE DEUS, ROGAI POR NÓS PECADORES, AGORA E NA HORA DA NOSSA MORTE. AMÉM." },
    { title: "PAI NOSSO", text: "PAI NOSSO QUE ESTAIS NOS CÉUS, SANTIFICADO SEJA O VOSSO NOME, VENHA A NÓS O VOSSO REINO, SEJA FEITA A VOSSA VONTADE ASSIM NA TERRA COMO NO CÉU. O PÃO NOSSO DE CADA DIA NOS DAI HOJE, PERDOAI-NOS AS NOSSAS OFENSAS ASSIM COMO NÓS PERDOAMOS A QUEM NOS TEM OFENDIDO, E NÃO NOS DEIXEIS CAIR EM TENTAÇÃO, MAS LIVRAI-NOS DO MAL. AMÉM." },
    { title: "SANTO ANJO", text: "SANTO ANJO DO SENHOR, MEU ZELOSO GUARDADOR, SE A TI ME CONFIOU A PIEDADE DIVINA, SEMPRE ME REGE, ME GUARDE, ME GOVERNE ME ILUMINE. AMÉM." },
    { title: "SALVE RAINHA", text: "SALVE, RAINHA, MÃE DE MISERICÓRDIA, VIDA, DOÇURA E ESPERANÇA NOSSA, SALVE! A VÓS BRADAMOS, OS DEGREDADOS FILHOS DE EVA. A VÓS SUSPIRAMOS, GEMENDO E CHORANDO NESTE VALE DE LÁGRIMAS. EIA, POIS, ADVOGADA NOSSA, ESSES VOSSOS OLHOS MISERICORDIOSOS A NÓS VOLVEI, E DEPOIS DESTE DESTERRO MOSTRAI-NOS JESUS, BENDITO FRUTO DO VOSSO VENTRE, Ó CLEMENTE, Ó PIEDOSA, Ó DOCE SEMPRE VIRGEM MARIA. ROGAI POR NÓS, SANTA MÃE DE DEUS, PARA QUE SEJAMOS DIGNOS DAS PROMESSAS DE CRISTO. AMÉM." },
    { title: "CREDO", text: "CREIO EM DEUS PAI TODO-PODEROSO, CRIADOR DO CÉU E DA TERRA; E EM JESUS CRISTO, SEU ÚNICO FILHO, NOSSO SENHOR; QUE FOI CONCEBIDO PELO PODER DO ESPÍRITO SANTO; NASCEU DA VIRGEM MARIA, PADECEU SOB PÔNCIO PILATOS, FOI CRUCIFICADO, MORTO E SEPULTADO; DESCEU À MANSÃO DOS MORTOS; RESSUSCITOU AO TERCEIRO DIA; SUBIU AOS CÉUS, ESTÁ SENTADO À DIREITA DE DEUS PAI TODO-PODEROSO, DONDE HÁ DE VIR A JULGAR OS VIVOS E OS MORTOS. CREIO NO ESPÍRITO SANTO, NA SANTA IGREJA CATÓLICA, NA COMUNHÃO DOS SANTOS, NA REMISSÃO DOS PECADOS, NA RESSURREIÇÃO DA CARNE, NA VIDA ETERNA. AMÉM." },
    { title: "A CRUZ SAGRADA", text: "A CRUZ SAGRADA SEJA A MINHA LUZ, NÃO SEJA O DRAGÃO O MEU GUIA. RETIRA-TE, SATANÁS! NUNCA ME ACONSELHES COISAS VÃS. É MAU O QUE TU ME OFERECES, BEBE TU MESMO OS TEUS VENENOS!" },
    { title: "SÃO MIGUEL ARCANJO", text: "SÃO MIGUEL ARCANJO, DEFENDEI-NOS NO COMBATE, SEDE O NOSSO REFÚGIO CONTRA AS MALDADES E CILADAS DO DEMÔNIO. ORDENE-LHE DEUS, INSTANTEMENTE O PEDIMOS, E VÓS, PRÍNCIPE DA MILÍCIA CELESTE, PELA VIRTUDE DIVINA, PRECIPITAI NO INFERNO A SATANÁS E A TODOS OS ESPÍRITOS MALIGNOS, QUE ANDAM PELO MUNDO PARA PERDER AS ALMAS. AMÉM." }
  ];

  return (
    <div className="min-h-screen bg-white text-black py-20 px-4">
      {/* Background Floral Decoration (Blue tint) */}
      <div className="fixed top-0 left-0 w-64 h-64 opacity-10 pointer-events-none text-blue-500">
         <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 10 C60 10 70 20 70 30 C70 40 60 50 50 50 C40 50 30 40 30 30 C30 20 40 10 50 10 Z" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-elegant text-jr-blue uppercase mb-4 tracking-tight drop-shadow-sm">
            Sacrário <span className="text-blue-300">&</span> Luz
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          <p className="text-lg font-serif italic text-blue-800 font-bold mt-4">"Tudo posso naquele que me fortalece"</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          <button 
            onClick={() => setActiveTab('basics')}
            className={`px-8 py-3 rounded-full font-serif font-bold uppercase tracking-widest text-sm transition-all border-2 ${activeTab === 'basics' ? 'bg-jr-blue text-white border-jr-blue shadow-lg' : 'bg-white text-blue-300 border-blue-100 hover:border-jr-blue hover:text-jr-blue'}`}
          >
            Orações Base
          </button>
          <button 
            onClick={() => setActiveTab('liberation')}
            className={`px-8 py-3 rounded-full font-serif font-bold uppercase tracking-widest text-sm transition-all border-2 ${activeTab === 'liberation' ? 'bg-blue-900 text-white border-blue-900 shadow-lg' : 'bg-white text-blue-300 border-blue-100 hover:border-blue-900 hover:text-blue-900'}`}
          >
            Terço da Virgem Poderosa
          </button>
        </div>

        {activeTab === 'basics' && (
          <div className="grid gap-8">
            {prayersList.map((prayer, idx) => (
              <div key={idx} className="bg-white p-10 shadow-soft rounded-xl border-l-8 border-jr-blue hover:shadow-xl transition-all">
                <h3 className="text-3xl font-elegant uppercase mb-6 text-jr-blue flex items-center gap-4">
                    <span className="text-4xl text-blue-100 font-serif font-bold">{idx + 1}</span>
                    {prayer.title}
                </h3>
                <p className="font-serif text-xl leading-loose text-blue-900 font-medium text-justify">
                    {prayer.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'liberation' && (
          <div className="bg-white border-2 border-blue-50 p-8 md:p-12 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900"></div>
            
            <div className="text-center mb-12">
                <div className="inline-block p-4 rounded-full bg-blue-50 text-blue-900 mb-4">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <h3 className="text-4xl md:text-5xl font-elegant uppercase text-blue-900 mb-2 font-bold">Terço de Libertação</h3>
                <p className="font-serif text-2xl italic text-blue-400 font-bold">Da Virgem Poderosa</p>
            </div>
            
            <div className="space-y-12">
              
              {/* Inicio */}
              <section className="space-y-4 border-b-2 border-blue-50 pb-8">
                <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">1. Início</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <span className="font-black text-xs uppercase text-blue-300 block mb-1">Passo 1</span>
                        <p className="font-serif font-bold text-xl text-blue-900">Sinal da Cruz</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <span className="font-black text-xs uppercase text-blue-300 block mb-1">Passo 2</span>
                        <p className="font-serif font-bold text-xl text-blue-900">Vinde Espírito Santo</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <span className="font-black text-xs uppercase text-blue-300 block mb-1">Passo 3</span>
                        <p className="font-serif font-bold text-xl text-blue-900">Colocar as Intenções</p>
                    </div>
                </div>
              </section>

              {/* Oferecimento */}
              <section className="space-y-4 border-b-2 border-blue-50 pb-8">
                 <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">2. Oferecimento do Terço</h4>
                 <div className="bg-blue-50/30 p-8 rounded-3xl font-serif text-blue-900 font-medium text-lg leading-relaxed italic text-justify border border-blue-100">
                    "Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção. Jesus Crucificado! Ajoelhados aos Vossos pés, nós Vos oferecemos as lágrimas de sangue dAquela que Vos acompanhou no Vosso caminho sofredor da cruz, com intenso amor participante. Fazei, ó bom mestre, que apreciemos as lições que nos dão as lágrimas de sangue da Vossa Mãe Santíssima, a fim de que cumpramos a Vossa Santíssima Vontade aqui na terra, de tal modo que sejamos dignos de louvar-Vos no Céu por toda a eternidade. Amém!"
                 </div>
              </section>

              {/* Orações Iniciais */}
              <section className="space-y-4 border-b-2 border-blue-50 pb-8">
                <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">3. Orações Iniciais</h4>
                <ul className="font-serif text-blue-800 font-bold text-lg list-disc list-inside space-y-2 ml-4">
                    <li>Credo</li>
                    <li>1 Pai Nosso</li>
                    <li>3 Ave Marias</li>
                </ul>
              </section>

              {/* Mistérios */}
              <section className="space-y-6 border-b-2 border-blue-50 pb-8">
                 <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">4. Mistérios da Libertação</h4>
                 <div className="space-y-4 font-serif">
                    {[
                        "Contemplamos como Jesus nos deu um brilhante exemplo na luta contra Satanás e seu reino.",
                        "Contemplamos como Jesus venceu a morte e o inferno pela Sua paixão e morte na cruz.",
                        "Contemplamos a Cruz de Cristo que se tornou um sinal de terror para Satanás.",
                        "Contemplamos como Jesus deu à Virgem Maria o poder de esmagar a cabeça de Satanás.",
                        "Contemplamos como Jesus deu à Virgem Maria poder sobre Satanás eternamente."
                    ].map((mistery, i) => (
                        <div key={i} className="flex gap-4 items-start p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            <div className="min-w-[32px] h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-black mt-1">{i+1}º</div>
                            <p className="text-blue-900 font-semibold text-lg leading-tight">{mistery}</p>
                        </div>
                    ))}
                 </div>
              </section>

              {/* Como Rezar */}
              <section className="space-y-6 border-b-2 border-blue-50 pb-8">
                 <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">5. Como Rezar as Contas</h4>
                 
                 <div className="grid gap-6">
                    <div className="bg-white border-l-8 border-blue-400 shadow-sm p-6 rounded-r-2xl">
                        <h5 className="font-black text-blue-400 text-sm uppercase mb-2">Nas Contas Grandes</h5>
                        <p className="font-serif font-bold text-blue-900 text-lg text-justify">
                           “Levanta-Se Deus, pela intercessão da Virgem Maria, de São Miguel Arcanjo e de toda a Milícia Celeste sejam dispersos seus inimigos, e fujam de Sua Face todos os que O odeiam. Em nome do Pai do Filho e do Espírito Santo. Amém.”
                        </p>
                    </div>

                    <div className="bg-white border-l-8 border-blue-600 shadow-sm p-6 rounded-r-2xl">
                        <h5 className="font-black text-blue-600 text-sm uppercase mb-2">Nas Contas Pequenas</h5>
                        <p className="font-serif font-bold text-blue-900 text-lg text-justify">
                           “Ave Maria, Virgem Poderosa, Imaculada Conceição, Rainha das Vitórias, que as Vossas lágrimas de sangue destruam as forças do Inferno. Assim seja.”
                        </p>
                    </div>

                    <div className="bg-white border-l-8 border-blue-900 shadow-sm p-6 rounded-r-2xl">
                        <h5 className="font-black text-blue-900 text-sm uppercase mb-2">No Lugar do Glória (Medalha de São Bento)</h5>
                        <p className="font-serif font-bold text-blue-900 text-lg text-justify">
                           “A Cruz Sagrada seja minha luz. Não seja o dragão meu guia. Retira-te, satanás! Nunca me aconselhes coisas vãs. É mau o que tu me ofereces, bebe tu mesmo os teus venenos!”
                        </p>
                    </div>
                 </div>

                 <div className="bg-blue-50 p-6 rounded-xl text-center font-serif font-bold text-blue-400 uppercase tracking-widest text-sm">
                    Ao final de cada mistério, pedir intercessão dos Anjos e Santos.
                 </div>
              </section>

              {/* Finalização */}
              <section className="space-y-6">
                <h4 className="font-elegant text-xl text-blue-700 font-bold uppercase tracking-widest border-l-4 border-blue-300 pl-4">6. Finalização</h4>
                
                <div className="space-y-4 font-serif text-center bg-blue-50/50 p-8 rounded-3xl">
                    <p className="text-blue-900 font-black text-xl">Ó MARIA CONCEBIDA SEM PECADO, ROGAI POR NÓS QUE RECORREMOS A VÓS.</p>
                    <div className="h-px w-20 bg-blue-200 mx-auto"></div>
                    <p className="text-blue-900 font-black text-xl">JESUS, MANSO E HUMILDE DE CORAÇÃO, FAZEI O NOSSO CORAÇÃO SEMELHANTE AO VOSSO.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900 to-black text-white p-10 rounded-[2rem] text-center shadow-2xl mt-8 ring-4 ring-blue-100">
                    <h5 className="font-elegant text-3xl mb-6 text-blue-200 font-bold">Salve Rainha</h5>
                    <p className="font-serif text-lg leading-relaxed font-medium">
                        Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.
                    </p>
                </div>
              </section>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};