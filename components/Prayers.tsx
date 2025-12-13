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
    <div className="min-h-screen bg-white text-black py-20 px-4 uppercase">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-black text-jr-blue uppercase mb-2 tracking-tighter">POWER HOUSE</h2>
          <p className="text-xl font-bold bg-black text-white inline-block px-6 py-2 rounded-full uppercase">CONEXÃO DIRETA COM O CÉU</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('basics')}
            className={`px-8 py-3 rounded-full font-black uppercase transition-all ${activeTab === 'basics' ? 'bg-jr-blue text-white shadow-lg' : 'bg-blue-50 text-black hover:bg-blue-100'}`}
          >
            ORAÇÕES BASE
          </button>
          <button 
            onClick={() => setActiveTab('liberation')}
            className={`px-8 py-3 rounded-full font-black uppercase transition-all ${activeTab === 'liberation' ? 'bg-jr-blue text-white shadow-lg' : 'bg-blue-50 text-black hover:bg-blue-100'}`}
          >
            TERÇO DE LIBERTAÇÃO
          </button>
        </div>

        {activeTab === 'basics' && (
          <div className="grid gap-6">
            {prayersList.map((prayer, idx) => (
              <div key={idx} className="bg-white border border-blue-100 p-8 shadow-sm rounded-[3rem] hover:shadow-soft hover:border-blue-200 transition-all">
                <h3 className="text-2xl font-black uppercase mb-4 text-jr-blue border-b border-gray-100 pb-2">{prayer.title}</h3>
                <p className="font-bold text-lg leading-relaxed text-gray-600">{prayer.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'liberation' && (
          <div className="bg-blue-50 border border-blue-100 p-10 rounded-[3rem] shadow-soft">
            <h3 className="text-4xl font-black uppercase mb-8 text-center text-jr-blue">TERÇO DE LIBERTAÇÃO</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                <h4 className="font-black text-xl mb-2 text-black">1. INÍCIO</h4>
                <p className="font-bold text-gray-500">CREIO EM DEUS PAI...</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                <h4 className="font-black text-xl mb-2 text-black">2. NAS CONTAS GRANDES (PAI NOSSO)</h4>
                <p className="font-bold italic text-jr-blue">"SE JESUS ME LIBERTAR, SEREI VERDADEIRAMENTE LIVRE."</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                <h4 className="font-black text-xl mb-2 text-black">3. NAS CONTAS PEQUENAS (AVE MARIA)</h4>
                <p className="font-bold italic text-jr-blue">"JESUS, TEM PIEDADE DE MIM! JESUS, CURA-ME! JESUS, SALVA-ME! JESUS, LIBERTA-ME!"</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                <h4 className="font-black text-xl mb-2 text-black">4. FINAL</h4>
                <p className="font-bold mb-2 text-gray-500">SALVE RAINHA...</p>
                <p className="text-sm font-bold bg-black text-white inline-block px-3 py-1 rounded-full uppercase">DICA: REZE COM AUTORIDADE!</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};