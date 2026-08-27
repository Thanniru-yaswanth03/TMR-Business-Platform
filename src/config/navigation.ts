import { NavItem } from '@/types';

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Real Estate',
    href: '/real-estate',
    badge: 'Hyderabad',
    description: 'Residential & Commercial Property Brokerage in Hyderabad (~5 yrs exp)',
  },
  {
    label: 'RTO Services',
    href: '/rto-services',
    badge: 'TS & AP',
    description: 'Licence, Vehicle Registration & Transfer Services (~20 yrs exp)',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_SERVICE_LINKS = {
  realEstate: [
    { label: 'Residential Property Assistance', href: '/real-estate' },
    { label: 'Commercial Property Consultation', href: '/real-estate' },
    { label: 'Plot & Land Deals (Hyderabad)', href: '/real-estate' },
  ],
  rtoServices: [
    { label: 'Driving Licence Assistance (TS & AP)', href: '/rto-services' },
    { label: 'Vehicle RC & Ownership Transfers', href: '/rto-services' },
    { label: 'NOC Assistance & Transfers', href: '/rto-services' },
    { label: 'Vehicle Tax & Fitness Documentation', href: '/rto-services' },
  ],
  company: [
    { label: 'About TMR Services', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
};
