import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Frosted glow background */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
              Client Proof & Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              DON’T TAKE OUR WORD FOR IT.
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-base max-w-xl mt-3">
              Hear from founders, directors and CMOs who transformed their business trajectory with EDIT AURA.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-zinc-300 hover:text-white transition-all backdrop-blur-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white transition-all shadow-lg shadow-purple-500/25 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Big Testimonial Display in Frosted Glass */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-12">
          <Quote className="w-16 h-16 text-[#8b5cf6]/20 absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-6">
            {/* Stars & Metric Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-[#c084fc] text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>{current.metric}</span>
              </span>

              <span className="text-xs font-mono text-zinc-400 uppercase font-bold">
                {current.industry}
              </span>
            </div>

            {/* Main Quote */}
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-100 font-display leading-relaxed">
              "{current.quote}"
            </p>

            {/* Author Profile */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-base font-bold text-white font-display">
                {current.author}
              </div>
              <div className="text-xs text-[#a1a1aa] mt-0.5">
                {current.role} · <span className="text-[#c084fc] font-semibold">{current.company}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Thumbnails / Switchers in Frosted Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all backdrop-blur-md ${
                currentIndex === idx
                  ? 'bg-white/15 border-white/30 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-200 hover:bg-white/10'
              }`}
            >
              <div className="text-xs font-bold truncate text-white">{t.author}</div>
              <div className="text-[11px] text-[#a1a1aa] truncate">{t.company}</div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
