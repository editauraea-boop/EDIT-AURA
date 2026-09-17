import React, { useState, useEffect } from 'react';
import { Shield, Cookie, Check, X, Sliders, ChevronRight } from 'lucide-react';
import { initAnalytics } from '../utils/analytics';

interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('editaura_cookie_consent');
    if (!savedConsent) {
      // Delay slightly for smooth entering animation
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        if (parsed.analytics) {
          initAnalytics();
        }
      } catch {
        // Ignore parse error
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent: CookiePreferences = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('editaura_cookie_consent', JSON.stringify(allConsent));
    setIsVisible(false);
    initAnalytics();
  };

  const handleRejectNonEssential = () => {
    const minimalConsent: CookiePreferences = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('editaura_cookie_consent', JSON.stringify(minimalConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('editaura_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    if (preferences.analytics) {
      initAnalytics();
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => {
          setIsCustomizing(true);
          setIsVisible(true);
        }}
        className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 backdrop-blur-md transition-all text-xs flex items-center gap-1.5 shadow-lg group"
        title="Manage Cookie Preferences"
        aria-label="Cookie Settings"
      >
        <Cookie className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden group-hover:inline text-[11px] font-mono pr-1">Cookies</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-float" style={{ animationDuration: '0s' }}>
      <div className="p-5 rounded-2xl bg-[#09090b]/95 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80 text-white space-y-4">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-tight text-white font-display">
                Privacy & Cookie Settings
              </h4>
              <p className="text-[10px] text-zinc-400 font-mono">
                GDPR & DPDP Act 2023 Compliant
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Text */}
        {!isCustomizing ? (
          <p className="text-xs text-zinc-300 leading-relaxed">
            We use cookies to ensure optimal performance, analyze web traffic, and enhance your digital growth experience.{' '}
            <button
              onClick={onOpenPrivacyPolicy}
              className="text-purple-400 underline underline-offset-2 hover:text-purple-300 font-medium"
            >
              Read our Privacy Policy
            </button>.
          </p>
        ) : (
          /* Custom Preferences Panel */
          <div className="space-y-3 pt-1 border-t border-white/10 text-xs">
            {/* Essential */}
            <div className="flex items-center justify-between py-1.5 border-b border-white/5">
              <div>
                <span className="font-semibold text-white">Essential Cookies</span>
                <p className="text-[10px] text-zinc-400">Required for website security & basic navigation</p>
              </div>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                Always Active
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between py-1.5 border-b border-white/5">
              <div>
                <span className="font-semibold text-white">Performance & Analytics</span>
                <p className="text-[10px] text-zinc-400">Anonymous metrics to help us optimize page speed</p>
              </div>
              <button
                type="button"
                onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                  preferences.analytics ? 'bg-purple-600' : 'bg-zinc-700'
                }`}
                aria-label="Toggle analytics cookies"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between py-1.5">
              <div>
                <span className="font-semibold text-white">Marketing & Personalization</span>
                <p className="text-[10px] text-zinc-400">Helps tailor campaign blueprint recommendations</p>
              </div>
              <button
                type="button"
                onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                  preferences.marketing ? 'bg-purple-600' : 'bg-zinc-700'
                }`}
                aria-label="Toggle marketing cookies"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 pt-1">
          {!isCustomizing ? (
            <>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 transition-colors flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Accept All</span>
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 font-medium text-xs border border-white/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => setIsCustomizing(true)}
                className="py-2 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs border border-white/10 transition-colors flex items-center justify-center"
                title="Customize settings"
              >
                <Sliders className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSavePreferences}
                className="flex-1 py-2 px-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setIsCustomizing(false)}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 font-medium text-xs border border-white/10 transition-colors"
              >
                Back
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
