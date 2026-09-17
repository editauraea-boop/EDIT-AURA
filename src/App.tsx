import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustProof } from './components/TrustProof';
import { ServicesSection } from './components/ServicesSection';
import { WhyEditAura } from './components/WhyEditAura';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { AiAutomationSection } from './components/AiAutomationSection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CareersModal } from './components/CareersModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { ThankYouModal, BookingDetails } from './components/ThankYouModal';
import { NotFoundPage } from './components/NotFoundPage';
import { CookieBanner } from './components/CookieBanner';
import { StickyMobileCta } from './components/StickyMobileCta';
import { MessageCircle } from 'lucide-react';
import { AGENCY_WHATSAPP } from './data/agencyData';
import { initAnalytics, trackWhatsAppInitiation } from './utils/analytics';
import { updatePageMeta } from './utils/metaManager';

export function App() {
  // Page view mode: 'home' | '404'
  const [currentPage, setCurrentPage] = useState<'home' | '404'>('home');

  // Consultation state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedBlueprint, setSelectedBlueprint] = useState<{
    budget: number;
    industry: string;
    services: string[];
    projectedLeads: number;
  } | null>(null);

  // Thank You / Confirmation state
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Legal Modal (Privacy / Terms)
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');

  // Careers state
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [careersCategory, setCareersCategory] = useState<string | undefined>(undefined);

  // Initialize analytics and check URL routing on mount
  useEffect(() => {
    initAnalytics();

    const handleHashAndPath = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;

      if (hash === '#/404' || hash === '#404' || pathname === '/404') {
        setCurrentPage('404');
        updatePageMeta('notFound');
      } else if (hash === '#/privacy' || hash === '#privacy') {
        setLegalTab('privacy');
        setIsLegalOpen(true);
      } else if (hash === '#/terms' || hash === '#terms') {
        setLegalTab('terms');
        setIsLegalOpen(true);
      } else {
        setCurrentPage('home');
        updatePageMeta('home');
      }
    };

    handleHashAndPath();
    window.addEventListener('hashchange', handleHashAndPath);
    return () => window.removeEventListener('hashchange', handleHashAndPath);
  }, []);

  const handleOpenConsultation = () => {
    setSelectedService(undefined);
    setSelectedBlueprint(null);
    setIsConsultationOpen(true);
    updatePageMeta('consultation');
  };

  const handleOpenWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setSelectedBlueprint(null);
    setIsConsultationOpen(true);
    updatePageMeta('consultation');
  };

  const handleApplyBlueprint = (blueprint: {
    budget: number;
    industry: string;
    services: string[];
    projectedLeads: number;
  }) => {
    setSelectedBlueprint(blueprint);
    setSelectedService(undefined);
    setIsConsultationOpen(true);
    updatePageMeta('consultation');
  };

  const handleOpenCareers = (category?: string) => {
    setCareersCategory(category || 'all');
    setIsCareersOpen(true);
    updatePageMeta('careers');
  };

  const handleOpenPrivacy = () => {
    setLegalTab('privacy');
    setIsLegalOpen(true);
  };

  const handleOpenTerms = () => {
    setLegalTab('terms');
    setIsLegalOpen(true);
  };

  const handleSuccessfulBooking = (booking: BookingDetails) => {
    setConfirmedBooking(booking);
    setIsThankYouOpen(true);
    updatePageMeta('thankYou');
  };

  const handleFloatingWhatsApp = () => {
    trackWhatsAppInitiation('floating_button');
    const msg = encodeURIComponent("Hi EDIT AURA! I'm on your website and would love to discuss growing my brand.");
    window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const isAnyModalOpen = isConsultationOpen || isCareersOpen || isLegalOpen || isThankYouOpen;

  // Custom 404 Page View
  if (currentPage === '404') {
    return (
      <NotFoundPage
        onReturnHome={() => {
          window.location.hash = '';
          setCurrentPage('home');
          updatePageMeta('home');
        }}
        onOpenConsultation={() => {
          setCurrentPage('home');
          updatePageMeta('home');
          setTimeout(() => handleOpenConsultation(), 100);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] flex flex-col selection:bg-purple-600 selection:text-white font-sans relative">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenCareers={handleOpenCareers}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. Trust & Social Proof */}
        <TrustProof />

        {/* 4. Services 3x3 Grid (9 Core Disciplines) */}
        <ServicesSection onOpenConsultationWithService={handleOpenWithService} />

        {/* 5. Why EDIT AURA */}
        <WhyEditAura />

        {/* 6. Featured Work / Portfolio */}
        <PortfolioSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Process Timeline */}
        <ProcessSection />

        {/* 8. AI + Automation */}
        <AiAutomationSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. Interactive Growth & ROI Calculator */}
        <GrowthCalculator onApplyBlueprint={handleApplyBlueprint} />

        {/* 10. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. Final Dramatic CTA */}
        <FinalCta onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 13. Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenCareers={handleOpenCareers}
        onOpenPrivacyPolicy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
        onOpenNotFound={() => {
          window.location.hash = '#/404';
          setCurrentPage('404');
        }}
      />

      {/* Desktop Floating Instant WhatsApp Button */}
      <button
        onClick={handleFloatingWhatsApp}
        className="hidden md:flex fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-200 items-center justify-center group cursor-pointer"
        aria-label="Chat with EDIT AURA on WhatsApp"
        id="desktop-whatsapp-floating-btn"
      >
        <MessageCircle className="w-6 h-6 fill-black text-emerald-500" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 font-bold text-xs transition-all duration-300">
          Chat With Us
        </span>
      </button>

      {/* 11. Sticky Mobile CTA Bar */}
      <StickyMobileCta
        onOpenConsultation={handleOpenConsultation}
        isAnyModalOpen={isAnyModalOpen}
      />

      {/* 17. Cookie & GDPR Consent Banner */}
      <CookieBanner onOpenPrivacyPolicy={handleOpenPrivacy} />

      {/* Global Consultation & Project Proposal Modal (with Error & Loading states) */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          updatePageMeta('home');
        }}
        initialService={selectedService}
        initialBlueprint={selectedBlueprint}
        onSuccessSubmit={handleSuccessfulBooking}
        onOpenPrivacyPolicy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />

      {/* 14. Post-Submission Thank-You Modal */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => {
          setIsThankYouOpen(false);
          updatePageMeta('home');
        }}
        bookingDetails={confirmedBooking}
      />

      {/* 15 & 16. Legal Modal (Privacy Policy & Terms of Service) */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => {
          setIsLegalOpen(false);
          updatePageMeta('home');
        }}
        initialTab={legalTab}
      />

      {/* Freelancer Careers & Talent Roster Modal */}
      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => {
          setIsCareersOpen(false);
          updatePageMeta('home');
        }}
        initialRoleCategory={careersCategory}
      />
    </div>
  );
}

export default App;
