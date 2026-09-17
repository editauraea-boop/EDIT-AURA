import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight,
  X,
  Clock,
  ShieldCheck,
  Download,
  Mail,
  Share2
} from 'lucide-react';
import { AGENCY_EMAIL, AGENCY_WHATSAPP } from '../data/agencyData';

export interface BookingDetails {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  budget?: number;
  industry?: string;
  timeline?: string;
}

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: BookingDetails | null;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onClose,
  bookingDetails
}) => {
  useEffect(() => {
    if (isOpen) {
      // Fire celebratory confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#c084fc', '#818cf8', '#ffffff', '#34d399']
        });
      } catch {
        // Ignore confetti error if canvas not ready
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !bookingDetails) return null;

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hi EDIT AURA! I just submitted a growth consultation request.\n\n*Reference ID:* ${bookingDetails.bookingId}\n*Name:* ${bookingDetails.name}\n*Service:* ${bookingDetails.service || 'Comprehensive Growth Blueprint'}\n*Budget:* ₹${bookingDetails.budget?.toLocaleString('en-IN') || '10,000+'}/mo\n\nLooking forward to speaking with the strategy team!`
    );
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCalendarInvite = () => {
    // Generate standard .ics calendar file for the 30-min strategy session
    const title = `EDIT AURA 1-on-1 Growth Strategy Session [${bookingDetails.bookingId}]`;
    const desc = `Strategy consultation with EDIT AURA team. Client: ${bookingDetails.name}. Email: ${bookingDetails.email}. Services: ${bookingDetails.service || 'Growth Strategy'}.`;
    const location = 'Google Meet / WhatsApp Video Call';
    
    const now = new Date();
    const startDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours later
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // 30 min duration
    
    const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//EDIT AURA//Growth Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${location}`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `EditAura-Strategy-Session-${bookingDetails.bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#09090b] border border-white/20 rounded-3xl shadow-2xl shadow-purple-950/50 p-6 sm:p-8 z-10 text-white overflow-hidden animate-in zoom-in-95">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
          aria-label="Close thank you modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main Content */}
        <div className="text-center space-y-4 relative z-10">
          
          {/* Animated Success Badge */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-xl shadow-emerald-950/50">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>SUBMISSION CONFIRMED</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
            Your Growth Blueprint is Underway!
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{bookingDetails.name}</strong>. Our senior strategists have received your project details and are preparing a tailored 90-day execution roadmap.
          </p>

          {/* Reference Card with Details */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-left space-y-3 text-xs backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-zinc-400 font-mono">Reference Ticket:</span>
              <span className="font-mono font-bold text-[#c084fc] bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                {bookingDetails.bookingId}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-zinc-300">
              <div>
                <span className="text-[11px] text-zinc-400 block">Service Focus:</span>
                <span className="font-semibold text-white truncate block">
                  {bookingDetails.service || 'Growth Blueprint'}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-zinc-400 block">Monthly Retainer:</span>
                <span className="font-semibold text-white block">
                  ₹{bookingDetails.budget?.toLocaleString('en-IN') || '10,000+'}/mo
                </span>
              </div>
            </div>

            <div className="pt-1 text-[11px] text-zinc-400 flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guaranteed Response SLA: Under 2 hours</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
            <button
              onClick={handleWhatsAppConfirmation}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Fast-Track on WhatsApp</span>
            </button>

            <button
              onClick={handleDownloadCalendarInvite}
              className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>Add to Calendar (.ics)</span>
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-[11px] text-zinc-400 pt-1">
            Questions? Email us directly at{' '}
            <a href={`mailto:${AGENCY_EMAIL}`} className="text-purple-300 underline">
              {AGENCY_EMAIL}
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};
