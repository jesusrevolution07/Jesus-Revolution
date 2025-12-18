import React, { useState } from 'react';

interface NavbarProps {
  setCurrentView: (view: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ setCurrentView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lista completa para o menu mobile (3 pontinhos)
  const allNavItems = [
    { id: 'home', label: 'HOME' },
    { id: 'events', label: 'AGENDA' },
    { id: 'store', label: 'LOJA' },
    { id: 'prayers', label: 'ORAÇÕES' },
    { id: 'missions', label: 'MISSÕES' },
    { id: 'soul-dj', label: 'DJ JR' },
    { id: 'conectados', label: 'CONECTADOS' },
    { id: 'maezinha', label: 'MÃEZINHA' },
    { id: 'saints', label: 'SANTINHOS' },
    { id: 'canal-jr', label: 'CANAL JR' },
    { id: 'testimonials', label: 'TESTEMUNHOS' },
  ];

  // Lista reduzida para Desktop
  const desktopNavItems = [
    { 
      id: 'home', 
      label: 'HOME',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    { 
      id: 'store', 
      label: 'LOJA',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    },
    { 
      id: 'prayers', 
      label: 'ORAÇÕES',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
    },
    { 
      id: 'missions', 
      label: 'MISSÕES',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    { 
      id: 'soul-dj', 
      label: 'DJ JR',
      icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
    },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-blue-200 rounded-full shadow-lg px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between transition-all">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group hover:scale-105 transition-transform" onClick={() => setCurrentView('home')}>
            <div className="bg-gradient-primary text-white font-black px-3 py-1 rounded-full text-xl shadow-md group-hover:shadow-lg transition-shadow">JR</div>
            <span className="ml-2 text-xl font-black text-jr-darkblue tracking-tighter hidden md:block">JESUS <span className="text-jr-blue">REVOLUTION</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-2">
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-black uppercase transition-all duration-200 flex items-center gap-2 border ${
                  currentView === item.id
                    ? 'bg-gradient-primary text-white border-transparent shadow-md transform -translate-y-1'
                    : 'bg-transparent text-gray-500 border-transparent hover:bg-blue-50 hover:text-jr-blue'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button 
                onClick={() => setCurrentView('testimonials')}
                className="ml-2 bg-white text-jr-blue px-5 py-2 rounded-full text-xs font-black uppercase border border-blue-200 hover:bg-gradient-primary hover:text-white hover:border-transparent transition-all hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
            >
                TESTEMUNHOS
            </button>
             <a 
                href="https://www.instagram.com/jesus.revolution7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white hover:scale-110 transition-transform shadow-md"
            >
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>
          </div>
          
          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-jr-darkblue hover:bg-blue-50 focus:outline-none transition-all"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-24"></div>

      {/* Mobile Menu (Todas as abas) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl xl:hidden pt-24 px-4 overflow-y-auto">
          <div className="space-y-3 pb-20">
            {allNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 text-left px-6 py-4 rounded-full font-black text-lg transition-all ${
                  currentView === item.id
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white border border-blue-100 text-jr-darkblue hover:border-jr-blue'
                }`}
              >
               {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};