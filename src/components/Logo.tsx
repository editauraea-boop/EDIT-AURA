import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showGlow?: boolean;
  rowClassName?: string;
  editClassName?: string;
  auraBoxClassName?: string;
  auraTextClassName?: string;
  taglineClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showGlow = false,
  rowClassName = '',
  editClassName = '',
  auraBoxClassName = '',
  auraTextClassName = '',
  taglineClassName = ''
}) => {
  // Size dimensions
  const sizeClasses = {
    sm: {
      container: 'text-xs',
      edit: 'text-sm font-extrabold tracking-tight',
      auraBox: 'px-1.5 py-0.5 ml-1',
      auraText: 'text-sm font-extrabold tracking-tight',
      tagline: 'text-[9px] tracking-[0.25em] mt-1 font-normal',
    },
    md: {
      container: 'text-sm',
      edit: 'text-[14px] font-extrabold tracking-tight leading-[20px] h-[20px] flex items-center',
      auraBox: 'px-2 h-[20px] ml-1.5 rounded-none flex items-center justify-center',
      auraText: 'text-[14px] font-extrabold tracking-tight leading-none',
      tagline: 'text-[11px] tracking-[0.32em] mt-1 font-normal',
    },
    lg: {
      container: 'text-base',
      edit: 'text-2xl md:text-3xl font-extrabold tracking-tight h-[34px] flex items-center',
      auraBox: 'px-2.5 h-[34px] ml-2 rounded-none flex items-center justify-center',
      auraText: 'text-2xl md:text-3xl font-extrabold tracking-tight leading-none',
      tagline: 'text-xs md:text-sm tracking-[0.38em] mt-2 font-normal',
    },
    xl: {
      container: 'text-lg',
      edit: 'text-3xl md:text-5xl font-extrabold tracking-tight',
      auraBox: 'px-4 py-1.5 ml-3 rounded-none',
      auraText: 'text-3xl md:text-5xl font-extrabold tracking-tight',
      tagline: 'text-sm md:text-base tracking-[0.45em] mt-3 font-normal',
    }
  }[size];

  const editClasses = editClassName
    ? sizeClasses.edit.replace(/text-\[[^\]]+\]|text-(xs|sm|base|lg|xl|\d+xl)/g, '').trim() + ' ' + editClassName
    : sizeClasses.edit;

  const auraBoxClasses = auraBoxClassName
    ? sizeClasses.auraBox.replace(/px-\S+/g, '').trim() + ' ' + auraBoxClassName
    : sizeClasses.auraBox;

  const auraTextClasses = auraTextClassName
    ? sizeClasses.auraText.replace(/text-\[[^\]]+\]|text-(xs|sm|base|lg|xl|\d+xl)/g, '').trim() + ' ' + auraTextClassName
    : sizeClasses.auraText;

  const taglineClasses = taglineClassName
    ? sizeClasses.tagline.replace(/text-\[[^\]]+\]|text-(xs|sm|base|lg|xl|\d+xl)/g, '').trim() + ' ' + taglineClassName
    : sizeClasses.tagline;

  return (
    <div className={`inline-flex flex-col select-none group relative ${className}`}>
      {showGlow && (
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full" />
      )}
      
      {/* Main Logo Row: EDIT [AURA] */}
      <div className={`flex items-center leading-none relative z-10 ${rowClassName}`}>
        <span className={`text-white font-sans ${editClasses} transition-colors group-hover:text-purple-100`}>
          EDIT
        </span>
        <div className={`bg-white text-black font-sans flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-[1.02] ${auraBoxClasses}`}>
          <span className={`text-black font-sans ${auraTextClasses}`}>
            AURA
          </span>
        </div>
      </div>

      {/* Tagline: make them pause */}
      {variant === 'full' && (
        <div className={`text-zinc-400 font-sans lowercase text-center whitespace-nowrap opacity-90 group-hover:text-zinc-200 transition-colors relative z-10 ${taglineClasses}`}>
          make them pause
        </div>
      )}
    </div>
  );
};
