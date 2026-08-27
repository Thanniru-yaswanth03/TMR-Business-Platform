import React from 'react';
import {
  Building,
  Home,
  Landmark,
  Compass,
  Trees,
  Briefcase,
  Key,
  HelpCircle,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { CTA_MESSAGES } from '@/config/contact';

export const PropertyCategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'Apartments / Flats',
      subtitle: 'Residential High-Rise & Standalone',
      description: 'Gated community flats, premium high-rises, and standalone residential apartments across Hyderabad.',
      icon: <Building className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Apartments',
    },
    {
      title: 'Villas & Gated Communities',
      subtitle: 'Luxury & Gated Villa Projects',
      description: 'Independent villas, duplexes, and triplex homes in secure residential communities.',
      icon: <Home className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Villas',
    },
    {
      title: 'Independent Houses',
      subtitle: 'Individual Residential Properties',
      description: 'Standalone residential houses, multi-story buildings, and owner-built residences.',
      icon: <Landmark className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Houses',
    },
    {
      title: 'Residential Plots',
      subtitle: 'Open Plots & Approved Layouts',
      description: 'Open residential plots and layout plots in growing residential corridors of Hyderabad.',
      icon: <Compass className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
      tag: 'Plots',
    },
    {
      title: 'Agricultural Land',
      subtitle: 'Farmlands & Peri-Urban Land',
      description: 'Agricultural plots, farm land parcels, and peri-urban land tracts in surrounding zones.',
      icon: <Trees className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
      tag: 'Land',
    },
    {
      title: 'Commercial Properties',
      subtitle: 'Offices, Shops & Buildings',
      description: 'Commercial office spaces, retail shops, and commercial buildings for business or investment.',
      icon: <Briefcase className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Commercial',
    },
    {
      title: 'Rentals & Leases',
      subtitle: 'Residential & Commercial Rentals',
      description: 'Rental accommodation for families, working professionals, and business tenants.',
      icon: <Key className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Rentals',
    },
    {
      title: 'Custom Requirements',
      subtitle: 'Specific & Unique Property Needs',
      description: 'Have a specific location, plot size, or property requirement? Discuss directly with TMR.',
      icon: <HelpCircle className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Custom',
    },
  ];

  return (
    <Section spacing="lg" background="surface">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Explore the property categories TMR can assist with across Hyderabad based on your specific requirements."
        >
          Property Types We Can Assist With
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              variant="default"
              className="bg-white border border-slate-200 shadow-2xs hover:shadow-card hover:border-brand-gold-400/70 transition-all flex flex-col justify-between"
            >
              <CardHeader className="space-y-2.5 pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surface-muted border border-slate-200/80 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {cat.tag}
                  </span>
                </div>
                <CardTitle className="text-base text-brand-navy-950 pt-1">
                  {cat.title}
                </CardTitle>
                <p className="text-xs font-semibold text-brand-gold-800">
                  {cat.subtitle}
                </p>
              </CardHeader>

              <CardContent className="pt-1 pb-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informational Guidance Notice */}
        <div className="p-4 rounded-xl bg-brand-navy-900 text-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto border border-brand-navy-800">
          <p className="text-center sm:text-left leading-relaxed">
            * <strong>Note on Inventory:</strong> TMR operates on direct requirement matchmaking. Property availability, specifications, and prices are shared upon direct inquiry via WhatsApp or phone.
          </p>
          <WhatsAppCTA
            size="sm"
            variant="emerald"
            className="shrink-0"
            message={CTA_MESSAGES.realEstate.general}
          >
            Ask on WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </Section>
  );
};
