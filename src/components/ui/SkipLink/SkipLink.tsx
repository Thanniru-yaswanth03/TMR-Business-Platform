import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = 'main-content',
  label = 'Skip to main content',
  className,
}) => {
  return (
    <a
      href={`#${targetId}`}
      className={twMerge(
        clsx(
          'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50',
          'px-4 py-2 bg-brand-amber-500 text-brand-navy-950 font-semibold text-sm rounded-md shadow-lg',
          'ring-2 ring-brand-navy-900 ring-offset-2',
          className
        )
      )}
    >
      {label}
    </a>
  );
};
