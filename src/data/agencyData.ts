export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'creative' | 'growth' | 'automation';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  impactMetric: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'social' | 'branding' | 'performance' | 'websites' | 'content' | 'automation';
  image: string;
  heroImage: string;
  tagline: string;
  services: string[];
  results: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metric: string;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CareerRole {
  id: string;
  title: string;
  type: 'Freelance / Contract' | 'Project-Based Gig' | 'Ongoing Retainer';
  category: 'Graphic Design' | 'Video Editing' | 'Website Development' | 'AI Agent & Automation';
  compensation: string;
  summary: string;
  badge: string;
  requirements: string[];
  responsibilities: string[];
  toolsAndStack: string[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Management',
    category: 'creative',
    shortDesc: 'Strategy, content planning, posting, community management and scalable channel growth.',
    fullDesc: 'We take complete ownership of your brand presence across Instagram, LinkedIn, YouTube, and X. From aesthetic grid planning and viral hooks to community engagement, we build an audience that cares.',
    deliverables: [
      'Monthly strategic content calendars',
      'Community engagement & DM nurturing',
      'Profile optimization & aesthetic revamp',
      'Weekly performance analytics & trend adaptation',
      'Influencer outreach & collaborative co-marketing'
    ],
    tools: ['Canva', 'Metricool', 'Notion', 'CapCut Pro', 'Meta Business Suite'],
    impactMetric: '+280% avg. engagement rate',
    iconName: 'Share2'
  },
  {
    id: 'content-creation',
    number: '02',
    title: 'Content Creation',
    category: 'creative',
    shortDesc: 'High-retention Reels, short-form videos, carousels, ad creatives, photography direction and storytelling.',
    fullDesc: 'In a world of infinite scroll, our content is engineered to stop thumbs in under 1.5 seconds. We craft cinematic short-form video, value-dense carousels, and thumb-stopping visual assets.',
    deliverables: [
      'Viral short-form Reels / TikToks / Shorts',
      'Educational & authority carousels',
      'High-converting static & motion ad creatives',
      'Brand photography moodboards & shoot direction',
      'Copywriting engineered for emotional resonance'
    ],
    tools: ['Premiere Pro', 'After Effects', 'Figma', 'Midjourney', 'DaVinci Resolve'],
    impactMetric: '1.2M+ monthly video views generated',
    iconName: 'Film'
  },
  {
    id: 'branding',
    number: '03',
    title: 'Branding & Creative Design',
    category: 'creative',
    shortDesc: 'Visual identity, design systems, creative direction and magnetic brand positioning.',
    fullDesc: 'We forge distinct brand identities that establish instant authority and command premium pricing. From typography and custom iconography to comprehensive brand guidelines, we make your brand unforgettable.',
    deliverables: [
      'Core brand strategy & positioning statement',
      'Primary, secondary & badge logo systems',
      'Custom color palettes & typographic hierarchy',
      'Comprehensive Brand Guideline Book (40+ pages)',
      'Digital & print collateral (decks, stationery, packaging)'
    ],
    tools: ['Illustrator', 'Figma', 'Photoshop', 'FontBase', 'Blender 3D'],
    impactMetric: '100% bespoke design systems',
    iconName: 'Palette'
  },
  {
    id: 'ai-marketing',
    number: '04',
    title: 'AI Marketing',
    category: 'automation',
    shortDesc: 'AI-powered content workflows, predictive marketing automation and intelligent business systems.',
    fullDesc: 'Leverage generative AI models, automated research loops, and dynamic personalization to 10x your marketing output without losing creative soul or brand tone.',
    deliverables: [
      'Custom-trained brand voice AI prompt suites',
      'Automated competitor monitoring & trend spotting',
      'Dynamic multi-variant ad copy generation',
      'AI image & visual asset generation workflows',
      'Predictive customer churn & lead scoring'
    ],
    tools: ['Gemini 2.5 Flash', 'Claude 3.7', 'Make.com', 'Zapier', 'OpenAI'],
    impactMetric: '15+ hours saved weekly per team',
    iconName: 'Sparkles'
  },
  {
    id: 'website-development',
    number: '05',
    title: 'Website Development',
    category: 'growth',
    shortDesc: 'Modern, blazing-fast, responsive and high-converting websites crafted for growth.',
    fullDesc: 'Your website is your 24/7 top-tier salesperson. We build ultra-sleek, interactive, mobile-first web experiences with seamless animations and friction-free conversion paths.',
    deliverables: [
      'Custom React / Next.js / Webflow development',
      'Conversion-optimized UX/UI architecture',
      'Sub-second page load times (<95+ Lighthouse)',
      'CMS integration for effortless internal editing',
      'Complete tracking setup (Meta Pixel, GA4, GTM)'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    impactMetric: '3.4x average conversion lift',
    iconName: 'Globe'
  },
  {
    id: 'seo-services',
    number: '06',
    title: 'Search Engine Optimization (SEO)',
    category: 'growth',
    shortDesc: 'Technical SEO, high-intent keyword ranking, on-page optimization and authoritative backlink strategies.',
    fullDesc: 'Dominate Google search rankings and capture sustainable organic traffic that converts into paying customers. We execute comprehensive technical audits, programmatic keyword architecture, semantic on-page SEO, and premium digital PR authority outreach.',
    deliverables: [
      'Deep technical SEO audit & Core Web Vitals speed optimization',
      'High-intent commercial keyword research & search intent mapping',
      'On-page content optimization & semantic schema markup architecture',
      'Local SEO, Google Business Profile & map pack domination',
      'White-hat authority link building & transparent monthly organic reporting'
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'Surfer SEO'],
    impactMetric: '+340% avg. organic traffic growth',
    iconName: 'Search'
  },
  {
    id: 'performance-marketing',
    number: '07',
    title: 'Performance Marketing',
    category: 'growth',
    shortDesc: 'Meta Ads, Google Ads, campaign strategy, rigorous A/B testing and ROAS optimization.',
    fullDesc: 'We turn paid ad spend into predictable revenue. Through creative-led media buying, granular audience segmentation, and scientific testing, we scale your customer acquisition profitably.',
    deliverables: [
      'Meta (Instagram & Facebook) ad campaign management',
      'Google Search, Display & Performance Max ads',
      'Rapid creative iteration & weekly hook testing',
      'Custom attribution modeling & conversion APIs',
      'Transparent real-time client performance dashboard'
    ],
    tools: ['Meta Ads Manager', 'Google Ads', 'TripleWhale', 'Looker Studio', 'AppsFlyer'],
    impactMetric: '4.2x average verified ROAS',
    iconName: 'TrendingUp'
  },
  {
    id: 'whatsapp-automation',
    number: '08',
    title: 'WhatsApp Automation',
    category: 'automation',
    shortDesc: 'Automated customer journeys, instant lead qualification and automated communication systems.',
    fullDesc: 'Engage leads on their favorite channel with >90% open rates. We build intelligent WhatsApp bot funnels that qualify prospects, send interactive catalogs, book calls, and recover abandoned carts automatically.',
    deliverables: [
      'Official WhatsApp Business API setup & green tick assistance',
      'Instant lead greeting & qualification chatbots',
      'Broadcast campaign setup with rich interactive CTAs',
      'Automated appointment reminders & follow-up sequences',
      'Payment link generation & instant checkout triggers'
    ],
    tools: ['WhatsApp Cloud API', 'Wati', 'Interakt', 'AiSensy', 'Make.com'],
    impactMetric: '<30s average response time',
    iconName: 'MessageSquare'
  },
  {
    id: 'book-publishing',
    number: '09',
    title: 'Online Book Publishing',
    category: 'growth',
    shortDesc: 'End-to-end publishing, formatting, and distribution across Amazon Kindle (KDP) and Amazon Marketplace.',
    fullDesc: 'Turn your manuscript or knowledge into a published global authority asset. We manage the entire publishing pipeline: professional interior eBook/print formatting, custom 3D cover design, ISBN registration, Amazon KDP metadata & category optimization, A+ Content, and Amazon Marketplace launch campaigns.',
    deliverables: [
      'Amazon Kindle Direct Publishing (KDP) & Amazon Marketplace setup',
      'Professional eBook (EPUB/KPF) & Print-Ready (PDF) layout formatting',
      'High-converting 3D book cover design & 3D promotional mockups',
      'Amazon SEO keyword research, category ranking & A+ Content design',
      'Amazon Ads (AMS) launch strategy & author central profile branding'
    ],
    tools: ['Amazon KDP', 'Amazon Marketplace', 'Kindle Create', 'Adobe InDesign', 'Photoshop'],
    impactMetric: '100% author royalties & global reach',
    iconName: 'BookOpen'
  }
];

export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: 'lumina-luxury',
    title: 'Lumina Studio — Rebranding & 3.8x DTC Scale',
    client: 'Lumina Studio',
    industry: 'Luxury Fashion & Lifestyle',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
    tagline: 'Transforming a boutique apparel label into an aspirational cult brand with viral visual storytelling.',
    services: ['Branding & Design System', 'Content Creation (Short-form)', 'Meta Performance Ads', 'Custom Shopify Web'],
    results: [
      { metric: '380%', label: 'Revenue Growth YoY' },
      { metric: '4.6x', label: 'Average ROAS' },
      { metric: '2.4M', label: 'Total Content Reach' }
    ],
    challenge: 'Lumina had a stunning product line but struggled with low visual brand perception, high ad acquisition costs, and inconsistent social media posting.',
    solution: 'We executed a full brand identity overhaul with editorial video lookbooks, launched high-converting TikTok & Instagram Reels hooks, and deployed hyper-targeted Meta ad campaigns.',
    testimonial: {
      quote: 'EDIT AURA completely revolutionized how the market perceives our brand. Our customer acquisition cost dropped by 45% while sales doubled in 90 days.',
      author: 'Elena Vance',
      role: 'Creative Director & Founder'
    }
  },
  {
    id: 'finscale-ai',
    title: 'FinScale AI — High-Ticket B2B Lead Engine',
    client: 'FinScale Technologies',
    industry: 'FinTech & B2B SaaS',
    category: 'automation',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    tagline: 'Automated 12,000+ inbound prospect evaluations with instant WhatsApp AI and CRM pipeline.',
    services: ['AI Marketing', 'WhatsApp Automation', 'CRM Integration', 'Conversion Web Design'],
    results: [
      { metric: '12.4k', label: 'Qualified Inbound Leads' },
      { metric: '< 20s', label: 'Avg Lead Response Time' },
      { metric: '68%', label: 'Consultation Booking Rate' }
    ],
    challenge: 'High-intent B2B enterprise leads were waiting up to 14 hours for SDR callbacks, causing a 40% drop-off in demo bookings.',
    solution: 'We integrated an intelligent WhatsApp conversational funnel connected directly to HubSpot CRM that instantly qualifies prospects and schedules demos 24/7.',
    testimonial: {
      quote: 'The automation EDIT AURA implemented turned our leaking sales funnel into an automated appointment-setting powerhouse.',
      author: 'Rohit Kulkarni',
      role: 'VP of Growth'
    }
  },
  {
    id: 'kaviar-dining',
    title: 'Aura Social — Viral Dining Experience',
    client: 'Kaviar Culinary Lounge',
    industry: 'Hospitality & Fine Dining',
    category: 'social',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80',
    tagline: 'Driving 100% weekend table reservations through cinematic food cinematography and micro-creator campaigns.',
    services: ['Social Media Management', 'Food & Cocktail Cinematography', 'Influencer Management', 'WhatsApp Table Booking'],
    results: [
      { metric: '4.8M+', label: 'Organic Video Views' },
      { metric: '+18k', label: 'Instagram Followers in 60 Days' },
      { metric: '100%', label: 'Weekend Table Occupancy' }
    ],
    challenge: 'New high-end culinary lounge opened with low footfall during weekdays and limited local awareness in a competitive metro market.',
    solution: 'Engineered high-aesthetic sensory Reels showcasing signature dishes and mixology, combined with a 1-tap WhatsApp reservation bot that confirmed bookings in 3 clicks.',
    testimonial: {
      quote: 'We went from empty tables on Tuesdays to fully booked weeks in advance. EDIT AURA knows exactly what makes content go viral.',
      author: 'Aditya Mehta',
      role: 'Managing Partner'
    }
  },
  {
    id: 'nexus-realestate',
    title: 'Nexus Prime — Luxury Realty Lead Generation',
    client: 'Nexus Developments',
    industry: 'Real Estate & Property',
    category: 'performance',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
    tagline: 'Generating $14M in luxury apartment sales through precision Meta & Google ads with automated brochure delivery.',
    services: ['Performance Marketing', 'Lead Scoring Funnels', 'WhatsApp Brochure Automation', 'Landing Page Optimization'],
    results: [
      { metric: '$14.2M', label: 'Property Sales Generated' },
      { metric: '3.9x', label: 'Ad Spend Return' },
      { metric: '1,420+', label: 'High-Net-Worth Inquiries' }
    ],
    challenge: 'High cost-per-lead and unqualified inquiries cluttering the real estate sales team with dead-end phone calls.',
    solution: 'Designed an interactive property matching landing page with instant WhatsApp walkthrough videos and dynamic pre-qualification filters.',
    testimonial: {
      quote: 'The quality of leads from EDIT AURA was unmatched. Our sales reps were speaking exclusively to verified buyers.',
      author: 'Vikram Shinde',
      role: 'Head of Sales & Marketing'
    }
  },
  {
    id: 'zenith-wellness',
    title: 'Zenith Organic — D2C Brand Launch & Content',
    client: 'Zenith Wellness',
    industry: 'Health, Wellness & D2C',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512290900672-1f023052c11d?auto=format&fit=crop&w=1400&q=80',
    tagline: 'Building an engaged community of 50k+ wellness enthusiasts through authentic educational reels and founder storytelling.',
    services: ['Content Creation & Video Production', 'Social Media Strategy', 'D2C eCommerce Website', 'Email & WhatsApp Retention'],
    results: [
      { metric: '52,000+', label: 'Organic Community Members' },
      { metric: '32%', label: 'Repeat Customer Rate' },
      { metric: '5.1x', label: 'Launch Month ROAS' }
    ],
    challenge: 'Crowded skincare/wellness market requiring strong founder trust, scientific backing, and clean aesthetics.',
    solution: 'Created 45+ pieces of educational content per month debunking skincare myths, showcasing clean lab processes, and building a loyalty retention loop.',
    testimonial: {
      quote: 'EDIT AURA did not just create posts; they gave our brand a soul and an authentic voice that customers trust completely.',
      author: 'Pooja Deshmukh',
      role: 'Co-Founder & Formulator'
    }
  },
  {
    id: 'strata-tech',
    title: 'Strata Cloud — Enterprise Web & Identity',
    client: 'Strata Cloud Systems',
    industry: 'Cloud Infrastructure & Tech',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
    tagline: 'High-performance interactive 3D web experience with 99.8% Lighthouse score and 4x enterprise demo conversion.',
    services: ['Website Development', 'Interactive 3D Graphics', 'Technical SEO', 'Lead Qualification Form'],
    results: [
      { metric: '99/100', label: 'Google Lighthouse Performance' },
      { metric: '+215%', label: 'Enterprise Inbound Demos' },
      { metric: '1.4s', label: 'Average Page Load Time' }
    ],
    challenge: 'Outdated corporate website that was slow, hard to navigate, and failing to convert high-ticket CTOs and tech leads.',
    solution: 'Built a custom high-speed React/Tailwind web platform with interactive architecture diagrams, live ROI calculator, and instant calendar booking.',
    testimonial: {
      quote: 'Our new website position us as the clear industry leader. The performance and visual craft are second to none.',
      author: 'Marc Andre',
      role: 'Chief Technology Officer'
    }
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Deep Audit & Competitive Intelligence',
    description: 'We immerse ourselves in your business, target audience personas, market whitespace, and unit economics to uncover high-leverage growth opportunities.',
    deliverables: ['Brand & Audience Blueprint', 'Competitor Gap Analysis', 'Growth Bottleneck Diagnosis'],
    timeline: 'Week 1',
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Tailored Marketing & Growth Roadmap',
    description: 'We construct a customized strategy covering positioning, content pillars, media buying architectures, and automation workflows.',
    deliverables: ['90-Day Growth Roadmap', 'Content Direction & Script Hooks', 'Paid Acquisition Funnel Architecture'],
    timeline: 'Week 1 - 2',
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'High-Retention Visuals & Assets',
    description: 'Our creative studio produces thumb-stopping video assets, bespoke branding systems, high-converting landing pages, and interactive copy.',
    deliverables: ['Cinematic Short-Form Reels & Videos', 'Ad Creative Variations', 'Interactive Web & Brand Collateral'],
    timeline: 'Week 2 - 3',
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    number: '04',
    title: 'LAUNCH',
    subtitle: 'Multi-Channel Deployment & Automation',
    description: 'We launch campaigns, activate automated WhatsApp and CRM sequences, publish organic content schedules, and start targeted ad distribution.',
    deliverables: ['Live Meta & Google Campaigns', 'Automated Lead Qualification Funnels', 'Active Content Publishing Engine'],
    timeline: 'Week 3 - 4',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    number: '05',
    title: 'OPTIMIZE',
    subtitle: 'Scientific A/B Testing & Data Refinement',
    description: 'We monitor live performance metrics, test hook angles, refine audience bidding, patch leakages in sales funnels, and iterate based on real numbers.',
    deliverables: ['Weekly Transparent Reporting', 'Creative Iteration & Hook Refresh', 'Conversion Rate Optimization (CRO)'],
    timeline: 'Ongoing (Weekly)',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    number: '06',
    title: 'GROW',
    subtitle: 'Scale What Works & Dominate Market',
    description: 'With verified profitable funnels and consistent brand attention, we scale ad budgets, expand into new channels, and build lasting digital brand equity.',
    deliverables: ['Scaled Ad Spend Budgets', 'Cross-Channel Expansion', 'Automated Retention & LTV Loops'],
    timeline: 'Scale Phase (Month 2+)',
    color: 'from-pink-500/20 to-purple-600/20'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    rating: 5,
    quote: 'EDIT AURA does not just make things look pretty; they understand the mathematics of business growth. In 4 months, our inbound demo pipeline grew by 320% while our team saved 20+ hours a week thanks to their WhatsApp and automation workflows.',
    author: 'Samir Patil',
    role: 'Founder & CEO',
    company: 'Nexlify Cloud Tech',
    industry: 'B2B SaaS',
    metric: '+320% Inbound Pipeline'
  },
  {
    id: 'test-2',
    rating: 5,
    quote: 'Finding an agency that masters high-end luxury aesthetics AND rigorous performance marketing is practically impossible. EDIT AURA delivered both flawlessly. Our brand now commands a 40% price premium and our ROAS stays above 4.5x consistently.',
    author: 'Natasha Verma',
    role: 'Brand Director',
    company: 'AURA Maison Haute Couture',
    industry: 'Luxury Fashion',
    metric: '4.6x Verified ROAS'
  },
  {
    id: 'test-3',
    rating: 5,
    quote: 'The speed and creative precision are unlike any agency I have hired in Pune or internationally. Their short-form content stopped our audience in their tracks. We gained 35k followers and converted thousands into paying customers.',
    author: 'Arjun Singhania',
    role: 'Co-Founder',
    company: 'Terra Nutrition & Fuel',
    industry: 'D2C Health',
    metric: '35K+ Community Growth'
  },
  {
    id: 'test-4',
    rating: 5,
    quote: 'Our WhatsApp lead qualification system built by EDIT AURA is magic. Customers get instant quotes, brochures, and automated booking reminders in seconds. Our conversion rate jumped from 12% to 38% almost overnight.',
    author: 'Meera Chordia',
    role: 'Director of Operations',
    company: 'Prime Spaces Realty',
    industry: 'Real Estate',
    metric: '38% Conversion Rate'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does EDIT AURA provide?',
    category: 'General',
    answer: 'EDIT AURA is a full-spectrum digital growth agency offering 9 core disciplines: Social Media Management, Content Creation (Short-form Reels, carousels, video production), Branding & Visual Identity, AI Marketing & Workflows, Custom Website Development, Search Engine Optimization (SEO), Performance Marketing (Meta & Google Ads), WhatsApp Automation, and Online Book Publishing (Amazon Kindle & Marketplace).'
  },
  {
    id: 'faq-budget',
    question: 'What is the minimum monthly budget required to partner with EDIT AURA?',
    category: 'Pricing',
    answer: 'Our growth and media management retainers start at a minimum monthly budget of Rs. 10,000 (₹10,000/mo). This ensures we can allocate dedicated creative engineering, campaign optimization, and strategic resources to deliver measurable, profitable ROI.'
  },
  {
    id: 'faq-2',
    question: 'Do you manage Instagram and Facebook accounts end-to-end?',
    category: 'Social Media',
    answer: 'Yes! We manage your social presence completely. This includes monthly content calendars, scriptwriting, video editing, thumbnail and carousel design, community engagement, comment/DM moderation, profile optimization, and in-depth weekly performance analytics.'
  },
  {
    id: 'faq-3',
    question: 'Do you create reels, short-form videos, and custom content?',
    category: 'Creative',
    answer: 'Absolutely. Short-form video is our bread and butter. We handle everything from viral hook research, storytelling scripting, on-location or remote production direction, dynamic captions, sound design, motion graphics, and high-converting ad variations.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide website development and redesigns?',
    category: 'Tech & Web',
    answer: 'Yes. We engineer ultra-fast, responsive, modern websites using modern tech stacks (React, TypeScript, Tailwind CSS, Next.js, and Webflow). Every website is conversion-optimized, mobile-first, and built for search engine visibility with sub-second loading speeds.'
  },
  {
    id: 'faq-5',
    question: 'Can you run Meta and Google Ads for our business?',
    category: 'Performance Ads',
    answer: 'Yes. Our performance team handles full-funnel media buying across Instagram, Facebook, and Google Search/Performance Max. We pair strategic budget management with rapid creative iteration, conversion API tracking, and continuous A/B testing to maximize your ROAS.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide AI automation and WhatsApp business bots?',
    category: 'AI & Automation',
    answer: 'Yes! We design intelligent WhatsApp Cloud API chatbots, automated CRM pipelines (HubSpot, Zoho, LeadSquared), lead qualification sequences, automated invoicing, and AI-driven content generation pipelines to eliminate repetitive operational work.'
  },
  {
    id: 'faq-7',
    question: 'Do you work with local businesses, startups, and established enterprises?',
    category: 'Engagement',
    answer: 'We collaborate with ambitious businesses of all sizes — from high-growth startups and local leaders in Pune/India to established international brands. We customize our engagement model to match your specific growth stage and revenue targets.'
  },
  {
    id: 'faq-8',
    question: 'How does your onboarding and project process work?',
    category: 'Process',
    answer: 'Our onboarding is frictionless and fast: 1) Initial discovery and brand audit, 2) Strategy & roadmap presentation within 5 business days, 3) Creative production & asset review, 4) Launch across all channels, and 5) Continuous weekly optimization and transparent reporting.'
  }
];

