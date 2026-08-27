import React, { ElementType, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SectionSpacing, SectionBackground } from '@/types';

export type { SectionSpacing, SectionBackground };

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  spacing?: SectionSpacing;
  background?: SectionBackground;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: 'py-0',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-24 lg:py-28',
  xl: 'py-20 sm:py-28 lg:py-36',
};

const backgroundClasses: Record<SectionBackground, string> = {
  default: 'bg-transparent',
  'warm-white': 'bg-surface-warm',
  muted: 'bg-surface-muted',
  surface: 'bg-white border-y border-slate-200/70',
  navy: 'bg-brand-navy-900 text-white',
  dark: 'bg-brand-navy-950 text-white',
  'gold-subtle': 'bg-brand-gold-50/70 border-y border-brand-gold-200/60',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      spacing = 'md',
      background = 'default',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx('relative w-full', spacingClasses[spacing], backgroundClasses[background], className)
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';
