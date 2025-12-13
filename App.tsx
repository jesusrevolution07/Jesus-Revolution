import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onJoinClick={() => setCurrentView('missions')} onAboutClick={() => setCurrentView('about')} />
            <About />
            <div className="bg-surface py-20 text-center uppercase">
              <h3 className="text-black text-3xl font-black mb-10 tracking-tight">
                 EXPLORE A <span className="text-jr-blue">COMUNIDADE</span>
              </h3>
              <div className="flex justify-center gap-6 flex-wrap px-4">
                 <button 
                  onClick={() => setCurrentView('maezinha')}
                  className="group relative px-8 py-10 bg-white rounded-[2rem] shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all w-64 border border-blue-50"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-jr-blue">
                     <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h4 className="text-black font-bold text-xl">MÃEZINHA</h4>
                </button>
                 <button 
                  onClick={() => setCurrentView('saints')}
                  className="group relative px-8 py-10 bg-white rounded-[2rem] shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all w-64 border border-blue-50"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-jr-blue">
                     <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <h4 className="text-black font-bold text-xl">SANTINHOS</h4>
                </button>
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

      <footer className="bg-black py-16 mt-auto text-white rounded-t-[3rem]">
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

export default App;