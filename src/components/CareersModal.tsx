import React, { useState } from 'react';
import {
  X,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Send,
  ExternalLink,
  IndianRupee,
  Layers,
  Code2,
  Video,
  Palette,
  Bot,
  MessageCircle,
  Clock,
  Globe,
  Mail
} from 'lucide-react';
import { CAREER_ROLES, CareerRole, AGENCY_EMAIL, AGENCY_WHATSAPP } from '../data/agencyData';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoleCategory?: string;
}

export const CareersModal: React.FC<CareersModalProps> = ({
  isOpen,
  onClose,
  initialRoleCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialRoleCategory || 'all');
  const [activeTab, setActiveTab] = useState<'positions' | 'apply'>('positions');
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<string>('Freelance Graphic Designer');

  // Application form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Freelance Graphic Designer']);
  const [experienceLevel, setExperienceLevel] = useState('2-4 years');
  const [aboutYou, setAboutYou] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Openings', icon: Layers },
    { id: 'Graphic Design', label: 'Graphic Design', icon: Palette },
    { id: 'Video Editing', label: 'Video Editing', icon: Video },
    { id: 'Website Development', label: 'Web Development', icon: Code2 },
    { id: 'AI Agent & Automation', label: 'AI Agent & Automation', icon: Bot }
  ];

  const filteredRoles = selectedCategory === 'all'
    ? CAREER_ROLES
    : CAREER_ROLES.filter((r) => r.category === selectedCategory);

  const handleApplyClick = (role: CareerRole) => {
    setSelectedRoleForApply(role.title);
    if (!selectedRoles.includes(role.title)) {
      setSelectedRoles([...selectedRoles, role.title]);
    }
    setActiveTab('apply');
  };

  const toggleRoleSelection = (roleTitle: string) => {
    if (selectedRoles.includes(roleTitle)) {
      if (selectedRoles.length > 1) {
        setSelectedRoles(selectedRoles.filter((r) => r !== roleTitle));
      }
    } else {
      setSelectedRoles([...selectedRoles, roleTitle]);
    }
  };

  const handleEmailApplication = () => {
    const subject = encodeURIComponent(`[Freelance Application] ${selectedRoles.join(', ')} - ${fullName || 'New Applicant'}`);
    const body = encodeURIComponent(
      `FREELANCE APPLICATION - EDIT AURA\n\n` +
      `APPLICANT DETAILS:\n` +
      `• Full Name: ${fullName}\n` +
      `• Work / Contact Email: ${email}\n` +
      `• Phone / WhatsApp: ${phone}\n` +
      `• Experience Level: ${experienceLevel}\n` +
      `• Role(s) Applied: ${selectedRoles.join(', ')}\n` +
      `• Portfolio / Live Work Link: ${portfolioLink}\n` +
      `• Background & Tools: ${aboutYou || 'Ready to start immediately on client projects.'}\n\n` +
      `---\nDelivered to EDIT AURA Freelance Roster (${AGENCY_EMAIL})`
    );
    window.open(`mailto:${AGENCY_EMAIL}?subject=${subject}&body=${body}`, '_self');
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      handleEmailApplication();
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*FREELANCE APPLICATION - EDIT AURA*\n` +
      `*Name:* ${fullName || 'Freelancer'}\n` +
      `*Roles:* ${selectedRoles.join(', ')}\n` +
      `*Experience:* ${experienceLevel}\n` +
      `*Portfolio Link:* ${portfolioLink}\n` +
      `*Notes:* ${aboutYou || 'Ready to start immediately!'}`
    );
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Graphic Design':
        return <Palette className="w-4 h-4 text-pink-400" />;
      case 'Video Editing':
        return <Video className="w-4 h-4 text-cyan-400" />;
      case 'Website Development':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'AI Agent & Automation':
        return <Bot className="w-4 h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#09090c] border border-white/15 shadow-2xl shadow-purple-950/40 text-white overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#120e24] via-[#09090c] to-[#0c1420]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/15 text-purple-300 border border-purple-500/30">
              <Sparkles className="w-3 h-3 text-purple-400" />
              Freelance Talent Network
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Actively Hiring Freelancers & Contractors
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
            JOIN THE <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">EDIT AURA</span> CREATIVE ROSTER
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-2xl">
            We partner with exceptional freelance graphic designers, video editors, web developers, and AI automation specialists for continuous client projects and recurring retainers.
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'positions'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Open Freelance Roles ({CAREER_ROLES.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'apply'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Direct Application Form</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'positions' && (
            <>
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                        isActive
                          ? 'bg-white/15 text-white border-purple-400/60 shadow-sm'
                          : 'bg-white/5 text-zinc-400 hover:text-zinc-200 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Roles Cards Grid */}
              <div className="grid grid-cols-1 gap-6">
                {filteredRoles.map((role) => (
                  <div
                    key={role.id}
                    className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                            {getCategoryIcon(role.category)}
                          </span>
                          <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                            {role.category}
                          </span>
                          <span className="text-zinc-500">·</span>
                          <span className="text-xs font-mono text-zinc-400">{role.type}</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {role.badge}
                        </span>
                      </div>

                      {/* Title & Compensation */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                        {role.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>Comp: {role.compensation}</span>
                      </div>

                      <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                        {role.summary}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-zinc-400 italic">
                        {role.idealFor}
                      </span>
                      <button
                        onClick={() => handleApplyClick(role)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/25 active:scale-95 transition-all"
                      >
                        <span>Apply For This Role</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'apply' && (
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Application Received!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-lg mx-auto">
                    Thank you for applying to the EDIT AURA Creative & Tech Freelance Roster. Your application has been routed directly to <strong className="text-purple-300">{AGENCY_EMAIL}</strong>. Our creative leads review portfolios daily and will reach out within 48 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 text-left max-w-md mx-auto space-y-1">
                    <div>• <strong>Applicant:</strong> {fullName}</div>
                    <div>• <strong>Role(s):</strong> {selectedRoles.join(', ')}</div>
                    <div>• <strong>Destination Inbox:</strong> {AGENCY_EMAIL}</div>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleEmailApplication}
                      className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct via Email ({AGENCY_EMAIL})</span>
                    </button>
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Fast-Track Copy to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setActiveTab('positions');
                      }}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs font-mono transition-all cursor-pointer"
                    >
                      Browse Other Openings
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>
                      Apply as a freelance partner. We hire for ongoing client sprints, project-based retainers, and specialized deliverables.
                    </span>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                      Select Role(s) You Want To Apply For *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Freelance Graphic Designer',
                        'Freelance Video Editor & Motion Designer',
                        'Freelance Website Developer',
                        'Freelance AI Agent & Workflow Specialist'
                      ].map((roleTitle) => {
                        const isChecked = selectedRoles.includes(roleTitle);
                        return (
                          <button
                            key={roleTitle}
                            type="button"
                            onClick={() => toggleRoleSelection(roleTitle)}
                            className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border flex items-center justify-between ${
                              isChecked
                                ? 'bg-purple-600/20 border-purple-400 text-white shadow-sm'
                                : 'bg-white/5 border-white/10 text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            <span>{roleTitle}</span>
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center ${
                                isChecked ? 'bg-purple-500 border-purple-400' : 'border-zinc-600'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name, Email, Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                        Years of Experience
                      </label>
                      <select
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#141419] border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm"
                      >
                        <option value="1-2 years">1-2 years (Junior / Rising)</option>
                        <option value="2-4 years">2-4 years (Mid-Level)</option>
                        <option value="5+ years">5+ years (Senior / Specialist)</option>
                      </select>
                    </div>
                  </div>

                  {/* Portfolio Link */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                        Portfolio / Behance / GitHub / Drive Link *
                      </label>
                      <span className="text-[11px] text-purple-400 font-mono">Crucial for selection</span>
                    </div>
                    <input
                      type="url"
                      required
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="https://behance.net/yourprofile or https://github.com/yourhandle or Google Drive"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm font-mono"
                    />
                  </div>

                  {/* Intro / Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                      Brief Highlight / Best Work Summary
                    </label>
                    <textarea
                      rows={3}
                      value={aboutYou}
                      onChange={(e) => setAboutYou(e.target.value)}
                      placeholder="Mention your top tools (e.g. Figma, Premiere Pro, Next.js, n8n) and your proudest project result."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-purple-600/30 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Freelance Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="text-center text-[11px] font-mono text-zinc-400">
                      Applications are processed and delivered directly to <span className="text-purple-300 font-semibold">{AGENCY_EMAIL}</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#060608] flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              100% Remote / Async Friendly
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Fast 48-Hour Review
            </span>
          </div>
          <button
            onClick={handleSendViaWhatsApp}
            className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-mono font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Have questions? Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
