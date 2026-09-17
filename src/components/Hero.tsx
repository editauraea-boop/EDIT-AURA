import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, MessageSquare, Play, ShieldCheck } from 'lucide-react';
import { AuraCanvas } from './AuraCanvas';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]">
      {/* Frosted Glass Theme Ambient Glowing Orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Conversion Copy (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#a855f7] uppercase font-mono">
                Next-Gen Digital Growth
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="text-zinc-400 text-[11px] tracking-wide hidden sm:inline">Creative + Systems + Scale</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] font-display">
              WE DON’T JUST <br className="hidden sm:block" />
              MARKET BRANDS.{' '}
              <br />
              <span className="text-[#f5f5f5]">WE BUILD THEIR </span>
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] drop-shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                  AURA.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] rounded-full opacity-80" />
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] max-w-2xl font-normal leading-relaxed">
              EDIT AURA is a digital growth company helping ambitious businesses build powerful brands, create content that connects, and turn attention into growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-purple-500/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400/30" />
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Mini Trust Points in Frosted Glass styling */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400 border-t border-white/10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>Bespoke Strategic Roadmaps</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-zinc-300">
                <Zap className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>AI Marketing Automations</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-zinc-300">
                <TrendingUp className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>Transparent Performance ROAS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Futuristic 3D Visual + Floating Interactive Glass Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            
            {/* The 3D Interactive Canvas Sphere framed in Frosted Glass */}
            <div className="w-full h-[440px] sm:h-[500px] rounded-3xl relative overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center p-2 shadow-2xl">
              <AuraCanvas className="w-full h-full" />

              {/* Center Brand Identity Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-5 py-2.5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c084fc] font-bold">
                    AURA CORE ENGINE
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wider">
                    ATTENTION · CONVERSION · SCALE
                  </div>
                </div>
              </div>

              {/* Floating Frosted Glass UI Card 1: Performance ROAS */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-left shadow-2xl animate-float pointer-events-none max-w-[190px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300">Meta Ads ROAS</span>
                </div>
                <div className="text-2xl font-black text-white font-display">4.82x</div>
                <div className="text-[10px] text-emerald-300 font-medium flex items-center gap-1 mt-0.5">
                  <span>+142% vs industry avg</span>
                </div>
              </div>

              {/* Floating Frosted Glass UI Card 2: WhatsApp CRM Automation */}
              <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-left shadow-2xl [animation-delay:1.5s] animate-float pointer-events-none max-w-[210px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c084fc] font-bold">AI Automation</span>
                </div>
                <div className="text-xs font-semibold text-white">
                  Lead Qualified & Demo Booked
                </div>
                <div className="text-[10px] text-zinc-300 mt-1 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Response: 18s</span>
                </div>
              </div>

              {/* Floating Frosted Pill: Content Reach */}
              <div className="absolute top-8 right-6 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2 shadow-xl animate-pulse-slow pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-[#e879f9]" />
                <span className="text-xs font-bold text-white">100K+ Viral Reach</span>
              </div>

              {/* Floating Bottom Left: Tagline badge */}
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md pointer-events-none">
                <span className="text-[10px] tracking-[0.25em] text-zinc-300 uppercase font-mono">
                  make them pause.
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
