import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, X, Target, Film, Share2, Cpu, TrendingUp } from 'lucide-react';

export const WhyEditAura: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: 'Strategy before execution',
      desc: 'We never shoot in the dark. Every campaign begins with deep audience psychology, competitive whitespace analysis, and financial unit economics.'
    },
    {
      title: 'Content built around your brand',
      desc: 'No generic Canva templates. Every asset is designed to reflect your authentic aesthetic aura, commanding premium brand authority.'
    },
    {
      title: 'AI-powered workflows',
      desc: 'We integrate cutting-edge AI pipelines for multi-variant copy testing, competitor intelligence, and lightning-fast creative iterations.'
    },
    {
      title: 'Data-driven decisions',
      desc: 'Creative intuition backed by cold-hard metrics. Every dollar spent on media buying is tracked down to real conversion revenue and ROAS.'
    },
    {
      title: 'Creative storytelling',
      desc: 'We craft hooks and narratives engineered to capture genuine human curiosity and create emotional connection with your audience.'
    },
    {
      title: 'Focus on measurable growth',
      desc: 'Vanity likes do not pay payroll. We align all marketing initiatives directly with your revenue targets, sales pipeline, and customer LTV.'
    }
  ];

  const engineSteps = [
    {
      label: 'Strategy',
      icon: Target,
      tag: 'Blueprint',
      desc: 'Audience analysis & positioning whitespace to guarantee market resonance.'
    },
    {
      label: 'Content',
      icon: Film,
      tag: 'Attention',
      desc: 'Cinematic Reels, high-converting carousels & thumb-stopping copy.'
    },
    {
      label: 'Distribution',
      icon: Share2,
      tag: 'Reach',
      desc: 'Meta Ads, Google Search & organic viral distribution architecture.'
    },
    {
      label: 'Automation',
      icon: Cpu,
      tag: 'Efficiency',
      desc: 'Instant WhatsApp funnels, CRM sync & zero-touch lead routing.'
    },
    {
      label: 'Growth',
      icon: TrendingUp,
      tag: 'Scale',
      desc: 'Predictable recurring revenue, compounding reach & brand equity.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      {/* Frosted glow background accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
            The Edit Aura Difference
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            WHY EDIT AURA
          </h2>
        </div>

        {/* Split Screen Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-xs font-mono uppercase tracking-widest text-[#c084fc] font-bold mb-3">
                No Copy-Paste Marketing
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white font-display leading-[1.15] mb-6">
                YOUR BUSINESS IS UNIQUE.{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
                  YOUR MARKETING SHOULD BE TOO.
                </span>
              </h3>

              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-6">
                Most agencies reuse generic social post templates, run basic boosted posts, and wonder why the phone does not ring.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                At EDIT AURA, we build bespoke digital growth engines tailored specifically to your target unit economics, brand identity, and customer journey.
              </p>

              {/* Tagline badge */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>EDIT AURA Standard</span>
                <span className="text-[#c084fc] font-bold">100% Tailored</span>
              </div>
            </div>

            {/* Quick Contrast Box */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono uppercase font-bold mb-2">
                  <X className="w-4 h-4" />
                  <span>Other Agencies</span>
                </div>
                <ul className="text-[11px] text-zinc-400 space-y-1.5">
                  <li>• Cookie-cutter Canva graphics</li>
                  <li>• Vanity likes without sales</li>
                  <li>• Slow, manual lead handling</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-purple-500/30 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-[#c084fc] text-xs font-mono uppercase font-bold mb-2">
                  <Sparkles className="w-4 h-4 text-[#a855f7]" />
                  <span>EDIT AURA</span>
                </div>
                <ul className="text-[11px] text-zinc-200 space-y-1.5">
                  <li>• Custom brand design systems</li>
                  <li>• Measurable ROAS & pipeline</li>
                  <li>• Instant AI & WhatsApp funnels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Core Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#a855f7] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#c084fc] transition-colors font-display mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Animated Connecting Graphic: Strategy → Content → Distribution → Automation → Growth */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#c084fc] font-bold">
              The Compounding Flywheel
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
              THE EDIT AURA GROWTH ENGINE
            </h3>
            <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
              Each stage multiplies the impact of the next to create unstoppable market momentum.
            </p>
          </div>

          {/* Connected Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
            {engineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.label}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative backdrop-blur-md ${
                    isSelected
                      ? 'bg-white/15 border-white/30 shadow-lg shadow-purple-500/20 -translate-y-1'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {/* Step index & tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#a855f7]">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {step.tag}
                    </span>
                  </div>

                  <div>
                    <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                      isSelected ? 'bg-[#8b5cf6] text-white shadow-md' : 'bg-white/5 text-zinc-300 border border-white/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-lg font-bold text-white font-display mb-1.5">
                      {step.label}
                    </div>

                    <p className="text-[#a1a1aa] text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow arrow indicator for non-last item on desktop */}
                  {idx < engineSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-500">
                      <ArrowRight className="w-4 h-4 text-[#a855f7]/60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-zinc-400 font-mono">
              Result: <strong className="text-white">Predictable Customer Acquisition + Indelible Brand Aura</strong>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
