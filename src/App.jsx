import React, { useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import assets from './assets/assets.jsx';

const { SOCIAL_LINKS, PROFILE } = assets;

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen font-[oswald-2] w-full bg-[#050505] text-zinc-300 flex items-center justify-center p-6 md:p-8 lg:p-12 relative overflow-x-hidden">
      
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none" />

      <main className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-center justify-between animate-in fade-in slide-in-from-bottom-6 duration-1000 py-10 md:py-16 gap-12 lg:gap-24">
        
        <header className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[45%]">
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name}
            className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-zinc-800 mb-6 lg:mb-8 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
          />
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-none">
            {PROFILE.name}
          </h1>
          
          <h2 className="text-base md:text-lg font-medium text-emerald-400 mt-4 tracking-wide">
            {PROFILE.role} <span className="text-zinc-600 px-2 font-sans">•</span> <span className="text-zinc-400 font-medium">{PROFILE.location}</span>
          </h2>
          
          <p className="text-base md:text-lg text-zinc-500 mt-6 leading-relaxed max-w-sm font-medium">
            {PROFILE.bio}
          </p>
        </header>

        <div className="flex flex-col w-full lg:w-[50%] gap-4">
          {SOCIAL_LINKS.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-5 md:py-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 rounded-[1.25rem] transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className={`${link.color} group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(link.icon, { size: 24, strokeWidth: 1.5 })}
                </div>
                <h2 className="text-lg md:text-xl font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                  {link.name}
                </h2>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" strokeWidth={1.5} />
            </a>
          ))}

          <a 
            href="mailto:keshavgilhotra4@gmail.com"
            className="group flex items-center justify-between px-6 py-5 md:py-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 rounded-[1.25rem] transition-all duration-300 shadow-sm mt-2 md:mt-4"
          >
            <div className="flex items-center gap-5">
              <div className="text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h2 className="text-lg md:text-xl font-medium text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                Contact Me
              </h2>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors" strokeWidth={1.5} />
          </a>
        </div>

      </main>

      <footer className="absolute bottom-2 md:bottom-6 w-full flex justify-center items-center pointer-events-none">
        <p className="text-xs md:text-sm font-medium text-zinc-500 opacity-60 flex items-center gap-1.5">
          made with <span className="text-red-500 text-lg md:text-base">❤</span> by <span className="oswald tracking-widest text-zinc-300">Keshav Gilhotra</span>
        </p>
      </footer>
    </div>
  );
};

export default App;