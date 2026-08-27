import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'subtle' | 'strong' | 'gold';
  label?: React.ReactNode;
}

const variantClasses = {
  subtle: 'border-slate-200/80',
  strong: 'border-slate-300',
  gold: 'border-brand-gold-300',
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'subtle',
  label,
  className,
  ...rest
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={twMerge(
          clsx('inline-block h-full min-h-[1em] w-px self-stretch border-r', variantClasses[variant], className)
        )}
        role="separator"
        aria-orientation="vertical"
        {...rest}
      />
    );
  }

  if (label) {
    return (
      <div
        className={twMerge(clsx('relative flex py-4 items-center w-full', className))}
        role="separator"
        aria-orientation="horizontal"
        {...rest}
      >
        <div className={clsx('flex-grow border-t', variantClasses[variant])} />
        <span className="flex-shrink mx-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <div className={clsx('flex-grow border-t', variantClasses[variant])} />
      </div>
    );
  }

  return (
    <hr
      className={twMerge(clsx('w-full border-0 border-t my-4', variantClasses[variant], className))}
      {...rest}
    />
  );
};
