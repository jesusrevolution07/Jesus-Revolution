import React from 'react';
import { Product } from '../types';

export const Store: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'T-SHIRT REVOLUTION BASIC', price: 49.90, category: 'vestuario', image: 'https://picsum.photos/400/400?random=1' },
    { id: 2, name: 'MOLETOM HOLY SPIRIT', price: 129.90, category: 'vestuario', image: 'https://picsum.photos/400/400?random=2' },
    { id: 3, name: 'BONÉ JR SNAPBACK', price: 59.90, category: 'acessorios', image: 'https://picsum.photos/400/400?random=3' },
    { id: 4, name: 'CANECA DO AVIVAMENTO', price: 35.00, category: 'acessorios', image: 'https://picsum.photos/400/400?random=4' },
    { id: 5, name: 'ECO BAG MISSIONÁRIA', price: 25.00, category: 'acessorios', image: 'https://picsum.photos/400/400?random=5' },
    { id: 6, name: 'T-SHIRT CRUZ NEON', price: 55.90, category: 'vestuario', image: 'https://picsum.photos/400/400?random=6' },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto bg-white uppercase">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
           <span className="text-jr-blue font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full">OFFICIAL MERCH</span>
           <h2 className="text-6xl font-black text-black tracking-tighter mt-2">
            JR STORE
           </h2>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <p className="text-xl font-black text-jr-blue uppercase rotate-1 bg-white border-2 border-black px-4 py-2 rounded-xl shadow-hard">
            JESUSZANDO NO ESTILO!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-blue-50 relative mb-4 shadow-sm border border-blue-100 group-hover:shadow-xl transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-jr-blue">
                {product.category}
              </div>
               <div className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
               </div>
            </div>
            
            <div className="px-2">
              <h3 className="text-lg font-bold text-black mb-1">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <button 
                  onClick={() => alert('ADICIONADO!')}
                  className="text-xs font-bold text-jr-blue hover:text-black transition-colors"
                >
                  ADICIONAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};