import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/agencyData';
import { ServiceDetailModal } from './ServiceDetailModal';
import {
  Share2,
  Film,
  Palette,
  Sparkles,
  Globe,
  TrendingUp,
  MessageSquare,
  Database,
  Cpu,
  BookOpen,
  Search,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultationWithService
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'creative' | 'growth' | 'automation'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Share2,
    Film,
    Palette,
    Sparkles,
    Globe,
    TrendingUp,
    MessageSquare,
    Database,
    Cpu,
    BookOpen,
    Search
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const handleSelectServiceForConsult = (serviceTitle: string) => {
    if (onOpenConsultationWithService) {
      onOpenConsultationWithService(serviceTitle);
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              YOUR BRAND NEEDS <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
                MORE THAN POSTS.
              </span>
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-base max-w-xl mt-3">
              We combine creativity, strategy, technology and performance to build brands that grow.
            </p>
          </div>

          {/* Category Filter Pills in Frosted Glass */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md self-start md:self-auto shadow-sm">
            {(['all', 'creative', 'growth', 'automation'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#8b5cf6] text-white shadow-md shadow-purple-500/25'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'all' ? `All Services (${SERVICES_DATA.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Frosted Glass Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl shadow-black/30 hover:shadow-purple-950/25"
              >
                {/* Subtle card aura glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/10 rounded-2xl transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Row: Minimal Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#8b5cf6]/20 border border-white/10 group-hover:border-purple-500/30 text-zinc-300 group-hover:text-[#c084fc] flex items-center justify-center transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#a855f7] uppercase">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-2.5 group-hover:text-[#c084fc] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Row: Deliverables preview & Explore CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 group-hover:text-zinc-200 flex items-center gap-1.5 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                    {service.deliverables.length} Deliverables
                  </span>

                  <div className="flex items-center gap-1 font-bold text-white group-hover:text-[#c084fc] transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Bundles */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-display">
              Need a full-stack growth team for your brand?
            </h4>
            <p className="text-[#a1a1aa] text-xs sm:text-sm mt-1">
              We bundle Creative Content + Meta/Google Ads + WhatsApp CRM Automation into high-impact growth retainers.
            </p>
          </div>
          <button
            onClick={() => handleSelectServiceForConsult('Full-Stack Growth Retainer')}
            className="px-8 py-3.5 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-purple-500/25 active:scale-95"
          >
            <span>Design Custom Retainer</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForConsultation={handleSelectServiceForConsult}
      />
    </section>
  );
};
