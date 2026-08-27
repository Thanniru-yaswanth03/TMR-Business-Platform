import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  realEstateExperienceYears: number;
  rtoExperienceYears: number;
  locations: {
    realEstate: string;
    rtoServices: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
  };
}

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'gold' 
  | 'outline' 
  | 'navy-outline' 
  | 'ghost' 
  | 'emerald' 
  | 'dark';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type LogoVariant = 'mark' | 'full' | 'wordmark' | 'stacked';
export type LogoTheme = 'light' | 'dark';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

export type BadgeVariant = 'default' | 'navy' | 'gold' | 'emerald' | 'slate' | 'outline' | 'subtle';
export type BadgeSize = 'sm' | 'md';

export type CardVariant = 'default' | 'elevated' | 'interactive' | 'accent-gold' | 'accent-navy' | 'bordered';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'default' | 'warm-white' | 'muted' | 'surface' | 'navy' | 'dark' | 'gold-subtle';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export * from './property';
export * from './enquiry';

