import React from 'react';
import { ServiceItem, AGENCY_WHATSAPP } from '../data/agencyData';
import { X, CheckCircle, Wrench, ArrowRight, Zap, MessageSquare } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation
}) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(`Hi EDIT AURA! I'm interested in your "${service.title}" service (${service.category}). Can we discuss how this can scale our brand?`);
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div
        className="bg-[#0c0c14]/90 border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-white/5 text-[#c084fc] font-mono text-xs font-bold border border-white/10">
            SERVICE {service.number}
          </span>
          <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
            {service.category.toUpperCase()}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
          {service.title}
        </h3>

        <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Impact metric highlight */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/20 border border-purple-500/30 text-[#c084fc] flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase text-[#c084fc] font-bold">Target Impact Benchmark</div>
              <div className="text-sm sm:text-base font-bold text-white">{service.impactMetric}</div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#a855f7]" />
            <span>Key Deliverables Included</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#a855f7]" />
            <span>Tech Stack & Platforms</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onSelectForConsultation(service.title);
              onClose();
            }}
            className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25 active:scale-95 cursor-pointer"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            title="Chat about this service on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
