import React, { useState } from 'react';
import { FAQS_DATA, AGENCY_WHATSAPP } from '../data/agencyData';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsAppHelp = () => {
    const msg = encodeURIComponent("Hi EDIT AURA team! I have a question about your services and growth packages.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base mt-3">
            Everything you need to know about partnering with EDIT AURA.
          </p>
        </div>

        {/* Search Filter Bar in Frosted Glass */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. Meta ads, reels, WhatsApp bot, pricing)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/5 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:bg-white/10 backdrop-blur-md transition-all shadow-sm"
          />
        </div>

        {/* FAQ Accordion List in Frosted Glass */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-md ${
                  isOpen
                    ? 'bg-white/15 border-white/30 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#8b5cf6] text-white shadow-md' : 'bg-white/5 text-zinc-400 border border-white/10'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-zinc-400 text-sm bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              No matching questions found. Have a custom question? Chat with us directly on WhatsApp!
            </div>
          )}
        </div>

        {/* Quick Contact Box in Frosted Glass */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Have a specific question not listed here?</div>
            <div className="text-xs text-[#a1a1aa]">Our senior growth team answers directly within 15 minutes.</div>
          </div>
          <button
            onClick={handleWhatsAppHelp}
            className="px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 text-emerald-400 text-xs font-bold transition-all flex items-center gap-2 backdrop-blur-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
