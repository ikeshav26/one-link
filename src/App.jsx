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
    <div className="min-h-screen w-full bg-[#050505] text-zinc-300 font-sans flex items-center justify-center p-6 md:p-8 relative overflow-hidden">
      
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-zinc-900/30 to-transparent pointer-events-none" />

      <main className="relative z-10 w-full max-w-xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 py-10 md:py-16">
        <header className="flex flex-col items-center text-center w-full mb-12">
          <img 
            src={PROFILE.avatar} 
            alt={PROFILE.name}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border border-zinc-800 mb-6 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            {PROFILE.name}
          </h1>
          
          <p className="text-base font-medium text-zinc-400 mt-3">
            {PROFILE.role} <span className="text-zinc-600 px-1.5">•</span> {PROFILE.location}
          </p>
          
          <p className="text-base md:text-lg text-zinc-500 mt-5 leading-relaxed max-w-sm font-medium">
            {PROFILE.bio}
          </p>
        </header>

        <div className="flex flex-col w-full gap-4">
          {SOCIAL_LINKS.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-6 py-5 bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 rounded-[1.25rem] transition-all duration-300 shadow-sm"
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
            className="group flex items-center justify-between px-6 py-5 bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/80 hover:border-zinc-700 rounded-[1.25rem] transition-all duration-300 shadow-sm mt-3"
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

        <footer className="mt-16 text-center opacity-40">
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600">
             Minimal Edition
           </p>
        </footer>

      </main>
    </div>
  );
};

export default App;