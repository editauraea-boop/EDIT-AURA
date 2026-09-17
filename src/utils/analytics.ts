/**
 * EDIT AURA Analytics & Conversion Tracking Service
 * Supports Google Analytics (gtag.js), Meta Pixel events, and custom telemetry
 * Strictly respects user cookie consent
 */

type EventCategory = 'conversion' | 'engagement' | 'navigation' | 'calculator' | 'career';

interface AnalyticsEventProps {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

// Check if user has consented to analytics cookies
export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const saved = localStorage.getItem('editaura_cookie_consent');
    if (!saved) return false;
    const consent = JSON.parse(saved);
    return consent.analytics === true;
  } catch {
    return false;
  }
};

/**
 * Initialize Google Analytics dynamically when consent is granted
 */
export const initAnalytics = (measurementId = 'G-EDITAURA001') => {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) return;

  // Prevent duplicate script injection
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
};

/**
 * Track custom user actions & conversion events
 */
export const trackEvent = ({ action, category, label, value, metadata }: AnalyticsEventProps) => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event_category: category,
    event_label: label,
    value: value,
    ...metadata,
    timestamp: new Date().toISOString()
  };

  // 1. Google Analytics gtag if initialized
  if (typeof (window as any).gtag === 'function' && hasAnalyticsConsent()) {
    (window as any).gtag('event', action, eventPayload);
  }

  // 2. Fallback console logger for development / audit preview
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event] ${category.toUpperCase()} :: ${action}`, eventPayload);
  }
};

/**
 * Convenient shorthand trackers for high-leverage business actions
 */
export const trackCtaClick = (ctaName: string, location: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'conversion',
    label: ctaName,
    metadata: { location }
  });
};

export const trackConsultationSubmission = (service?: string, budget?: number) => {
  trackEvent({
    action: 'consultation_form_submit',
    category: 'conversion',
    label: service || 'General Consultation',
    value: budget || 10000,
    metadata: { budget, service }
  });
};

export const trackCalculatorRun = (industry: string, budget: number, projectedLeads: number) => {
  trackEvent({
    action: 'roi_calculator_run',
    category: 'calculator',
    label: industry,
    value: budget,
    metadata: { projectedLeads }
  });
};

export const trackWhatsAppInitiation = (source: string) => {
  trackEvent({
    action: 'whatsapp_chat_click',
    category: 'conversion',
    label: source
  });
};
