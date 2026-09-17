import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, Sparkles, ArrowRight, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      {/* Frosted Glass glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
            Strategic Execution Framework
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            FROM IDEA TO IMPACT.
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base mt-3">
            A battle-tested 6-stage engineering process designed to eliminate guesswork and systematically scale your brand.
          </p>
        </div>

        {/* Step Navigation Pill Bar in Frosted Glass */}
        <div className="flex items-center justify-between gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 min-w-[130px] p-4 rounded-2xl border transition-all duration-300 text-left relative backdrop-blur-md ${
                  isActive
                    ? 'bg-white/15 border-white/30 shadow-lg shadow-purple-500/20 -translate-y-1'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#c084fc]' : 'text-zinc-400'}`}>
                    STEP {step.number}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {step.timeline}
                  </span>
                </div>
                <div className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed View (Split Showcase) in Frosted Glass Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 text-[#c084fc] flex items-center justify-center font-mono font-black text-lg backdrop-blur-md">
                  {activeStep.number}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a855f7] font-bold">
                    Phase {activeStep.number} of 06
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    {activeStep.title} — {activeStep.subtitle}
                  </h3>
                </div>
              </div>

              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Deliverables List */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a855f7]" />
                  <span>Tangible Milestones & Deliverables</span>
                </h4>
                <div className="space-y-2.5">
                  {activeStep.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#a855f7] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Phase Dashboard Card in Frosted Glass */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-xl space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#a855f7]" />
                  <span className="text-xs font-mono text-zinc-300">Phase Window</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#8b5cf6]/20 border border-purple-500/30 text-[#c084fc] text-xs font-mono font-bold">
                  {activeStep.timeline}
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-zinc-400 font-bold">Step Progress Indicator</div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] h-full rounded-full transition-all duration-500"
                    style={{ width: `${((activeStepIndex + 1) / 6) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Start</span>
                  <span>Step {activeStepIndex + 1} of 6</span>
                  <span>Scale & Flywheel</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 leading-relaxed">
                <span className="font-bold text-white block mb-1">Our Commitment:</span>
                Complete transparency with weekly video updates, real-time shared dashboards, and dedicated Slack/WhatsApp communication channels.
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous
                </button>

                <button
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-xs font-bold disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5 shadow-lg shadow-purple-500/25 active:scale-95"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