export const AGENCY_EMAIL = 'editaura.ea@gmail.com';
export const AGENCY_WHATSAPP = '918308442092';
export const AGENCY_PHONE_FORMATTED = '+91 83084 42092';

export const CLIENT_LOGOS = [
  { name: 'LUMINA HAUTE', symbol: 'LH' },
  { name: 'FINSCALE AI', symbol: 'FS' },
  { name: 'KAVIAR CULINARY', symbol: 'KC' },
  { name: 'NEXUS REALTY', symbol: 'NR' },
  { name: 'ZENITH ORGANIC', symbol: 'ZO' },
  { name: 'STRATA CLOUD', symbol: 'SC' },
  { name: 'VELOCE GLOBAL', symbol: 'VG' },
  { name: 'PULSE DIGITAL', symbol: 'PD' }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'freelance-graphic-designer',
    title: 'Freelance Graphic Designer',
    type: 'Freelance / Contract',
    category: 'Graphic Design',
    badge: 'Immediate Hiring (3 Openings)',
    compensation: 'Project based / Competitive (upto 10k-15k)',
    summary: 'Design scroll-stopping social media carousels, viral ad creatives, brand identity packages, vector assets, and premium digital collateral for our global client portfolio.',
    requirements: [
      'Strong portfolio demonstrating high-converting social media creatives, ad banners, and brand identity work',
      'Flawless mastery of visual hierarchy, modern typography pairing, color harmony, and negative space',
      'Proficiency with Figma, Adobe Photoshop, Adobe Illustrator, and generative design tools (Midjourney / Firefly)',
      'Ability to maintain strict brand guidelines while pushing aesthetic boundaries',
      'Fast turnaround capabilities (24 to 48 hours for sprint deliverables) and proactive communication'
    ],
    responsibilities: [
      'Design high-engagement Instagram carousels, static ads, infographics, and story assets',
      'Craft full brand identity systems (logos, typography, palettes, and brand guidelines)',
      'Create promotional digital assets, pitch decks, and website UI design components in Figma',
      'Iterate rapidly based on creative performance data, A/B test feedback, and client revisions'
    ],
    toolsAndStack: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Midjourney', 'Canva Pro'],
    idealFor: 'Creative visual designers with a keen eye for aesthetic luxury, high-CTR performance ads, and modern branding.'
  },
  {
    id: 'freelance-video-editor',
    title: 'Freelance Video Editor & Motion Designer',
    type: 'Freelance / Contract',
    category: 'Video Editing',
    badge: 'Immediate Hiring (4 Openings)',
    compensation: 'Project based / Competitive (upto 10k-15k)',
    summary: 'Edit viral, high-retention short-form videos (Reels, TikToks, Shorts, YouTube videos) with seamless pacing, dynamic kinetic typography, sound design, and custom motion graphics.',
    requirements: [
      'Proven track record of editing short-form content with verified high retention rates (>60% retention)',
      'Deep understanding of hook pacing (first 3 seconds), sound effects (SFX), B-roll selection, and visual storytelling',
      'Expertise in Adobe Premiere Pro, After Effects, DaVinci Resolve, and CapCut Pro',
      'Mastery of custom kinetic subtitles, motion graphics, audio balancing, and speed ramping',
      'Reliable high-speed workstation and fast turnaround capability for high-volume content schedules'
    ],
    responsibilities: [
      'Transform raw footage into polished, fast-paced Reels, Shorts, and long-form YouTube episodes',
      'Add engaging sound effects, royalty-free background scores, zooms, and custom visual effects',
      'Design animated lower-thirds, graphic overlays, and kinetic typography that captures attention',
      'Format and optimize videos for multi-platform distribution (9:16 vertical and 16:9 widescreen)'
    ],
    toolsAndStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut Pro', 'Epidemic Sound'],
    idealFor: 'Dynamic video storytellers and motion designers obsessed with viewer retention, sound design, and pacing.'
  },
  {
    id: 'freelance-web-developer',
    title: 'Freelance Website Developer (Frontend / Full-Stack)',
    type: 'Freelance / Contract',
    category: 'Website Development',
    badge: 'Immediate Hiring (2 Openings)',
    compensation: 'Project based / Competitive (upto 10k-15k)',
    summary: 'Develop blazing-fast, responsive, modern web applications, landing pages, and interactive brand websites with pixel-perfect design fidelity.',
    requirements: [
      'Strong portfolio of live websites with exceptional UI/UX, responsive layouts, and smooth animations',
      'Mastery of React / Next.js / TypeScript / Tailwind CSS, or Webflow / Framer / WordPress / Shopify',
      'Obsession with performance: Core Web Vitals optimization, lazy loading, and sub-second page speeds',
      'Understanding of conversion-focused landing page architecture, lead capture forms, and analytics setup',
      'Experience with Git version control, API integrations, and webhook connections'
    ],
    responsibilities: [
      'Translate Figma design mockups into pixel-perfect, responsive code with clean semantics',
      'Build custom landing pages, interactive micro-animations, and lead capture funnels',
      'Optimize web assets for maximum speed, accessibility (WCAG AA), and mobile-first responsiveness',
      'Integrate third-party APIs (WhatsApp Cloud API, CRM webhooks, payment gateways, and email providers)'
    ],
    toolsAndStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Webflow', 'Framer', 'Shopify', 'Vercel'],
    idealFor: 'Engineers and frontend developers who love building ultra-slick, high-performance web experiences.'
  },
  {
    id: 'freelance-ai-agent-developer',
    title: 'Freelance AI Agent & Workflow Automation Specialist',
    type: 'Freelance / Contract',
    category: 'AI Agent & Automation',
    badge: 'Urgent Requirement (2 Openings)',
    compensation: 'Project based / Competitive (upto 10k-15k)',
    summary: 'Architect intelligent autonomous AI agents, multi-app automation workflows (n8n, Make, Zapier), WhatsApp Cloud API bots, and LLM-powered business systems.',
    requirements: [
      'Demonstrated experience building multi-step AI agents and automations using n8n, Make.com, or custom code',
      'Experience integrating LLM APIs (OpenAI GPT-4o, Google Gemini 2.5/Flash, Claude) with tool-calling & RAG',
      'Expertise with WhatsApp Business Cloud API, CRM webhooks (HubSpot, Zoho, Airtable), and automated lead pipelines',
      'Understanding of prompt engineering, error handling, token optimization, and webhook security',
      'Strong problem-solving skills in debugging complex asynchronous workflows and API payload schemas'
    ],
    responsibilities: [
      'Build custom autonomous AI agents for 24/7 client lead qualification and customer support',
      'Architect zero-touch multi-app workflows that eliminate manual data entry and operations',
      'Deploy WhatsApp automated interactive flows and instant CRM notification bots',
      'Create custom API bridges, automated reporting scripts, and AI-powered content generation pipelines'
    ],
    toolsAndStack: ['n8n', 'Make.com', 'Zapier', 'OpenAI API', 'Google Gemini API', 'WhatsApp Cloud API', 'Python / Node.js', 'Airtable / Supabase'],
    idealFor: 'AI engineers, prompt architects, and workflow hackers passionate about replacing manual busywork with autonomous intelligence.'
  }
];
