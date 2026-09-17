import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_WHATSAPP } from '../data/agencyData';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi EDIT AURA team! I'm ready to build our brand's aura and scale our digital growth. Let's get started.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Intense Ambient Glowing Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-600/20 via-violet-600/25 to-indigo-600/20 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Brand Mark with glowing aura */}
        <div className="flex justify-center mb-2">
          <Logo variant="full" size="lg" showGlow />
        </div>

        {/* Massive Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight font-display leading-[1.08]">
          READY TO CREATE <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
            YOUR AURA?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto font-normal">
          Let’s turn your ideas into a brand people remember, talk about, and buy from.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenConsultation}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-base transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-full bg-white/5 text-emerald-400 font-bold text-base border border-emerald-500/30 hover:bg-white/10 hover:border-emerald-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-lg backdrop-blur-md active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Tagline Whisper */}
        <div className="pt-8">
          <span className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-zinc-500 select-none">
            make them pause.
          </span>
        </div>

      </div>
    </section>
  );
};
