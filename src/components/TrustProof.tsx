import React from 'react';
import { Award, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';

export const TrustProof: React.FC = () => {
  const stats = [
    {
      value: '50+',
      label: 'Creative Projects',
      detail: 'High-converting campaigns delivered',
      icon: Award
    },
    {
      value: '10+',
      label: 'Businesses Supported',
      detail: 'Across D2C, Tech, SaaS & Luxury',
      icon: Users
    },
    {
      value: '100K+',
      label: 'Content Reach',
      detail: 'Organic impressions & views',
      icon: Zap
    },
    {
      value: '4.2x',
      label: 'Average Client ROAS',
      detail: 'Verified paid acquisition return',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-16 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      {/* Frosted Glass background ambient blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-purple-900/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Philosophy & Metrics Split */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-center lg:text-left">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              Our Core Philosophy
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 font-display">
              Creative. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">Strategic.</span> Data-driven.
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-zinc-300 mt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero cookie-cutter templates · Custom engineered growth engines</span>
            </div>
          </div>

          {/* Key Statistics Grid in Frosted Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 w-full lg:w-auto">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left relative group overflow-hidden shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#a855f7]">
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400">
                      Verified
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1 leading-tight hidden sm:block">
                    {stat.detail}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
