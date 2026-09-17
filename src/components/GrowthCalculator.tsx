import React, { useState, useId } from 'react';
import { Calculator, Sparkles, TrendingUp, Clock, Users, ArrowRight, DollarSign } from 'lucide-react';

interface GrowthCalculatorProps {
  onApplyBlueprint: (blueprintDetails: {
    budget: number;
    industry: string;
    services: string[];
    projectedLeads: number;
  }) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onApplyBlueprint }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [budgetInr, setBudgetInr] = useState<number>(25000);
  const [budgetUsd, setBudgetUsd] = useState<number>(500);
  const [industry, setIndustry] = useState<string>('D2C & E-Commerce');
  const budgetInputId = useId();
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Content Creation & Social Media',
    'Meta & Google Performance Ads',
    'WhatsApp & Funnel Automation'
  ]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleCurrencyChange = (newCurrency: 'INR' | 'USD') => {
    if (newCurrency === 'USD' && currency === 'INR') {
      setBudgetUsd(Math.max(120, Math.round(budgetInr / 83 / 10) * 10));
    } else if (newCurrency === 'INR' && currency === 'USD') {
      setBudgetInr(Math.max(10000, Math.round(budgetUsd * 83 / 1000) * 1000));
    }
    setCurrency(newCurrency);
  };

  // Calculations
  const currencySymbol = currency === 'USD' ? '$' : '₹';
  const displayBudget = currency === 'USD' ? budgetUsd : budgetInr;
  const normalizedUsdBudget = currency === 'USD' ? budgetUsd : budgetInr / 83;

  // Impact Multipliers
  const leadMultiplier = industry === 'B2B SaaS & Tech' ? 0.03 : industry === 'Real Estate & Luxury' ? 0.015 : 0.08;
  const estimatedLeads = Math.max(8, Math.round(normalizedUsdBudget * leadMultiplier * (selectedServices.length >= 2 ? 1.4 : 1.0)));
  const estimatedImpressions = Math.max(12000, Math.round((normalizedUsdBudget * 120 * (selectedServices.includes('Content Creation & Social Media') ? 2.2 : 1.0)) / 1000) * 1000);
  const hoursSavedWeekly = selectedServices.includes('WhatsApp & Funnel Automation') ? 18 + selectedServices.length * 4 : selectedServices.length * 3;
  const projectedROAS = industry === 'Real Estate & Luxury' ? '4.8x - 7.5x' : industry === 'B2B SaaS & Tech' ? '3.5x - 5.2x' : '3.8x - 6.4x';

  const handleApply = () => {
    onApplyBlueprint({
      budget: displayBudget,
      industry,
      services: selectedServices,
      projectedLeads: estimatedLeads
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#a855f7] font-bold backdrop-blur-md mb-3">
            Interactive Growth Modeling
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight">
            ESTIMATE YOUR BRAND'S AURA & ROI
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base mt-3">
            Configure your target budget (starting at minimum ₹10,000/mo) and services to forecast your monthly reach, lead pipeline, and automation savings.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Inputs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between">
            
            {/* Currency & Industry Selector */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold">
                  Target Industry
                </label>
                <div className="flex gap-1 p-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono backdrop-blur-md">
                  <button
                    onClick={() => handleCurrencyChange('INR')}
                    className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${currency === 'INR' ? 'bg-[#8b5cf6] text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('USD')}
                    className={`px-3 py-0.5 rounded-full text-xs font-bold transition-all ${currency === 'USD' ? 'bg-[#8b5cf6] text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-[#0d0d14] border border-white/15 text-sm font-semibold text-white focus:outline-none focus:border-purple-400"
              >
                <option>D2C & E-Commerce</option>
                <option>B2B SaaS & Tech</option>
                <option>Real Estate & Luxury</option>
                <option>Hospitality & Fine Dining</option>
                <option>Professional Services & Clinic</option>
              </select>
            </div>

            {/* Monthly Budget Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor={budgetInputId} className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                    Monthly Growth & Media Budget
                  </label>
                  <span className="text-[10px] text-purple-400 font-mono">Min. budget: Rs. 10,000 (₹10,000)</span>
                </div>
                <span className="text-2xl font-black text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9]">
                  {currencySymbol}{displayBudget.toLocaleString()}/mo
                </span>
              </div>

              {currency === 'INR' ? (
                <input
                  id={budgetInputId}
                  type="range"
                  min="10000"
                  max="500000"
                  step="2500"
                  value={budgetInr}
                  onChange={(e) => setBudgetInr(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8b5cf6]"
                />
              ) : (
                <input
                  id={budgetInputId}
                  type="range"
                  min="120"
                  max="8000"
                  step="50"
                  value={budgetUsd}
                  onChange={(e) => setBudgetUsd(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8b5cf6]"
                />
              )}

              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>{currency === 'INR' ? '₹10,000 (Min)' : '$120 (Min)'}</span>
                <span>{currency === 'INR' ? '₹75,000 (Growth)' : '$1,500 (Growth)'}</span>
                <span>{currency === 'INR' ? '₹3,00,000+ (Scale)' : '$5,000+ (Scale)'}</span>
              </div>
            </div>

            {/* Service Pillars (Multi-select) */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block">
                Select Growth Engine Modules
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Content Creation & Social Media',
                  'Meta & Google Performance Ads',
                  'WhatsApp & Funnel Automation',
                  'Custom Website Development',
                  'Search Engine Optimization (SEO)',
                  'AI Marketing & Workflows',
                  'Online Book Publishing'
                ].map((srv) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between backdrop-blur-md ${
                        isChecked
                          ? 'bg-white/15 border-white/30 text-white shadow-sm'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="truncate pr-2">{srv}</span>
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        isChecked ? 'bg-[#8b5cf6] text-white font-bold' : 'border border-white/20'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Forecast Summary (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#a855f7]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#c084fc] font-bold">
                  Projected 90-Day Output
                </span>
              </div>

              {/* Metric 1: Monthly Leads */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Est. Qualified Inbound Leads</span>
                  <Users className="w-3.5 h-3.5 text-[#a855f7]" />
                </div>
                <div className="text-3xl font-black text-white font-display">
                  ~{estimatedLeads.toLocaleString()} <span className="text-xs font-mono font-normal text-zinc-400">leads/mo</span>
                </div>
              </div>

              {/* Metric 2: Monthly Content Reach */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Est. Brand Impressions</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white font-display">
                  {estimatedImpressions.toLocaleString()}+
                </div>
              </div>

              {/* Metric 3: Time Saved */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Weekly Operations Saved</span>
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl font-black text-white font-display">
                  {hoursSavedWeekly} hrs/week
                </div>
              </div>

              {/* ROAS Target */}
              <div className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#c084fc] flex items-center justify-between font-mono">
                <span>Target ROAS Band:</span>
                <span className="font-bold text-white">{projectedROAS}</span>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-6">
              <button
                onClick={handleApply}
                className="w-full py-4 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 active:scale-95"
              >
                <span>Apply for this Custom Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
