import React from 'react';
import { CaseStudy, AGENCY_WHATSAPP } from '../data/agencyData';
import { X, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Quote, MessageSquare } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onOpenConsultation
}) => {
  if (!study) return null;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi EDIT AURA! I was reading the case study on "${study.title}" (${study.client}). I'd like to discuss achieving similar results for my brand.`);
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div
        className="bg-[#0c0c14]/90 border border-white/20 rounded-3xl max-w-4xl w-full shadow-2xl backdrop-blur-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-zinc-300 hover:text-white transition-colors border border-white/20 backdrop-blur-md"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-zinc-950">
          <img
            src={study.heroImage}
            alt={study.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/60 to-transparent" />

          {/* Overlaid Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#c084fc] border border-white/20 text-xs font-mono font-bold uppercase backdrop-blur-md">
                  {study.industry}
                </span>
                <span className="text-zinc-300 text-xs font-mono font-bold">{study.client}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
                {study.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tagline */}
          <p className="text-base sm:text-lg text-purple-200 font-medium leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
            {study.tagline}
          </p>

          {/* Results Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#a855f7]" />
              <span>Verified Results & ROI</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {study.results.map((res, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-md">
                  <div className="text-3xl font-black text-white font-display bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
                    {res.metric}
                  </div>
                  <div className="text-xs text-[#a1a1aa] font-medium mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider mb-2 text-rose-300">
                The Bottleneck
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
              <h4 className="text-sm font-bold uppercase font-mono tracking-wider mb-2 text-[#c084fc]">
                The EDIT AURA Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Services Deployed */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-2.5">
              Services & Systems Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 flex items-center gap-1.5 backdrop-blur-md"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                  <span>{srv}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {study.testimonial && (
            <div className="p-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md relative shadow-xl">
              <Quote className="w-8 h-8 text-[#8b5cf6]/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-zinc-200 mb-3 relative z-10">
                "{study.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-white">
                {study.testimonial.author}
                <span className="text-[#a1a1aa] font-normal ml-2">({study.testimonial.role})</span>
              </div>
            </div>
          )}

          {/* Modal Bottom CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#a1a1aa]">
              Ready to achieve similar exponential growth for your brand?
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                title="Discuss this case study on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25 active:scale-95 cursor-pointer"
              >
                <span>Get a Strategy Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
