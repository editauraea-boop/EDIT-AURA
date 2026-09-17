import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Bot,
  Database,
  Calendar,
  CheckCircle,
  Play,
  RefreshCw,
  Zap,
  Share2,
  FileText,
  Palette,
  Send,
  BarChart3
} from 'lucide-react';

interface AiAutomationSectionProps {
  onOpenConsultation: () => void;
}

export const AiAutomationSection: React.FC<AiAutomationSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'leadFlow' | 'contentFlow'>('leadFlow');
  
  // Interactive Simulator State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [leadName, setLeadName] = useState('Sarah Jenkins');
  const [leadInterest, setLeadInterest] = useState('Branding & Meta Ads');

  const startSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 900);
    setTimeout(() => setSimStep(3), 1800);
    setTimeout(() => setSimStep(4), 2700);
    setTimeout(() => {
      setSimStep(5);
      setIsSimulating(false);
    }, 3600);
  };

  const resetSimulation = () => {
    setSimStep(0);
    setIsSimulating(false);
  };

  return (
    <section id="automation" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
            AI & Autonomous Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            MARKETING IS CHANGING. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
              YOUR BUSINESS SHOULD TOO.
            </span>
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Use AI and automation to save dozens of hours, improve customer experiences, and build scalable marketing systems that work 24/7 without burnout.
          </p>
        </div>

        {/* Interactive Workflow Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setActiveTab('leadFlow')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'leadFlow'
                  ? 'bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Workflow 1: Omnichannel Lead Automation</span>
            </button>

            <button
              onClick={() => setActiveTab('contentFlow')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'contentFlow'
                  ? 'bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/25'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Workflow 2: AI Content Engine</span>
            </button>
          </div>
        </div>

        {/* Workflow 1: Omnichannel Lead Flow & Live Interactive Simulator */}
        {activeTab === 'leadFlow' && (
          <div className="space-y-10">
            {/* Visual Workflow Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { title: 'Inbound Lead', sub: 'Meta Ad / Web Form', icon: Zap, status: simStep >= 1 },
                { title: 'WhatsApp AI', sub: '< 20s Instant Greeting', icon: MessageSquare, status: simStep >= 2 },
                { title: 'CRM Sync', sub: 'HubSpot / Zoho Enriched', icon: Database, status: simStep >= 3 },
                { title: 'Auto Follow-Up', sub: 'Tailored Brochure & Video', icon: Bot, status: simStep >= 4 },
                { title: 'Booked Call', sub: 'Calendar Confirmed & Sync', icon: Calendar, status: simStep >= 5 },
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.title}
                    className={`p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between backdrop-blur-md ${
                      node.status
                        ? 'bg-white/15 border-white/30 shadow-lg shadow-purple-500/20 -translate-y-1'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-[#a855f7]">STAGE 0{i + 1}</span>
                      {node.status && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>

                    <div className="my-2">
                      <div className={`w-10 h-10 rounded-xl mb-2.5 flex items-center justify-center ${
                        node.status ? 'bg-[#8b5cf6] text-white shadow-md' : 'bg-white/5 text-zinc-400 border border-white/10'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-base font-bold text-white font-display">{node.title}</div>
                      <div className="text-xs text-[#a1a1aa] mt-0.5">{node.sub}</div>
                    </div>

                    {i < 4 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600">
                        <ArrowRight className={`w-4 h-4 ${node.status ? 'text-[#a855f7]' : 'text-zinc-600'}`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Simulator Console */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      Live Lead Automation Simulator
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#a1a1aa]">
                    Test the instant speed of EDIT AURA's WhatsApp + CRM automation pipeline.
                  </p>
                </div>

                {/* Simulator Controls */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <input
                    type="text"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Lead Name"
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400 disabled:opacity-50 backdrop-blur-md"
                  />
                  <select
                    value={leadInterest}
                    onChange={(e) => setLeadInterest(e.target.value)}
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-full bg-[#0d0d14] border border-white/15 text-xs text-zinc-200 focus:outline-none focus:border-purple-400 disabled:opacity-50"
                  >
                    <option>Branding & Meta Ads</option>
                    <option>WhatsApp CRM Automation</option>
                    <option>Website Redesign & SEO</option>
                    <option>Short-form Video Content</option>
                  </select>

                  <button
                    onClick={startSimulation}
                    disabled={isSimulating}
                    className="px-6 py-2 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs flex items-center gap-1.5 disabled:opacity-50 transition-all shadow-lg shadow-purple-500/25 whitespace-nowrap active:scale-95"
                  >
                    {isSimulating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
                  </button>

                  {simStep > 0 && (
                    <button
                      onClick={resetSimulation}
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-400 hover:text-white"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              {/* Simulated Output Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Panel 1: Terminal Logs */}
                <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-zinc-300 space-y-2 h-48 overflow-y-auto backdrop-blur-md">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest pb-1 border-b border-white/10 flex justify-between">
                    <span>Automation Log Stream</span>
                    <span className="text-emerald-400">ONLINE</span>
                  </div>

                  {simStep >= 1 && (
                    <div className="text-purple-300">
                      [0.00s] &gt; Inbound webhook from Meta Ad Form: "{leadName}" interested in "{leadInterest}".
                    </div>
                  )}
                  {simStep >= 2 && (
                    <div className="text-emerald-300">
                      [0.45s] &gt; WhatsApp Cloud API triggered. Automated AI greeting dispatched to verified mobile.
                    </div>
                  )}
                  {simStep >= 3 && (
                    <div className="text-cyan-300">
                      [1.20s] &gt; HubSpot CRM contact created. Pipeline deal moved to "High Intent Prospect".
                    </div>
                  )}
                  {simStep >= 4 && (
                    <div className="text-amber-300">
                      [2.10s] &gt; Dynamic PDF portfolio and interactive calendar link sent via WhatsApp.
                    </div>
                  )}
                  {simStep >= 5 && (
                    <div className="text-emerald-400 font-bold">
                      [3.40s] &gt; PROSPECT BOOKED: 30-min Strategy Call confirmed on Founder's Calendar!
                    </div>
                  )}
                  {simStep === 0 && (
                    <div className="text-zinc-400 italic pt-12 text-center">
                      Click "Run Simulation" above to test the zero-touch pipeline.
                    </div>
                  )}
                </div>

                {/* Panel 2: Simulated WhatsApp Preview */}
                <div className="p-4 rounded-2xl bg-[#0b141a]/90 border border-emerald-500/20 text-xs flex flex-col justify-between h-48 backdrop-blur-md">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10 text-emerald-400 font-semibold">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Business Automated Assistant</span>
                  </div>

                  {simStep >= 2 ? (
                    <div className="space-y-2 py-1">
                      <div className="p-2.5 rounded-xl bg-[#202c33] text-zinc-100 max-w-[85%] self-start shadow-sm leading-relaxed">
                        <div className="text-[10px] text-[#c084fc] font-bold mb-0.5">EDIT AURA Growth Bot</div>
                        Hey {leadName}! 👋 Thank you for inquiring about {leadInterest}. Would you like our 2026 Growth Blueprint or a quick 1-on-1 strategy call?
                      </div>

                      {simStep >= 4 && (
                        <div className="p-2.5 rounded-xl bg-[#005c4b] text-white max-w-[85%] self-end ml-auto shadow-sm">
                          Strategy call booked! We have sent calendar invites to your email. 🚀
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-zinc-400 italic text-center py-8">
                      Awaiting inbound lead trigger...
                    </div>
                  )}

                  <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between pt-2 border-t border-white/10">
                    <span>Status: {simStep >= 5 ? 'Converted' : simStep > 0 ? 'Active Workflow' : 'Idle'}</span>
                    <span>Response Time: &lt; 20s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workflow 2: AI Content Engine */}
        {activeTab === 'contentFlow' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { title: 'Idea & Trend', sub: 'Viral Research AI', icon: Sparkles },
                { title: 'Scripting', sub: 'Hook & Narrative AI', icon: FileText },
                { title: 'Design & Visuals', sub: 'Studio Creative Direction', icon: Palette },
                { title: 'Brand Approval', sub: 'Client One-Click Review', icon: CheckCircle },
                { title: 'Multi-Publish', sub: 'IG, LinkedIn, YouTube', icon: Send },
                { title: 'Analytics', sub: 'Weekly Performance Loop', icon: BarChart3 },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-md transition-all flex flex-col justify-between relative group"
                  >
                    <div className="text-[10px] font-mono font-bold text-[#a855f7] mb-2">0{i + 1}</div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#c084fc] flex items-center justify-center mb-3 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-base font-bold text-white font-display mb-1">{step.title}</div>
                    <div className="text-xs text-[#a1a1aa]">{step.sub}</div>

                    {i < 5 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600">
                        <ArrowRight className="w-4 h-4 text-[#a855f7]/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center max-w-3xl mx-auto space-y-4 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-display">
                Create 30 Days of High-Converting Content in 1 Afternoon
              </h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-xl mx-auto">
                Our proprietary AI framework takes your core expertise, extracts high-retention hooks, scripts video reels, generates carousels, and prepares social copy without diluting your brand voice.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-8 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/25 inline-flex items-center gap-2 active:scale-95"
                >
                  <span>Build Your AI Content Engine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md text-white font-bold text-sm hover:bg-white/10 transition-all shadow-xl active:scale-95"
          >
            <span>Build Your Automation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#a855f7]" />
          </button>
        </div>

      </div>
    </section>
  );
};
