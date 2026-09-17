import React from 'react';
import { Logo } from './Logo';
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  MessageSquare,
  Shield,
  FileText,
  Compass
} from 'lucide-react';
import { AGENCY_EMAIL, AGENCY_WHATSAPP, AGENCY_PHONE_FORMATTED } from '../data/agencyData';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenCareers?: (category?: string) => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTerms?: () => void;
  onOpenNotFound?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenCareers,
  onOpenPrivacyPolicy,
  onOpenTerms,
  onOpenNotFound
}) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi EDIT AURA! I want to discuss a new marketing & branding project.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#050505] text-[#a1a1aa] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Wordmark, Mission & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block" aria-label="EDIT AURA Home">
              <Logo
                variant="full"
                size="md"
                showGlow
                rowClassName="text-[19px]"
                editClassName="text-[16px]"
                auraBoxClassName="pl-[5px] pr-[5px] pt-[1px]"
                auraTextClassName="text-[16px]"
                taglineClassName="text-[8px]"
              />
            </a>

            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">
              Creative minds. Digital systems. Business growth. We help ambitious businesses build memorable brand auras, generate attention, and automate predictable scale.
            </p>

            <div className="space-y-2 text-xs text-[#a1a1aa] font-mono pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#a855f7]" />
                <span>Pune, India · Global Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#a855f7]" />
                <a href={`mailto:${AGENCY_EMAIL}`} className="hover:text-white transition-colors">
                  {AGENCY_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#8b5cf6] hover:text-white border border-white/10 flex items-center justify-center transition-all text-zinc-300 backdrop-blur-md shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#8b5cf6] hover:text-white border border-white/10 flex items-center justify-center transition-all text-zinc-300 backdrop-blur-md shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#8b5cf6] hover:text-white border border-white/10 flex items-center justify-center transition-all text-zinc-300 backdrop-blur-md shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#8b5cf6] hover:text-white border border-white/10 flex items-center justify-center transition-all text-zinc-300 backdrop-blur-md shadow-sm"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Agency (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#c084fc] transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#c084fc] transition-colors">Featured Work</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#c084fc] transition-colors">Why EDIT AURA</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c084fc] transition-colors">Process & Roadmap</a>
              </li>
              <li>
                <a href="#automation" className="hover:text-[#c084fc] transition-colors">AI & Automations</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#c084fc] transition-colors">ROI Calculator</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c084fc] transition-colors">FAQs</a>
              </li>
              {onOpenCareers && (
                <li>
                  <button
                    onClick={() => onOpenCareers()}
                    className="hover:text-[#c084fc] transition-colors inline-flex items-center gap-1.5 text-purple-300 font-semibold"
                  >
                    <span>Careers / Freelancers</span>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Hiring
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Core Disciplines (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Disciplines
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <span className="hover:text-zinc-200 transition-colors">Social Media Management</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Content Creation & Short-Form</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Branding & Creative Design</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">AI Marketing Systems</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">High-Converting Web Dev</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Search Engine Optimization (SEO)</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Meta & Google Performance Ads</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">WhatsApp Cloud Automation</span>
              </li>
              <li>
                <span className="hover:text-zinc-200 transition-colors">Online Book Publishing (Amazon KDP)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} EDIT AURA. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenPrivacyPolicy}
              className="hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-purple-400" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={onOpenTerms}
              className="hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Terms of Service</span>
            </button>

            {onOpenNotFound && (
              <button
                onClick={onOpenNotFound}
                className="hover:text-zinc-400 text-zinc-600 transition-colors flex items-center gap-1 text-[11px] font-mono cursor-pointer"
                title="Preview 404 Not Found Page"
              >
                <Compass className="w-3 h-3" />
                <span>404 Page</span>
              </button>
            )}

            <button
              onClick={handleWhatsApp}
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Channel</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
