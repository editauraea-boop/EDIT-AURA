import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { AGENCY_WHATSAPP } from '../data/agencyData';
import { trackCtaClick, trackWhatsAppInitiation } from '../utils/analytics';

interface StickyMobileCtaProps {
  onOpenConsultation: () => void;
  isAnyModalOpen: boolean;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({
  onOpenConsultation,
  isAnyModalOpen
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 180px
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isAnyModalOpen) return null;

  const handleWhatsApp = () => {
    trackWhatsAppInitiation('sticky_mobile_bar');
    const msg = encodeURIComponent("Hi EDIT AURA! I'm on mobile and would like to quickly discuss scaling my brand.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleConsultation = () => {
    trackCtaClick('sticky_mobile_consultation', 'mobile_bar');
    onOpenConsultation();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 bg-[#09090b]/90 backdrop-blur-xl border-t border-white/15 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        
        {/* Instant WhatsApp Quick Button */}
        <button
          onClick={handleWhatsApp}
          className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-black" />
          <span className="font-bold">WhatsApp</span>
        </button>

        {/* Primary Consultation Button */}
        <button
          onClick={handleConsultation}
          className="flex-1 py-3 px-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-900/50 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
