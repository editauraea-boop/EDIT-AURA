import React, { useState } from 'react';
import { PORTFOLIO_DATA, CaseStudy } from '../data/agencyData';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, TrendingUp, Sparkles, Filter } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'social', label: 'Social Media' },
    { id: 'branding', label: 'Branding' },
    { id: 'performance', label: 'Performance Marketing' },
    { id: 'websites', label: 'Websites' },
    { id: 'content', label: 'Content' },
    { id: 'automation', label: 'AI & Systems' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
              Featured Work & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              IDEAS LOOK BETTER <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
                WHEN THEY WORK.
              </span>
            </h2>
            <p className="text-[#a1a1aa] text-sm sm:text-base max-w-xl mt-3">
              Explore how we help ambitious brands transform attention into verified revenue, cult followings, and automated scale.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md self-start md:self-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#8b5cf6] text-white shadow-md shadow-purple-500/25'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Frosted Glass Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedStudy(project)}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/25 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-2xl shadow-black/50 hover:-translate-y-2 hover:shadow-purple-950/25"
            >
              {/* Image Container with high aspect ratio preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-black/20" />
                
                {/* Top Badge: Industry */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase text-[#c084fc] tracking-wider">
                    {project.industry}
                  </span>
                </div>

                {/* Top Right: Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#8b5cf6] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-colors shadow-lg">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom of Image: Top Metric pill */}
                <div className="absolute bottom-3 left-4">
                  <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-[#a855f7]" />
                    <span className="text-xs font-bold text-white font-mono">
                      {project.results[0].metric} {project.results[0].label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#a855f7] font-bold mb-1.5">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-[#c084fc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                </div>

                {/* Services Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.services.slice(0, 3).map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-zinc-300"
                    >
                      {srv}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400">
                      +{project.services.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view more / start project */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/25 backdrop-blur-md text-white font-bold text-sm hover:bg-white/10 transition-all shadow-lg active:scale-95"
          >
            <span>Discuss Your Project Strategy</span>
            <ArrowUpRight className="w-4 h-4 text-[#a855f7]" />
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
