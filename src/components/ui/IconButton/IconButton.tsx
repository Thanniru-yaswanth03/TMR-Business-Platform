import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonVariant, ButtonSize } from '@/types';
import { Loader2 } from 'lucide-react';

export type IconButtonShape = 'rounded' | 'square' | 'circle';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string; // Required for accessibility
  icon: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: IconButtonShape;
  isLoading?: boolean;
  href?: string;
  to?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-navy-800 text-white hover:bg-brand-navy-900 active:bg-brand-navy-950 border border-brand-navy-800 shadow-sm',
  secondary:
    'bg-brand-gold-600 text-brand-navy-950 hover:bg-brand-gold-700 active:bg-brand-gold-800 border border-brand-gold-600 shadow-sm',
  gold:
    'bg-brand-gold-600 text-brand-navy-950 hover:bg-brand-gold-700 active:bg-brand-gold-800 border border-brand-gold-600 shadow-sm',
  outline:
    'bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
  'navy-outline':
    'bg-transparent text-brand-navy-900 border border-brand-navy-700 hover:bg-brand-navy-50 active:bg-brand-navy-100',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 border border-transparent',
  emerald:
    'bg-brand-emerald-600 text-white hover:bg-brand-emerald-700 active:bg-brand-emerald-800 border border-brand-emerald-600 shadow-sm',
  dark:
    'bg-brand-navy-950 text-white hover:bg-brand-navy-900 active:bg-slate-900 border border-brand-navy-950 shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'w-8 h-8 p-1.5 text-xs',
  md: 'w-10 h-10 p-2 text-sm',
  lg: 'w-12 h-12 p-2.5 text-base',
};

const shapeStyles: Record<IconButtonShape, string> = {
  rounded: 'rounded-lg',
  square: 'rounded-none',
  circle: 'rounded-full',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      'aria-label': ariaLabel,
      className,
      variant = 'ghost',
      size = 'md',
      shape = 'rounded',
      isLoading = false,
      disabled,
      href,
      to,
      external = false,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const combinedClasses = twMerge(
      clsx(
        'inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer shrink-0',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold-500',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        shapeStyles[shape],
        className
      )
    );

    const content = isLoading ? (
      <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
    ) : (
      <span className="shrink-0 inline-flex items-center justify-center" aria-hidden="true">
        {icon}
      </span>
    );

    if (to) {
      return (
        <Link to={to} className={combinedClasses} aria-label={ariaLabel} aria-disabled={disabled}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClasses}
        aria-label={ariaLabel}
        disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
