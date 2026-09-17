import React, { useState } from 'react';
import {
  X,
  Check,
  ArrowRight,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Send,
  AlertCircle,
  Loader2,
  Lock
} from 'lucide-react';
import { Logo } from './Logo';
import { AGENCY_EMAIL, AGENCY_WHATSAPP, AGENCY_PHONE_FORMATTED } from '../data/agencyData';
import { trackConsultationSubmission } from '../utils/analytics';
import { BookingDetails } from './ThankYouModal';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBlueprint?: {
    budget: number;
    industry: string;
    services: string[];
    projectedLeads: number;
  } | null;
  onSuccessSubmit?: (booking: BookingDetails) => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTerms?: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialBlueprint,
  onSuccessSubmit,
  onOpenPrivacyPolicy,
  onOpenTerms
}) => {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<string[]>(
    initialBlueprint?.services || (initialService ? [initialService] : ['Branding & Creative Design', 'Content Creation'])
  );
  const [budget, setBudget] = useState(
    initialBlueprint ? `₹${initialBlueprint.budget.toLocaleString('en-IN')}/mo` : '₹10,000 - ₹30,000 / month (Starter)'
  );
  const [timeline, setTimeline] = useState('Immediately (Within 1-2 weeks)');

  // Form Details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    goals: ''
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStage, setLoadingStage] = useState('');

  if (!isOpen) return null;

  const handleDirectWhatsApp = () => {
    const selectedSrv = services.length > 0 ? services.join(', ') : 'Digital Growth Blueprint';
    const msg = encodeURIComponent(`Hi EDIT AURA! I'm requesting a consultation for ${selectedSrv}. Let's chat directly on WhatsApp.`);
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const toggleService = (srv: string) => {
    setServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company or Brand name is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp / Phone number is required';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid phone number (min 8 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setLoadingStage('Validating brand requirements...');

    setTimeout(() => {
      setLoadingStage('Synthesizing tailored 90-day growth blueprint...');
      setTimeout(() => {
        setLoadingStage('Confirming priority consultation slot...');
        setTimeout(() => {
          setIsSubmitting(false);

          // Generate reference ID
          const randomNum = Math.floor(1000 + Math.random() * 9000);
          const bookingId = `EA-GROWTH-2026-${randomNum}`;

          // Numeric budget approximation for analytics
          const parsedBudget = initialBlueprint?.budget || 15000;
          trackConsultationSubmission(services[0] || 'Full Growth Retainer', parsedBudget);

          const booking: BookingDetails = {
            bookingId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: services.join(', '),
            budget: parsedBudget,
            industry: initialBlueprint?.industry || formData.company,
            timeline
          };

          if (onSuccessSubmit) {
            onSuccessSubmit(booking);
          }
          onClose();
        }, 600);
      }, 700);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div
        className="bg-[#0c0c14]/95 border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative max-h-[92vh] overflow-y-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <Logo variant="mark" size="sm" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c084fc] font-bold">
              Growth Blueprint & Consultation
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono border border-purple-500/30">
              Min. ₹10,000/mo
            </span>
          </div>
        </div>

        <div>
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between gap-2 mb-6">
            {[
              { num: 1, label: 'Services' },
              { num: 2, label: 'Budget' },
              { num: 3, label: 'Details' }
            ].map((s) => (
              <div key={s.num} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step >= s.num ? 'bg-gradient-to-r from-[#818cf8] to-[#c084fc]' : 'bg-white/10'
                  }`}
                />
                <span className="text-[10px] font-mono text-zinc-400 mt-1 block">
                  Step {s.num}: {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: Services Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white font-display">
                  What are you looking to build or scale?
                </h3>
                <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
                  Select all areas where your brand needs growth acceleration.
                </p>
              </div>

              {errors.services && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>{errors.services}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Social Media Management',
                  'Content Creation & Video',
                  'Branding & Visual Identity',
                  'Online Book Publishing (Amazon KDP)',
                  'AI Marketing & Workflows',
                  'Custom Website Development',
                  'Search Engine Optimization (SEO)',
                  'Performance Marketing (Meta/Google)',
                  'WhatsApp Automation',
                  'Full Growth Retainer'
                ].map((srv) => {
                  const isChecked = services.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between backdrop-blur-md ${
                        isChecked
                          ? 'bg-purple-600/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                          : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="truncate pr-2">{srv}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-[#8b5cf6] text-white font-bold' : 'border border-white/20'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (services.length === 0) {
                      setErrors({ services: 'Please select at least one service to continue' });
                      return;
                    }
                    setStep(2);
                  }}
                  className="px-7 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 active:scale-95"
                >
                  <span>Next: Budget & Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Budget & Timeline */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white font-display">
                  Budget & Timeline Preferences
                </h3>
                <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
                  This helps us structure the right team, media allocation, and execution velocity.
                </p>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                    Estimated Monthly Marketing / Media Budget
                  </label>
                  <span className="text-[10px] text-purple-400 font-mono">Min. budget: ₹10,000/mo</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    '₹10,000 - ₹30,000 / month (Starter)',
                    '₹30,000 - ₹1,00,000 / month (Growth)',
                    '₹1,00,000 - ₹3,00,000 / month (Scale)',
                    '₹3,00,000+ / month (Enterprise & Multi-channel)'
                  ].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all backdrop-blur-md ${
                        budget === b
                          ? 'bg-purple-600/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                          : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                  Target Start Date
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Immediately (1-2 weeks)',
                    'Within 30 Days',
                    'Just exploring / Q3-Q4'
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all backdrop-blur-md ${
                        timeline === t
                          ? 'bg-purple-600/20 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                          : 'bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-semibold transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-7 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25 active:scale-95"
                >
                  <span>Next: Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Business Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <h3 className="text-2xl font-black text-white font-display">
                  Tell us about your brand
                </h3>
                <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
                  We will review your channels and prepare a bespoke roadmap before our strategy call.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Morgan"
                    aria-invalid={!!errors.name}
                    className={`w-full p-3.5 rounded-2xl bg-white/5 border text-xs text-white focus:outline-none backdrop-blur-md transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-400 bg-rose-500/5' : 'border-white/10 focus:border-purple-400'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Lumina Apparel"
                    aria-invalid={!!errors.company}
                    className={`w-full p-3.5 rounded-2xl bg-white/5 border text-xs text-white focus:outline-none backdrop-blur-md transition-colors ${
                      errors.company ? 'border-rose-500 focus:border-rose-400 bg-rose-500/5' : 'border-white/10 focus:border-purple-400'
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@company.com"
                    aria-invalid={!!errors.email}
                    className={`w-full p-3.5 rounded-2xl bg-white/5 border text-xs text-white focus:outline-none backdrop-blur-md transition-colors ${
                      errors.email ? 'border-rose-500 focus:border-rose-400 bg-rose-500/5' : 'border-white/10 focus:border-purple-400'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.phone}
                    className={`w-full p-3.5 rounded-2xl bg-white/5 border text-xs text-white focus:outline-none backdrop-blur-md transition-colors ${
                      errors.phone ? 'border-rose-500 focus:border-rose-400 bg-rose-500/5' : 'border-white/10 focus:border-purple-400'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                  Website or Instagram Profile URL
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://instagram.com/yourbrand or website.com"
                  className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-400 backdrop-blur-md"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase text-zinc-300 font-bold block mb-1">
                  Primary Goal or Current Growth Bottleneck
                </label>
                <textarea
                  name="goals"
                  rows={2}
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="e.g. Scaling revenue from ₹3L to ₹10L/mo with short-form videos, Meta ads, and automated WhatsApp follow-ups."
                  className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-400 backdrop-blur-md"
                />
              </div>

              {/* Legal & Privacy Checkpoint */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-zinc-400 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>
                  Your info is 100% confidential. By submitting, you agree to our{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    Privacy Policy
                  </button>{' '}
                  &{' '}
                  <button
                    type="button"
                    onClick={onOpenTerms}
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    Terms
                  </button>.
                </span>
              </div>

              {/* Submit / Loading Bar */}
              {isSubmitting ? (
                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-300 font-bold">
                    <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                    <span>{loadingStage}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 animate-pulse w-3/4 mx-auto" />
                  </div>
                </div>
              ) : (
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-semibold transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 active:scale-95 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Submit & Generate Growth Blueprint</span>
                  </button>
                </div>
              )}

              <div className="pt-4 mt-2 border-t border-white/10 text-center">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Fast-Track: Chat directly on WhatsApp ({AGENCY_PHONE_FORMATTED})</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
