import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Lock, CheckCircle2, Mail, MapPin, Building, Scale, ArrowUpRight } from 'lucide-react';
import { AGENCY_EMAIL } from '../data/agencyData';
import { updatePageMeta } from '../utils/metaManager';

export type LegalTab = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      updatePageMeta(
        initialTab === 'privacy' ? 'privacy' : 'terms'
      );
      document.body.style.overflow = 'hidden';
    } else {
      updatePageMeta('home');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  useEffect(() => {
    if (isOpen) {
      updatePageMeta(activeTab === 'privacy' ? 'privacy' : 'terms');
    }
  }, [activeTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#09090b] border border-white/15 rounded-3xl shadow-2xl shadow-purple-950/40 flex flex-col z-10 overflow-hidden text-zinc-100">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-white/[0.02] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
              {activeTab === 'privacy' ? <Shield className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                {activeTab === 'privacy' ? 'Privacy Policy & Data Security' : 'Terms & Conditions of Service'}
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                EDIT AURA · Updated August 2026 · Official Legal Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="px-6 sm:px-8 py-3 bg-black/40 border-b border-white/10 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/25'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/25'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-zinc-300 font-sans">
          
          {activeTab === 'privacy' ? (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 space-y-1">
                <span className="font-bold text-white font-mono uppercase tracking-wider text-[11px] text-purple-300">
                  Compliance Summary
                </span>
                <p>
                  EDIT AURA (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates in full compliance with the Information Technology Act 2000, the Digital Personal Data Protection (DPDP) Act 2023 of India, and global GDPR / CCPA privacy frameworks. We respect your confidentiality and ensure complete transparency regarding your business data.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">01.</span>
                  Information We Collect
                </h3>
                <p>
                  We collect information strictly necessary to provide high-leverage growth, branding, advertising, and automation services:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400 text-xs sm:text-sm">
                  <li><strong className="text-zinc-200">Direct Inquiries & Contact Info:</strong> Full Name, Business Email ({AGENCY_EMAIL}), Phone / WhatsApp Number, Company Name, Industry, and approximate monthly marketing budget.</li>
                  <li><strong className="text-zinc-200">Project Blueprint Inputs:</strong> Campaign goals, target audience specifications, brand assets, and creative guidelines submitted via our Growth Calculator or Consultation Modals.</li>
                  <li><strong className="text-zinc-200">Freelancer & Career Submissions:</strong> Portfolio links, resumes, GitHub/Behance profiles, and rate expectations submitted via our Talent Roster.</li>
                  <li><strong className="text-zinc-200">Technical Analytics & Cookies:</strong> Aggregated anonymous page interaction metrics, referral sources, and device diagnostics to optimize load speeds.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">02.</span>
                  How We Use Your Information
                </h3>
                <p>
                  Your information is utilized solely to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400 text-xs sm:text-sm">
                  <li>Synthesize customized 90-Day Growth Roadmaps and ROI blueprints tailored to your business model.</li>
                  <li>Coordinate scheduled discovery sessions via Google Meet, Zoom, or WhatsApp.</li>
                  <li>Execute media buying campaigns, social media management, creative design, and WhatsApp Cloud API automations under authorized agreements.</li>
                  <li>Process monthly retainer invoicing and deliver transparent weekly performance analytics.</li>
                </ul>
                <p className="text-xs text-purple-300 font-medium">
                  We NEVER sell, rent, or trade your personal or corporate data to third-party data brokers.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">03.</span>
                  Data Storage, Security & Retention
                </h3>
                <p>
                  All project data and confidential brand assets are stored in encrypted cloud environments with industry-standard TLS 1.3 encryption in transit and AES-256 at rest. Access is strictly role-based and protected with multi-factor authentication. We retain prospective client records for 12 months after inactivity or until an explicit deletion request is received.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">04.</span>
                  Your Legal Rights
                </h3>
                <p>
                  Under applicable data protection laws, you possess the right to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400 text-xs sm:text-sm">
                  <li>Request a copy of all personal data held by EDIT AURA.</li>
                  <li>Request rectification of inaccurate or outdated contact information.</li>
                  <li>Request complete erasure (&ldquo;Right to be Forgotten&rdquo;) of your data from our active CRM pipelines.</li>
                  <li>Withdraw consent for analytics or marketing cookies at any time via the Cookie Banner.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Data Protection Officer Contact</span>
                </h4>
                <p className="text-xs text-zinc-300">
                  For privacy inquiries, GDPR data requests, or formal deletion notices, contact our grievance officer directly at:
                </p>
                <div className="font-mono text-xs text-purple-300">
                  Email: <a href={`mailto:${AGENCY_EMAIL}`} className="underline">{AGENCY_EMAIL}</a><br />
                  Location: Pune, Maharashtra, India · Pin 411045
                </div>
              </section>

            </div>
          ) : (
            /* TERMS & CONDITIONS CONTENT */
            <div className="space-y-6">

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 space-y-1">
                <span className="font-bold text-white font-mono uppercase tracking-wider text-[11px] text-purple-300">
                  Service Terms Overview
                </span>
                <p>
                  These Terms of Service govern your engagement with EDIT AURA (&ldquo;Agency&rdquo;). By accessing our website, booking a growth consultation, or approving a statement of work (SOW), you agree to be bound by these terms.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">01.</span>
                  Scope of Agency Services
                </h3>
                <p>
                  EDIT AURA delivers specialized digital services across 9 core disciplines including Social Media Management, Content Creation (Short-Form & Carousels), Branding & Visual Identity, AI Marketing Workflows, Custom Web Development, SEO, Meta & Google Performance Ads, WhatsApp Business Automations, and Online Book Publishing. Specific deliverables, sprint schedules, and milestone timelines are detailed in each client&rsquo;s mutual Statement of Work.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">02.</span>
                  Retainers, Pricing & Payment Terms
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400 text-xs sm:text-sm">
                  <li><strong className="text-zinc-200">Minimum Retainer:</strong> Our dedicated monthly media and growth management retainers start from a baseline of ₹10,000/month (Rs. 10,000).</li>
                  <li><strong className="text-zinc-200">Invoicing Schedule:</strong> Retainers are billed on a 30-day advance cycle. Custom web development and branding projects require a 50% initial commitment deposit prior to sprint commencement.</li>
                  <li><strong className="text-zinc-200">Ad Spend:</strong> Advertising spend on Meta (Instagram/Facebook) and Google Ads is billed directly to the Client&rsquo;s verified payment method within their respective ad accounts.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">03.</span>
                  Intellectual Property & Asset Ownership
                </h3>
                <p>
                  Upon settlement of all due invoices:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400 text-xs sm:text-sm">
                  <li>The Client retains 100% full ownership of all custom deliverables created during the retainer (approved logo vectors, brand guidebooks, finalized video files, graphics, website source code, and ad copy).</li>
                  <li>EDIT AURA reserves the standard right to showcase non-confidential deliverables and verified growth metrics within our portfolio, case studies, and marketing collateral.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">04.</span>
                  Client Responsibilities & SLA
                </h3>
                <p>
                  To maintain rapid sprint execution, the Client agrees to provide necessary brand assets, ad account access, and feedback on creative proofs within 2-3 business days. EDIT AURA maintains an SLA response time under 2 business hours during working hours (Monday – Saturday: 9:30 AM – 7:30 PM IST).
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                  <span className="text-purple-400 font-mono text-xs">05.</span>
                  Governing Law & Jurisdiction
                </h3>
                <p>
                  These Terms are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes or claims arising out of agency engagements shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-white">Pune, Maharashtra, India</strong>.
                </p>
              </section>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-black/50 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Transparent · No Hidden Clauses</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/15"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
