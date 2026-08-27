import React from 'react';
import { PhoneCall, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const RtoHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell TMR What You Need',
      desc: 'Send a quick WhatsApp message or call explaining your vehicle registration, driving licence, RC transfer, or NOC requirement.',
      icon: <PhoneCall className="w-6 h-6 text-brand-gold-600" aria-hidden="true" />,
      checklist: [
        'State your vehicle type or licence category',
        'Specify your location (Telangana or Andhra Pradesh)',
        'Mention any existing application or document status',
      ],
    },
    {
      step: '02',
      title: 'Get Guidance on the Process',
      desc: 'We outline the necessary forms, current document checklists, applicable state fees, and slot booking schedules for your specific case.',
      icon: <FileText className="w-6 h-6 text-brand-navy-600" aria-hidden="true" />,
      checklist: [
        'Tailored document verification guidance',
        'Form preparation & checklist validation',
        'Clear explanation of official transport procedures',
      ],
    },
    {
      step: '03',
      title: 'Complete the Required Process',
      desc: 'Follow the guided application steps, slot attendance (where required by government rules), and documentation handoff smoothly.',
      icon: <CheckCircle2 className="w-6 h-6 text-brand-emerald-600" aria-hidden="true" />,
      checklist: [
        'Assistance until procedure completion',
        'Direct coordination for re-submissions if needed',
        'No confusion, duplicate trips, or middleman delays',
      ],
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
          subtitle="A clear, hassle-free 3-step process to navigating transport office documentation."
        >
          How It Works
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <Card
              key={item.step}
              variant="default"
              className="bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden flex flex-col justify-between"
            >
              {/* Step Tag */}
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

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      What to Expect:
                    </span>
                    <ul className="space-y-1">
                      {item.checklist.map((c) => (
                        <li key={c} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-brand-emerald-600 font-bold">•</span>
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

        <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 text-center text-xs text-slate-600 max-w-2xl mx-auto flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-brand-navy-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-left">
            * Official test assessments, driving evaluations, statutory approvals, and physical document issuance are managed exclusively by the relevant state transport authorities of Telangana and Andhra Pradesh.
          </p>
        </div>

        <div className="text-center pt-2">
          <WhatsAppCTA
            size="lg"
            message="Hello TMR, I would like to get started with an RTO documentation service."
          >
            Start Your RTO Inquiry
          </WhatsAppCTA>
        </div>
      </Container>
    </Section>
  );
};
