import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LogoVariant, LogoTheme, LogoSize } from '@/types';
import { BUSINESS_DETAILS } from '@/config/env';

export interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  asLink?: boolean;
  to?: string;
  className?: string;
}

const sizeConfig: Record<LogoSize, { mark: string; textTitle: string; textSub: string; gap: string }> = {
  sm: {
    mark: 'w-8 h-8',
    textTitle: 'text-sm font-bold',
    textSub: 'text-[10px] leading-tight',
    gap: 'gap-2',
  },
  md: {
    mark: 'w-10 h-10',
    textTitle: 'text-base font-bold',
    textSub: 'text-xs leading-tight',
    gap: 'gap-2.5',
  },
  lg: {
    mark: 'w-12 h-12',
    textTitle: 'text-lg font-bold',
    textSub: 'text-xs leading-tight',
    gap: 'gap-3',
  },
  xl: {
    mark: 'w-16 h-16',
    textTitle: 'text-2xl font-extrabold',
    textSub: 'text-sm leading-tight',
    gap: 'gap-4',
  },
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  asLink = false,
  to = '/',
  className,
}) => {
  const currentSize = sizeConfig[size];
  const isLight = theme === 'light'; // on dark backgrounds

  // Scalable Vector Monogram Mark
  const MonogramMark = (
    <div
      className={twMerge(
        clsx(
          'relative shrink-0 rounded-xl flex items-center justify-center select-none shadow-subtle transition-transform duration-200 group-hover:scale-[1.02]',
          isLight
            ? 'bg-brand-navy-900 border border-brand-gold-500/80 text-white'
            : 'bg-brand-navy-900 border-2 border-brand-gold-500 text-white',
          currentSize.mark
        )
      )}
      aria-hidden="true"
    >
      {/* Decorative inner hairline frame */}
      <div
        className={clsx(
          'absolute inset-0.5 rounded-[10px] border border-dashed pointer-events-none opacity-40',
          isLight ? 'border-brand-gold-400' : 'border-brand-gold-400'
        )}
      />

      {/* Monogram Text with gold accent bar */}
      <div className="flex flex-col items-center justify-center leading-none z-10">
        <span
          className={clsx(
            'font-heading font-extrabold tracking-wider',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-base',
            size === 'xl' && 'text-xl',
            isLight ? 'text-white' : 'text-slate-50'
          )}
        >
          TMR
        </span>
        <div
          className={clsx(
            'rounded-full bg-brand-gold-500 mt-0.5',
            size === 'sm' && 'w-3 h-0.5',
            size === 'md' && 'w-4 h-0.5',
            size === 'lg' && 'w-5 h-1',
            size === 'xl' && 'w-6 h-1'
          )}
        />
      </div>
    </div>
  );

  // Typography Wordmark block
  const TypographyBlock = (
    <div
      className={clsx(
        'flex flex-col select-none',
        variant === 'stacked' && 'items-center text-center mt-1'
      )}
    >
      <span
        className={clsx(
          'font-heading tracking-tight leading-tight',
          currentSize.textTitle,
          isLight ? 'text-white' : 'text-brand-navy-950'
        )}
      >
        {BUSINESS_DETAILS.shortName}
      </span>
      <span
        className={clsx(
          'font-medium tracking-wide',
          currentSize.textSub,
          isLight ? 'text-slate-300' : 'text-slate-500'
        )}
      >
        Real Estate & RTO Services
      </span>
    </div>
  );

  const containerClasses = twMerge(
    clsx(
      'inline-flex items-center group focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 focus-visible:ring-offset-2',
      variant === 'stacked' ? 'flex-col' : currentSize.gap,
      className
    )
  );

  const innerContent = (
    <>
      {variant !== 'wordmark' && MonogramMark}
      {variant !== 'mark' && TypographyBlock}
    </>
  );

  if (asLink) {
    return (
      <Link to={to} className={containerClasses} aria-label={`${BUSINESS_DETAILS.name} Home`}>
        {innerContent}
      </Link>
    );
  }

  return <div className={containerClasses}>{innerContent}</div>;
};
