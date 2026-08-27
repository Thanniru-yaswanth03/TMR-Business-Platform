import React from 'react';
import { Award, Compass, MessageSquare, UserCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BUSINESS_DETAILS } from '@/config/env';

export const WhyTmrSection: React.FC = () => {
  const values = [
    {
      title: 'Decades of Proven Experience',
      desc: `Over 20 years of hands-on licence and vehicle documentation experience paired with ~5 years of active real estate brokerage in Hyderabad.`,
      icon: <Award className="w-6 h-6 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Experience',
    },
    {
      title: 'Deep Local Understanding',
      desc: 'Extensive insight into Hyderabad micro-markets, property documentation requirements, and RTO jurisdictional processes across TS and AP.',
      icon: <Compass className="w-6 h-6 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Local Insight',
    },
    {
      title: 'Direct Personal Contact',
      desc: `Direct access to ${BUSINESS_DETAILS.owner} via phone or WhatsApp. No automated call centers, middleman markups, or outsourced desks.`,
      icon: <MessageSquare className="w-6 h-6 text-brand-emerald-600" aria-hidden="true" />,
      tag: 'No Middlemen',
    },
    {
      title: 'Guided Step-by-Step Assistance',
      desc: 'Personalized document checks, form preparation, and process clarity so you avoid repeated visits and procedural confusion.',
      icon: <UserCheck className="w-6 h-6 text-brand-gold-600" aria-hidden="true" />,
      tag: '1-on-1 Guidance',
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
          subtitle="Built on authentic relationships, honest guidance, and direct client communication."
        >
          Why Choose TMR Services
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v.title} variant="default" className="flex flex-col justify-between hover:border-brand-gold-400/60 transition-all">
              <CardHeader className="space-y-3 pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-surface-muted border border-slate-200/80 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold-800 bg-brand-gold-50 px-2 py-0.5 rounded border border-brand-gold-200/60">
                    {v.tag}
                  </span>
                </div>
                <CardTitle className="text-lg text-brand-navy-950 pt-1">
                  {v.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
