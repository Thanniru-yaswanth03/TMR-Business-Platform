import React from 'react';
import { Award, MessageSquare, UserCheck, MapPin, FileCheck2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { BUSINESS_DETAILS } from '@/config/env';

export const WhyTmrRtoSection: React.FC = () => {
  const reasons = [
    {
      title: '~20 Years Licence & RTO Experience',
      desc: 'Two decades of practical experience understanding transport office workflows, statutory forms, and procedural nuances across TS and AP.',
      icon: <Award className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
      tag: '20+ Years Exp',
    },
    {
      title: 'Direct Personal Communication',
      desc: `Direct consultation with ${BUSINESS_DETAILS.owner} on phone or WhatsApp. No automated call center queues, middleman delays, or outsourced desks.`,
      icon: <MessageSquare className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Direct Contact',
    },
    {
      title: '1-on-1 Procedural Guidance',
      desc: 'Step-by-step assistance with document checklists and application filing to prevent repeated visits, rejections, and bureaucratic confusion.',
      icon: <UserCheck className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
      tag: 'Personalized',
    },
    {
      title: 'Telangana & AP Regional Coverage',
      desc: 'Assisting applicants and vehicle owners across transport offices in both Telangana and Andhra Pradesh jurisdictions.',
      icon: <MapPin className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
      tag: 'TS + AP Wide',
    },
    {
      title: 'Accurate Documentation Guidance',
      desc: 'Up-to-date guidance on required forms, state road tax calculations, NOC paperwork, and slot booking schedules.',
      icon: <FileCheck2 className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
      tag: 'Documentation',
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
          subtitle="Built on personal accountability, authentic experience, and clear procedural guidance without false claims."
        >
          Why Choose TMR for RTO Assistance
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <Card
              key={r.title}
              variant="default"
              className={`bg-white border border-slate-200 shadow-2xs hover:shadow-card hover:border-brand-emerald-400/60 transition-all flex flex-col justify-between ${
                idx === reasons.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="space-y-3 pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surface-muted border border-slate-200/80 flex items-center justify-center">
                    {r.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {r.tag}
                  </span>
                </div>
                <CardTitle className="text-base text-brand-navy-950 pt-1">
                  {r.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-1 pb-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {r.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
