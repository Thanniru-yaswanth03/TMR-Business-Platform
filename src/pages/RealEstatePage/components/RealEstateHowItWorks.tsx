import React from 'react';
import { MessageSquareText, Search, MapPinCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { CTA_MESSAGES } from '@/config/contact';

export const RealEstateHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'Send a quick message on WhatsApp or call to share your preferred location, property type, budget range, and buy/sell/rent requirements.',
      icon: <MessageSquareText className="w-6 h-6 text-brand-gold-600" aria-hidden="true" />,
      checklist: [
        'Preferred Hyderabad location or zone',
        'Property category (flat, villa, plot, commercial)',
        'Target budget or expected selling price',
        'Specific timeline or move-in preference',
      ],
    },
    {
      step: '02',
      title: 'Discuss Suitable Opportunities',
      desc: 'We review matching opportunities and discuss realistic market options, title details, and property considerations directly with you.',
      icon: <Search className="w-6 h-6 text-brand-navy-600" aria-hidden="true" />,
      checklist: [
        'Honest market price review & feedback',
        'Discussion of relevant property options',
        'Documentation checks & basic verification',
        'Direct consultation without automated bots',
      ],
    },
    {
      step: '03',
      title: 'Take the Next Step',
      desc: 'When an opportunity aligns with your requirements, we coordinate directly with owners/buyers for property discussions and site visits.',
      icon: <MapPinCheck className="w-6 h-6 text-brand-emerald-600" aria-hidden="true" />,
      checklist: [
        'Site visit scheduling & in-person coordination',
        'Direct buyer-seller communication facilitation',
        'Assistance through final paperwork steps',
        'Clear, transparent brokerage process',
      ],
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
          subtitle="A clear, personalized 3-step approach to finding, selling, or renting property in Hyderabad."
        >
          How TMR Helps With Real Estate
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <Card
              key={item.step}
              variant="default"
              className="bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden flex flex-col justify-between"
            >
              {/* Step indicator tag */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-brand-navy-950 text-brand-gold-400 font-heading font-extrabold text-xs rounded-bl-xl border-l border-b border-brand-navy-800">
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

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {item.checklist.map((c) => (
                        <li key={c} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-brand-gold-600 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <WhatsAppCTA
            size="lg"
            message={CTA_MESSAGES.realEstate.hero}
          >
            Start Property Discussion
          </WhatsAppCTA>
        </div>
      </Container>
    </Section>
  );
};
