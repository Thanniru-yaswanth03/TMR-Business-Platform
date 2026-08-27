import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonVariant, ButtonSize } from '@/types';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  to?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-navy-800 text-white hover:bg-brand-navy-900 active:bg-brand-navy-950 border border-brand-navy-800 shadow-sm',
  secondary:
    'bg-brand-gold-600 text-brand-navy-950 hover:bg-brand-gold-700 active:bg-brand-gold-800 font-semibold border border-brand-gold-600 shadow-sm',
  gold:
    'bg-brand-gold-600 text-brand-navy-950 hover:bg-brand-gold-700 active:bg-brand-gold-800 font-semibold border border-brand-gold-600 shadow-sm',
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
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5 font-medium',
  md: 'px-4 py-2 text-sm rounded-lg gap-2 font-medium',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5 font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
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
        'inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold-500',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : 'w-auto',
        className
      )
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        ) : (
          leftIcon && <span className="shrink-0 inline-flex items-center" aria-hidden="true">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 inline-flex items-center" aria-hidden="true">{rightIcon}</span>
        )}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={combinedClasses} aria-disabled={disabled}>
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
        disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
