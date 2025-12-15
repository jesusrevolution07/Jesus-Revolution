import React from 'react';

export const CanalJR: React.FC = () => {
  const programs = [
    {
      title: "JR JOGA",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      color: "bg-red-500",
      desc: "GAMES E DIVERSÃO"
    },
    {
      title: "CATEQUIZA JR",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-blue-500",
      desc: "FORMAÇÃO JOVEM"
    },
    {
      title: "VOCÊ SABIA JR?",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-yellow-400",
      desc: "CURIOSIDADES"
    },
    {
      title: "JRCAST",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      color: "bg-purple-500",
      desc: "PODCAST"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 uppercase relative overflow-hidden">
      
      {/* Background Noise Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-block border-4 border-white p-4 rounded-3xl mb-6 shadow-[0_0_20px_rgba(255,255,255,0.5)]">
             <svg className="w-16 h-16 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 glitch-effect">
            CANAL <span className="text-jr-blue">JR</span>
          </h2>
          <div className="inline-block bg-white text-black px-6 py-2 text-xl font-bold uppercase tracking-widest rounded-full transform -rotate-2">
             EM BREVE
          </div>
        </div>

        {/* TV Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
           {programs.map((prog, idx) => (
             <div key={idx} className="bg-gray-900 border-2 border-gray-800 rounded-[3rem] p-8 flex items-center gap-6 hover:border-white transition-colors group relative overflow-hidden">
                <div className={`w-24 h-24 ${prog.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                   {prog.icon}
                </div>
                <div>
                   <h3 className="text-3xl font-black mb-1">{prog.title}</h3>
                   <p className="text-gray-400 font-bold tracking-widest text-sm">{prog.desc}</p>
                </div>
                {/* Static overlay on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
             </div>
           ))}
        </div>

        {/* Footer Banner */}
        <div className="bg-jr-blue rounded-[3rem] p-12 text-center relative overflow-hidden border-4 border-white">
           <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-[200px] font-black">2026</span>
           </div>
           <h3 className="text-4xl md:text-6xl font-black relative z-10 mb-4">
              INAUGURAÇÃO
           </h3>
           <p className="text-2xl font-bold text-blue-100 relative z-10">
              2026
           </p>
           <p className="mt-4 text-sm font-bold opacity-80 relative z-10">PREPARE A PIPOCA.</p>
        </div>

      </div>
    </div>
  );
};