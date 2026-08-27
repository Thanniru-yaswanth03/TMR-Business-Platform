import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { HeadingLevel, HeadingSize } from '@/types';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  font?: 'sans' | 'heading' | 'display';
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  accentGold?: boolean;
}

const sizeClasses: Record<HeadingSize, string> = {
  display: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight',
  h1: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight',
  h2: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight',
  h3: 'text-xl sm:text-2xl font-bold tracking-normal',
  h4: 'text-lg sm:text-xl font-bold tracking-normal',
  h5: 'text-base sm:text-lg font-semibold',
  h6: 'text-sm sm:text-base font-semibold',
};

const fontClasses = {
  sans: 'font-sans',
  heading: 'font-heading',
  display: 'font-display',
};

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center mx-auto',
  right: 'text-right items-end ml-auto',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  font = 'heading',
  subtitle,
  align = 'left',
  accentGold = false,
  className,
  children,
  ...rest
}) => {
  // Default visual size to matching semantic tag if not specified
  const effectiveSize = size || (Component as HeadingSize);

  return (
    <div className={clsx('flex flex-col', alignClasses[align])}>
      <Component
        className={twMerge(
          clsx(
            'text-brand-navy-950 leading-tight text-balance',
            sizeClasses[effectiveSize],
            fontClasses[font],
            className
          )
        )}
        {...rest}
      >
        {children}
      </Component>

      {accentGold && (
        <div
          className={clsx(
            'h-1 rounded-full bg-brand-gold-500 mt-3',
            effectiveSize === 'display' || effectiveSize === 'h1' ? 'w-16' : 'w-10'
          )}
          aria-hidden="true"
        />
      )}

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
