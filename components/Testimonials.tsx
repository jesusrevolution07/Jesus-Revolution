import React, { useState } from 'react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    { id: 1, name: 'ANA CLARA', text: 'EU ACHAVA QUE SER CATÓLICO ERA CHATO, ATÉ CONHECER O JR. MINHA VIDA MUDOU COMPLETAMENTE!', avatar: 'https://picsum.photos/100/100?random=10' },
    { id: 2, name: 'JOÃO PEDRO', text: 'NO RETIRO METANÓIA TIVE UMA EXPERIÊNCIA REAL COM DEUS. NÃO SOU MAIS O MESMO.', avatar: 'https://picsum.photos/100/100?random=11' },
    { id: 3, name: 'LUCAS SILVA', text: 'A GALERA ME ACOLHEU QUANDO EU MAIS PRECISAVA. AQUI ENCONTREI AMIGOS DE VERDADE.', avatar: 'https://picsum.photos/100/100?random=12' },
  ]);
  const [newText, setNewText] = useState('');
  const [newName, setNewName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText || !newName) return;
    
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: newName.toUpperCase(),
      text: newText.toUpperCase(),
      avatar: `https://picsum.photos/100/100?random=${Date.now()}`
    };
    
    setTestimonials([newTestimonial, ...testimonials]);
    setNewName('');
    setNewText('');
  };

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto bg-white uppercase">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">
          O QUE VOCÊ VIVEU NO <span className="text-jr-blue">JR?</span>
        </h2>
        <p className="mt-4 text-xl font-bold text-gray-400">SEU TESTEMUNHO GERA FÉ!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-blue-50 p-8 rounded-[3rem] h-fit sticky top-24 border border-blue-100">
          <h3 className="text-2xl font-black text-black mb-4">SOLTA O VERBO</h3>
          <p className="text-gray-500 font-bold mb-6 text-sm">CONTA PRA GENTE SUA EXPERIÊNCIA NO JESUS REVOLUTION.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="SEU NOME" 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full bg-white border border-blue-100 rounded-2xl p-4 text-black font-bold placeholder-gray-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all uppercase"
            />
            <textarea 
              placeholder="CONTA AÍ O QUE DEUS FEZ..." 
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              rows={4}
              className="w-full bg-white border border-blue-100 rounded-2xl p-4 text-black font-bold placeholder-gray-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none uppercase"
            />
            <button 
              type="submit" 
              className="w-full bg-jr-blue text-white font-black py-4 rounded-2xl hover:bg-black transition-all shadow-glow uppercase"
            >
              PUBLICAR AGORA
            </button>
          </form>
        </div>

        {/* Wall */}
        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-soft transition-all">
              <div className="flex items-start gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-gray-100" />
                <div>
                   <span className="bg-blue-50 text-jr-blue px-3 py-1 rounded-full text-[10px] font-black uppercase mb-3 inline-block">DEPOIMENTO</span>
                   <p className="text-gray-700 text-lg font-bold leading-tight mb-3">"{t.text}"</p>
                   <span className="text-jr-blue font-black text-sm">— {t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};