import React from 'react';
import { PhoneCall, FileText, CheckCircle2, Building2, Car } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact TMR Directly',
      desc: 'Send a message on WhatsApp or make a quick phone call explaining your property requirement or vehicle documentation query.',
      icon: <PhoneCall className="w-6 h-6 text-brand-gold-600" aria-hidden="true" />,
      realEstateTip: 'Share your property search or selling goals',
      rtoTip: 'Mention your licence or vehicle RC details',
    },
    {
      step: '02',
      title: 'Explain What You Need',
      desc: 'We review your specific location preferences, budget parameters, or document records to outline clear options and requirements.',
      icon: <FileText className="w-6 h-6 text-brand-navy-600" aria-hidden="true" />,
      realEstateTip: 'Locality preferences, budget & title checks',
      rtoTip: 'Required forms, state NOC assistance & slot schedule',
    },
    {
      step: '03',
      title: 'Get Guidance & Assistance',
      desc: 'Receive transparent, step-by-step facilitation and support until your property transaction or RTO documentation is completed.',
      icon: <CheckCircle2 className="w-6 h-6 text-brand-emerald-600" aria-hidden="true" />,
      realEstateTip: 'Buyer-seller matchmaking & deal advisory',
      rtoTip: 'Guidance through the application process',
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
          subtitle="A straightforward, hassle-free 3-step approach to getting the assistance you need."
        >
          How It Works
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => (
            <Card
              key={item.step}
              variant="default"
              className="bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden flex flex-col justify-between"
            >
              {/* Top Step Accent Header */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-brand-navy-900 text-brand-gold-400 font-heading font-extrabold text-sm rounded-bl-xl border-l border-b border-brand-navy-700">
                STEP {item.step}
              </div>

              <div>
                <CardHeader className="space-y-3 pt-8 pb-3">
                  <div className="w-12 h-12 rounded-xl bg-surface-muted border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-brand-navy-950">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-1">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-brand-gold-900 font-medium bg-brand-gold-50/60 p-2 rounded-lg border border-brand-gold-200/50">
                      <Building2 className="w-3.5 h-3.5 text-brand-gold-600 shrink-0" aria-hidden="true" />
                      <span>{item.realEstateTip}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-emerald-900 font-medium bg-emerald-50/60 p-2 rounded-lg border border-emerald-200/50">
                      <Car className="w-3.5 h-3.5 text-brand-emerald-600 shrink-0" aria-hidden="true" />
                      <span>{item.rtoTip}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
