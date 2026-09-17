import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { AGENCY_WHATSAPP } from '../data/agencyData';
import {
  MessageCircle,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  MoreHorizontal,
  Briefcase,
  Palette,
  Video,
  Code2,
  Bot,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenCareers: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenCareers }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dotsMenuOpen, setDotsMenuOpen] = useState(false);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close 3-dots menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dotsRef.current && !dotsRef.current.contains(e.target as Node)) {
        setDotsMenuOpen(false);
      }
    };
    if (dotsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dotsMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Automation', href: '#automation' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hi EDIT AURA! I'm interested in growing my brand and automating my business. Let's talk.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleRoleClickFromMenu = (category?: string) => {
    setDotsMenuOpen(false);
    setMobileMenuOpen(false);
    onOpenCareers(category);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
            aria-label="EDIT AURA Home"
          >
            <Logo variant="mark" size="md" showGlow taglineClassName="text-[7px]" />
          </a>

          {/* Zone 2: Navigation Links + 3 Dots More Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-white transition-colors relative py-1 group focus:outline-none focus-visible:text-purple-400"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* 3 Dots Menu Trigger for Careers & Freelancers */}
            <div className="relative" ref={dotsRef}>
              <button
                onClick={() => setDotsMenuOpen(!dotsMenuOpen)}
                className={`relative p-2 rounded-full border transition-all flex items-center justify-center ${
                  dotsMenuOpen
                    ? 'bg-purple-600/30 text-white border-purple-400/80 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 text-zinc-300 hover:text-white border-white/10 hover:border-white/25 hover:bg-white/10'
                }`}
                title="Careers & More"
                aria-label="Careers and additional links menu"
                aria-expanded={dotsMenuOpen}
              >
                <MoreHorizontal className="w-4 h-4" />
                {/* Active hiring pulsing indicator */}
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse border border-black" />
              </button>

              {/* 3 Dots Floating Dropdown */}
              {dotsMenuOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 rounded-2xl bg-[#09090d]/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-purple-950/50 text-white p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2.5 pb-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        Careers & Freelancers
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      We're Hiring
                    </span>
                  </div>

                  <div className="py-2 space-y-1">
                    {[
                      {
                        title: 'Graphic Design',
                        desc: 'Carousels, Ads & Brand Identity',
                        icon: Palette,
                        color: 'text-pink-400',
                        category: 'Graphic Design',
                        badge: '3 Openings'
                      },
                      {
                        title: 'Video Editing',
                        desc: 'Short-form Reels & Motion SFX',
                        icon: Video,
                        color: 'text-cyan-400',
                        category: 'Video Editing',
                        badge: '4 Openings'
                      },
                      {
                        title: 'Website Development',
                        desc: 'React, Next.js & Webflow Landing Pages',
                        icon: Code2,
                        color: 'text-emerald-400',
                        category: 'Website Development',
                        badge: '2 Openings'
                      },
                      {
                        title: 'AI Agent & Automation',
                        desc: 'n8n, Make, LLMs & WhatsApp Bots',
                        icon: Bot,
                        color: 'text-purple-400',
                        category: 'AI Agent & Automation',
                        badge: 'Urgent'
                      }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.title}
                          onClick={() => handleRoleClickFromMenu(item.category)}
                          className="w-full p-2.5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between text-left group"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                                <span>{item.title}</span>
                              </div>
                              <div className="text-[11px] text-zinc-400 truncate max-w-[150px]">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300 group-hover:border-purple-400/40">
                            {item.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <button
                      onClick={() => handleRoleClickFromMenu('all')}
                      className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/30 transition-all"
                    >
                      <span>View All Roles & Apply</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-400 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#8b5cf6] hover:bg-[#7c3aed] shadow-lg shadow-purple-500/25 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-zinc-300 hover:text-white bg-white/5 border border-white/10 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070709]/95 backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <Logo variant="full" size="md" taglineClassName="text-[7px]" />
              <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Digital Growth Agency
              </span>
            </div>

            {/* Careers Banner inside mobile drawer */}
            <div
              onClick={() => handleRoleClickFromMenu('all')}
              className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                    <span>Freelancers Wanted</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Design · Video · Web · AI Agents
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-base font-semibold text-zinc-200 hover:bg-white/5 hover:text-purple-300 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-center flex items-center justify-center gap-2 shadow-xl shadow-purple-900/30"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Book Free Growth Consultation</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
