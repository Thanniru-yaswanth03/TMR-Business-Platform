import React, { ElementType, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  size?: ContainerSize;
  noPadding?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-8xl',
  full: 'max-w-full',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = 'div', size = 'xl', noPadding = false, className, children, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            'w-full mx-auto',
            sizeClasses[size],
            !noPadding && 'px-4 sm:px-6 lg:px-8',
            className
          )
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
