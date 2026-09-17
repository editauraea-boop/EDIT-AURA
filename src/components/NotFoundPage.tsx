import React from 'react';
import { Compass, Home, Sparkles, ArrowRight, MessageSquare, Search, RefreshCw } from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_WHATSAPP } from '../data/agencyData';
import { updatePageMeta } from '../utils/metaManager';

interface NotFoundPageProps {
  onReturnHome: () => void;
  onOpenConsultation: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onReturnHome,
  onOpenConsultation
}) => {
  React.useEffect(() => {
    updatePageMeta('notFound');
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi EDIT AURA! I reached a 404 page and wanted to inquire about your services.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header */}
      <header className="p-6 sm:p-8 max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
        <button onClick={onReturnHome} className="hover:opacity-90 transition-opacity">
          <Logo variant="full" size="md" showGlow />
        </button>

        <button
          onClick={onReturnHome}
          className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md text-xs font-semibold flex items-center gap-2 transition-all"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </button>
      </header>

      {/* Center 404 Hero */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center relative z-10 flex flex-col items-center justify-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#c084fc] text-xs font-mono font-bold mb-6 animate-pulse">
          <Compass className="w-3.5 h-3.5" />
          <span>ERROR CODE 404 · ROUTE NOT FOUND</span>
        </div>

        {/* Big Glitch Display Number */}
        <div className="relative mb-6">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800 font-display select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#a855f7] bg-black/60 px-4 py-1.5 rounded-full border border-purple-500/30 backdrop-blur-md shadow-2xl">
              LOST IN THE DIGITAL VOID
            </span>
          </div>
        </div>

        {/* Explanatory Description */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display max-w-xl">
          The page you are looking for has moved or does not exist.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-lg mt-3 leading-relaxed">
          While we build memorable digital auras for brands, even the best algorithms occasionally take a detour. Let&rsquo;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Aura Headquarters</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Book Growth Consultation</span>
          </button>
        </div>

        {/* Quick Nav Destination Suggestions */}
        <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-2xl text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold mb-4 text-center">
            Popular Destinations
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <button
              onClick={() => { onReturnHome(); setTimeout(() => { const el = document.getElementById('services'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all text-center"
            >
              Services (9 Core)
            </button>
            <button
              onClick={() => { onReturnHome(); setTimeout(() => { const el = document.getElementById('portfolio'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all text-center"
            >
              Featured Work
            </button>
            <button
              onClick={() => { onReturnHome(); setTimeout(() => { const el = document.getElementById('calculator'); el?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all text-center"
            >
              ROI Calculator
            </button>
            <button
              onClick={handleWhatsApp}
              className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 hover:text-emerald-200 transition-all text-center font-semibold"
            >
              Direct WhatsApp
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-zinc-600 border-t border-white/5 relative z-10 font-mono">
        © {new Date().getFullYear()} EDIT AURA · Pune, India · editaura.com
      </footer>
    </div>
  );
};
