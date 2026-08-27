import React from 'react';
import { Award, MessageSquare, Compass, UserCheck, Layers } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BUSINESS_DETAILS } from '@/config/env';

export const WhyTmrRealEstate: React.FC = () => {
  const points = [
    {
      title: '5+ Years Real Estate Experience',
      desc: 'Hands-on brokerage experience in Hyderabad helping buyers and sellers negotiate authentic property transactions.',
      icon: <Award className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: '5+ Years',
    },
    {
      title: 'Direct Broker Communication',
      desc: `Direct access to ${BUSINESS_DETAILS.owner} on phone or WhatsApp without call center queues, desk delays, or middlemen.`,
      icon: <MessageSquare className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Direct Access',
    },
    {
      title: 'Dedicated Hyderabad Focus',
      desc: 'Focused brokerage coverage dedicated exclusively to residential and commercial real estate across Hyderabad.',
      icon: <Compass className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Hyderabad Focus',
    },
    {
      title: 'Personalized Requirement Discussion',
      desc: 'We review your specific budget, property category, and location preferences before discussing suitable matching opportunities.',
      icon: <UserCheck className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
      tag: 'Personalized',
    },
    {
      title: 'Comprehensive Transaction Support',
      desc: 'Assisting buyers, sellers, landlords, and tenants with purchase, sale, rental, and documentation checking.',
      icon: <Layers className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Buy / Sell / Rent',
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
          subtitle="Built on personal accountability, direct consultation, and authentic local real estate experience."
        >
          Why Work With TMR for Real Estate
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <Card
              key={p.title}
              variant="default"
              className={`bg-white border border-slate-200 shadow-2xs hover:shadow-card hover:border-brand-gold-400/60 transition-all flex flex-col justify-between ${
                idx === points.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="space-y-3 pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surface-muted border border-slate-200/80 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy-900 bg-brand-navy-50 px-2 py-0.5 rounded border border-brand-navy-100">
                    {p.tag}
                  </span>
                </div>
                <CardTitle className="text-base text-brand-navy-950 pt-1">
                  {p.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-1 pb-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
