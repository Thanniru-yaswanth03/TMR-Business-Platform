import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BadgeVariant, BadgeSize } from '@/types';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
  default: {
    container: 'bg-brand-navy-100 text-brand-navy-900 border border-brand-navy-200/80',
    dot: 'bg-brand-navy-600',
  },
  navy: {
    container: 'bg-brand-navy-900 text-white border border-brand-navy-700',
    dot: 'bg-brand-gold-400',
  },
  gold: {
    container: 'bg-brand-gold-50 text-brand-gold-900 border border-brand-gold-300',
    dot: 'bg-brand-gold-600',
  },
  emerald: {
    container: 'bg-emerald-50 text-brand-emerald-800 border border-emerald-200',
    dot: 'bg-brand-emerald-600',
  },
  slate: {
    container: 'bg-slate-100 text-slate-700 border border-slate-200',
    dot: 'bg-slate-500',
  },
  outline: {
    container: 'bg-transparent text-slate-700 border border-slate-300',
    dot: 'bg-slate-400',
  },
  subtle: {
    container: 'bg-white/80 text-brand-navy-950 border border-slate-200 shadow-2xs',
    dot: 'bg-brand-gold-500',
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[11px] font-medium gap-1 rounded-md',
  md: 'px-2.5 py-1 text-xs font-semibold gap-1.5 rounded-lg',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  withDot = false,
  dotColor,
  icon,
  className,
  children,
  ...rest
}) => {
  const currentVariant = variantStyles[variant];

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center select-none tracking-wide',
          currentVariant.container,
          sizeStyles[size],
          className
        )
      )}
      {...rest}
    >
      {withDot && (
        <span
          className={clsx(
            'w-1.5 h-1.5 rounded-full shrink-0',
            dotColor || currentVariant.dot
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0 inline-flex items-center" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
