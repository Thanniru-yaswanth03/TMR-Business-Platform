import React from 'react';
import { ShoppingBag, Tag, KeyRound, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const RealEstateIntentPaths: React.FC = () => {
  const paths = [
    {
      id: 'buy',
      title: 'Buy Property',
      badge: 'Buyers',
      badgeVariant: 'gold' as const,
      icon: <ShoppingBag className="w-6 h-6 text-brand-gold-700" aria-hidden="true" />,
      description: 'Looking to purchase a home, villa, apartment, or land in Hyderabad? We help identify suitable options matching your budget and location.',
      points: [
        'Residential apartments, villas & independent houses',
        'Plot and layout identification across Hyderabad',
        'Direct connection with genuine property sellers',
        'Property document checking assistance',
      ],
      whatsappMessage: 'Hello TMR, I am looking to buy property in Hyderabad. I would like to discuss my requirements.',
      ctaLabel: 'Inquire to Buy Property',
    },
    {
      id: 'sell',
      title: 'Sell Property',
      badge: 'Property Owners',
      badgeVariant: 'navy' as const,
      icon: <Tag className="w-6 h-6 text-brand-navy-700" aria-hidden="true" />,
      description: 'Have a property in Hyderabad you wish to sell? We connect property owners directly with genuine buyers through localized brokerage.',
      points: [
        'Realistic market price discussion and guidance',
        'Matchmaking with qualified, active property buyers',
        'Direct negotiation and transaction coordination',
        'Assistance for plots, residential & commercial properties',
      ],
      whatsappMessage: 'Hello TMR, I have a property in Hyderabad that I would like to discuss for sale.',
      ctaLabel: 'Inquire to Sell Property',
    },
    {
      id: 'rent',
      title: 'Rent Property',
      badge: 'Tenants & Landlords',
      badgeVariant: 'emerald' as const,
      icon: <KeyRound className="w-6 h-6 text-brand-emerald-700" aria-hidden="true" />,
      description: 'Looking for residential rentals or commercial lease spaces in Hyderabad? We assist tenants and landlords with tenancy requirements.',
      points: [
        'Residential flats, apartments & gated community rentals',
        'Commercial office and retail shop space assistance',
        'Direct coordination between landlord and tenant',
        'Rental agreement facilitation and handoff',
      ],
      whatsappMessage: 'Hello TMR, I am looking for rental property in Hyderabad. I would like to discuss my requirements.',
      ctaLabel: 'Inquire for Rentals',
    },
  ];

  return (
    <Section spacing="lg" background="warm-white">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Choose the type of real estate assistance you need to start a personalized discussion on WhatsApp."
        >
          What Are You Looking For?
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {paths.map((path) => (
            <Card
              key={path.id}
              variant="default"
              className="flex flex-col justify-between h-full bg-white shadow-card hover:shadow-card-hover border-slate-200/90 transition-all"
            >
              <div>
                <CardHeader className="border-b border-slate-100 pb-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-muted border border-slate-200 flex items-center justify-center shrink-0">
                      {path.icon}
                    </div>
                    <Badge variant={path.badgeVariant} withDot>
                      {path.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-brand-navy-950 pt-1">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 block">
                    What We Assist With:
                  </span>
                  <ul className="space-y-2.5">
                    {path.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="bg-slate-50/70 p-5 border-t border-slate-100">
                <WhatsAppCTA
                  fullWidth
                  size="md"
                  variant={path.id === 'buy' ? 'gold' : path.id === 'sell' ? 'primary' : 'emerald'}
                  message={path.whatsappMessage}
                >
                  {path.ctaLabel}
                </WhatsAppCTA>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
