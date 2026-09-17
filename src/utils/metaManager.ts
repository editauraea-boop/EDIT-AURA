/**
 * Dynamic Meta Title & Description Manager for EDIT AURA
 * Ensures SEO compliance across sections, modals, and views
 */

export interface PageMetaConfig {
  title: string;
  description: string;
}

export const ROUTE_METAS: Record<string, PageMetaConfig> = {
  home: {
    title: 'EDIT AURA | Next-Gen Digital Marketing, Branding & AI Growth Agency',
    description: 'EDIT AURA is a premium digital growth company helping ambitious businesses build powerful brands, create high-converting content, and automate scale.'
  },
  services: {
    title: 'Core Disciplines & Services | EDIT AURA Growth Agency',
    description: 'Explore our 9 specialized services: Social Media, Content Creation, Branding, AI Marketing, Website Development, SEO, Ads & WhatsApp Automations.'
  },
  portfolio: {
    title: 'Featured Work & Case Studies | EDIT AURA',
    description: 'Real performance case studies: verified 4.8x Meta ROAS, +320% inbound pipelines, and thumb-stopping viral short-form campaigns.'
  },
  calculator: {
    title: 'Growth & ROI Blueprint Calculator | EDIT AURA',
    description: 'Calculate your projected brand reach, high-intent leads, and estimated revenue impact with our interactive agency blueprint simulator.'
  },
  automation: {
    title: 'AI Marketing & WhatsApp Automations | EDIT AURA',
    description: 'Eliminate manual busywork. Deploy autonomous AI lead qualification agents, WhatsApp Cloud API bots, and 24/7 client booking pipelines.'
  },
  process: {
    title: '6-Step Growth Framework & Roadmap | EDIT AURA',
    description: 'From deep discovery and asset creation to automated deployment and scientific scaling. Discover our proven agency methodology.'
  },
  careers: {
    title: 'Careers & Freelance Talent Network | EDIT AURA',
    description: 'Join our elite creator roster: immediate hiring for Graphic Designers, Video Editors, Web Developers, and AI Automation specialists.'
  },
  privacy: {
    title: 'Privacy Policy & Data Protection | EDIT AURA',
    description: 'Our commitment to your privacy, GDPR compliance, and Indian DPDP Act 2023 data security standards.'
  },
  terms: {
    title: 'Terms of Service & Engagement | EDIT AURA',
    description: 'Clear, transparent agency terms of service, intellectual property guidelines, and client service level agreements.'
  },
  notFound: {
    title: '404 - Page Not Found | EDIT AURA',
    description: 'The requested page or resource could not be found. Return to EDIT AURA headquarters to explore services and case studies.'
  }
};

/**
 * Updates document.title and the meta description tag dynamically
 */
export const updatePageMeta = (key: keyof typeof ROUTE_METAS | string, customTitle?: string, customDesc?: string) => {
  if (typeof document === 'undefined') return;

  const meta = ROUTE_METAS[key] || {
    title: customTitle || ROUTE_METAS.home.title,
    description: customDesc || ROUTE_METAS.home.description
  };

  const finalTitle = customTitle || meta.title;
  const finalDesc = customDesc || meta.description;

  document.title = finalTitle;

  // Update standard meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', finalDesc);

  // Update Open Graph tags dynamically
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', finalTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', finalDesc);
};
