import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Store } from './components/Store';
import { Testimonials } from './components/Testimonials';
import { MoodAI } from './components/MoodAI';
import { Maezinha } from './components/Maezinha';
import { Saints } from './components/Saints';
import { Prayers } from './components/Prayers';
import { Missions } from './components/Missions';
import { Conectados } from './components/Conectados';
import { CanalJR } from './components/CanalJR';
import { Sitemap } from './components/Sitemap';

/**
 * ------------------------------------------------------------------
 * AGGRESSIVE HYBRID ROUTING ARCHITECTURE
 * ------------------------------------------------------------------
 * 1. Environment Detection: Checks if running in Cloud IDEs/Proxies.
 * 2. Router Selection: Forces HashRouter in Preview, BrowserRouter in Prod.
 * 3. Smart Redirects: Sends devs to Sitemap, Users to Main App.
 * ------------------------------------------------------------------
 */

// 1. Environment Detection Utility
const checkPreviewEnvironment = (): boolean => {
  const host = window.location.hostname;
  const href = window.location.href;
  
  const proxyIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];

  return proxyIndicators.some(indicator => 
    host.includes(indicator) || href.includes(indicator)
  );
};

// Original Application Logic encapsulated in a component
const JesusRevolutionApp: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  const navButtons = [
    { 
      id: 'canal-jr', 
      label: 'CANAL JR',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { 
      id: 'store', 
      label: 'JR STORE',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    },
    { 
      id: 'prayers', 
      label: 'ORAÇÕES',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
    },
    { 
      id: 'missions', 
      label: 'MISSÕES',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    { 
      id: 'conectados', 
      label: 'CONECTADOS',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
      id: 'events', 
      label: 'AGENDA',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    { 
      id: 'soul-dj', 
      label: 'DJ JR',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
    },
    { 
      id: 'testimonials', 
      label: 'TESTEMUNHOS',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    },
    { 
      id: 'maezinha', 
      label: 'MÃEZINHA',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    { 
      id: 'saints', 
      label: 'SANTINHOS',
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onJoinClick={() => setCurrentView('missions')} onAboutClick={() => setCurrentView('about')} />
            <About />
            
            {/* Explore Section - Compact "Agrupadinho" */}
            <div className="bg-gradient-to-b from-white to-blue-50 py-16 text-center uppercase">
              <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-black text-3xl font-black mb-10 tracking-tight">
                   EXPLORE A <span className="text-jr-blue">COMUNIDADE</span>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                   {navButtons.map((btn) => (
                      <button 
                        key={btn.id}
                        onClick={() => setCurrentView(btn.id)}
                        className="group flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-blue-50"
                      >
                        <div className="text-gray-400 mb-2 group-hover:text-jr-blue transition-colors">
                           {btn.icon}
                        </div>
                        <h4 className="text-gray-700 font-bold text-xs group-hover:text-black">{btn.label}</h4>
                      </button>
                   ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'about':
        return <About />;
      case 'events':
        return <Events />;
      case 'store':
        return <Store />;
      case 'testimonials':
        return <Testimonials />;
      case 'soul-dj':
        return <MoodAI />;
      case 'maezinha':
        return <Maezinha />;
      case 'saints':
        return <Saints />;
      case 'prayers':
        return <Prayers />;
      case 'missions':
        return <Missions />;
      case 'conectados':
        return <Conectados />;
      case 'canal-jr':
        return <CanalJR />;
      default:
        return <Hero onJoinClick={() => setCurrentView('missions')} onAboutClick={() => setCurrentView('about')} />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-blue-100 selection:text-blue-900 uppercase">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="animate-fade-in">
        {renderView()}
      </main>

      <footer className="bg-gradient-to-br from-gray-900 to-black py-16 mt-auto text-white rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-jr-blue uppercase">JESUSZANDO</span>
            <span className="text-3xl md:text-5xl font-black tracking-tighter text-blue-100 ml-2 uppercase">O MUNDO!</span>
          </div>
          <p className="text-gray-500 mb-8 font-bold uppercase tracking-widest text-xs">SINCE 2023</p>
          <div className="flex justify-center flex-wrap gap-8 text-white font-bold text-sm">
            <a href="https://www.instagram.com/jesus.revolution7/" target="_blank" className="hover:text-jr-blue transition-colors uppercase flex items-center gap-2">
                INSTAGRAM
            </a>
            <a href="https://www.youtube.com/@Jesus.revolution7" target="_blank" className="hover:text-red-500 transition-colors uppercase flex items-center gap-2">
                YOUTUBE
            </a>
            <a href="https://open.spotify.com/playlist/5BkQnG2DoukW3i4DNk6hL1?si=3Sx8ywOQR4GYZQuZCKiDIg" target="_blank" className="hover:text-green-500 transition-colors uppercase flex items-center gap-2">
                SPOTIFY
            </a>
            <a href="https://web.whatsapp.com/16991417024" target="_blank" className="hover:text-green-400 transition-colors uppercase flex items-center gap-2">
                WHATSAPP
            </a>
          </div>
          <p className="text-gray-800 text-xs mt-12 font-medium uppercase">© {new Date().getFullYear()} JESUS REVOLUTION.</p>
        </div>
      </footer>
    </div>
  );
};

// Main App Component with Routing Architecture
const App: React.FC = () => {
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    setIsPreview(checkPreviewEnvironment());
  }, []);

  // 2. Router Selection
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* 3. Smart Redirects */}
        <Route 
          path="/" 
          element={isPreview ? <Navigate to="/sitemap" replace /> : <Navigate to="/home" replace />} 
        />
        
        {/* Dev Route */}
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Production/Main App Route */}
        <Route path="/home" element={<JesusRevolutionApp />} />
        
        {/* Fallback for everything else */}
        <Route path="*" element={<Navigate to={isPreview ? "/sitemap" : "/home"} replace />} />
      </Routes>
    </Router>
  );
};

export default App;