import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CardVariant } from '@/types';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200/90 shadow-card',
  elevated: 'bg-white border border-slate-200/80 shadow-elevated',
  interactive: 'bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-gold-500/60 transition-all duration-200 cursor-pointer',
  'accent-gold': 'bg-white border-t-4 border-t-brand-gold-500 border-x border-b border-slate-200 shadow-card',
  'accent-navy': 'bg-white border-t-4 border-t-brand-navy-800 border-x border-b border-slate-200 shadow-card',
  bordered: 'bg-white border-2 border-slate-200 shadow-subtle',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hoverable = false, className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(
            'rounded-2xl overflow-hidden',
            variantStyles[variant],
            hoverable && 'hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200',
            className
          )
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={twMerge(clsx('p-6 sm:p-8 pb-4 space-y-1.5', className))} {...rest}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <h3
        ref={ref}
        className={twMerge(clsx('font-heading font-bold text-xl text-brand-navy-950 leading-snug', className))}
        {...rest}
      >
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <p ref={ref} className={twMerge(clsx('text-sm text-slate-600 leading-relaxed', className))} {...rest}>
        {children}
      </p>
    );
  }
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={twMerge(clsx('p-6 sm:p-8 pt-0', className))} {...rest}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(clsx('p-6 sm:p-8 pt-4 border-t border-slate-100 flex items-center justify-between', className))}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = 'CardFooter';
