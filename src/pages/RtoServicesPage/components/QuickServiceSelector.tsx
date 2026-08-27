import React, { useState } from 'react';
import { UserCheck, Car, FileText, FileBadge2, HelpCircle, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

interface ServiceOption {
  id: string;
  name: string;
  shortLabel: string;
  icon: React.ReactNode;
  tag: string;
  headline: string;
  description: string;
  examples: string[];
  whatsappMessage: string;
}

export const QuickServiceSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('dl');

  const options: ServiceOption[] = [
    {
      id: 'dl',
      name: 'Driving Licence',
      shortLabel: 'Licence Services',
      icon: <UserCheck className="w-5 h-5" aria-hidden="true" />,
      tag: 'Learner & Permanent DL',
      headline: 'Driving Licence Assistance (TS & AP)',
      description: 'Guidance and procedural assistance for new learner licences, permanent licences, badge endorsements, renewals, and duplicate licence applications.',
      examples: [
        'Learner Licence (LLR) slot booking & form assistance',
        'Permanent Driving Licence (DL) procedural guidance',
        'Licence renewal, duplicate DL, and address updates',
        'Name/details correction & class endorsements (MCWG, LMV)',
      ],
      whatsappMessage: 'Hello TMR, I need assistance with a driving licence service. Please let me know the process and requirements.',
    },
    {
      id: 'reg',
      name: 'Vehicle Registration',
      shortLabel: 'Registration',
      icon: <Car className="w-5 h-5" aria-hidden="true" />,
      tag: 'New & Re-registration',
      headline: 'Vehicle Registration Assistance',
      description: 'Documentation checking and procedural assistance for new vehicle registrations, state road taxes, and re-registration paperwork.',
      examples: [
        'New two-wheeler & four-wheeler registration paperwork',
        'Re-registration for vehicles older than 15 years',
        'State tax calculation guidance and challan documentation',
        'Commercial transport vehicle registration paperwork',
      ],
      whatsappMessage: 'Hello TMR, I need assistance with vehicle registration. Please let me know the process and requirements.',
    },
    {
      id: 'rc',
      name: 'RC / Ownership',
      shortLabel: 'RC & Ownership',
      icon: <FileText className="w-5 h-5" aria-hidden="true" />,
      tag: 'Transfers & Hypothecation',
      headline: 'Vehicle RC & Ownership Transfer Assistance',
      description: 'Step-by-step assistance for ownership change (buyer/seller transfer), duplicate RC book issuance, and hypothecation addition/removal.',
      examples: [
        'Vehicle ownership transfer (Buyer & Seller Form 29/30 assistance)',
        'Hypothecation endorsement (Bank loan addition/removal Form 35)',
        'Duplicate RC smart card application for lost/damaged cards',
        'Address change & correction on existing RC records',
      ],
      whatsappMessage: 'Hello TMR, I need assistance with RC/ownership-related work. Please let me know the process and requirements.',
    },
    {
      id: 'noc',
      name: 'NOC Assistance',
      shortLabel: 'State NOC',
      icon: <FileBadge2 className="w-5 h-5" aria-hidden="true" />,
      tag: 'Interstate Transfers',
      headline: 'State NOC (No Objection Certificate) Assistance',
      description: 'Procedural support for obtaining state NOC certificates (Form 28) for vehicles moving between Telangana, Andhra Pradesh, and other states.',
      examples: [
        'Telangana to Andhra Pradesh vehicle transfer NOC',
        'Andhra Pradesh to Telangana vehicle transfer NOC',
        'Interstate relocation clearance documentation assistance',
        'Crime records & non-involvement verification guidance',
      ],
      whatsappMessage: 'Hello TMR, I need assistance with an NOC-related vehicle service. Please let me know the process and requirements.',
    },
    {
      id: 'other',
      name: 'Other Vehicle Service',
      shortLabel: 'Other Services',
      icon: <HelpCircle className="w-5 h-5" aria-hidden="true" />,
      tag: 'Fitness, Permits & Taxes',
      headline: 'Other Vehicle & Transport Documentation',
      description: 'Support for commercial vehicle fitness certificates, state transport permits, pending traffic challans, and road tax documentation.',
      examples: [
        'Commercial vehicle fitness certificate renewal guidance',
        'Transport & goods carriage permit documentation',
        'Road tax receipt retrieval and payment guidance',
        'General transport department procedure consultation',
      ],
      whatsappMessage: 'Hello TMR, I need assistance with a vehicle-related service in TS/AP. Please let me know the process.',
    },
  ];

  const currentOption = options.find((opt) => opt.id === selectedId) || options[0];

  return (
    <Section spacing="lg" background="warm-white" className="border-b border-slate-200/80">
      <Container size="xl" className="space-y-10">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Select your specific transport documentation need to view process details and start an instant WhatsApp inquiry."
        >
          What Do You Need Help With?
        </Heading>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto" role="tablist" aria-label="RTO Service Selector">
          {options.map((opt) => {
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`service-panel-${opt.id}`}
                id={`service-tab-${opt.id}`}
                onClick={() => setSelectedId(opt.id)}
                className={`px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 ${
                  isSelected
                    ? 'bg-brand-navy-950 text-white shadow-card border border-brand-navy-800'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-brand-navy-950 border border-slate-200'
                }`}
              >
                <span className={isSelected ? 'text-brand-emerald-400' : 'text-slate-500'}>
                  {opt.icon}
                </span>
                <span>{opt.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Panel Card */}
        <div
          role="tabpanel"
          id={`service-panel-${currentOption.id}`}
          aria-labelledby={`service-tab-${currentOption.id}`}
          className="max-w-4xl mx-auto"
        >
          <Card variant="accent-navy" className="bg-white shadow-card p-6 sm:p-8 space-y-6">
            <CardHeader className="p-0 border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center border border-brand-navy-200 shrink-0">
                    {currentOption.icon}
                  </div>
                  <div>
                    <Badge variant="navy" withDot>
                      {currentOption.tag}
                    </Badge>
                    <CardTitle className="text-xl sm:text-2xl text-brand-navy-950 pt-1">
                      {currentOption.headline}
                    </CardTitle>
                  </div>
                </div>
                <Badge variant="outline">Telangana & AP</Badge>
              </div>

              <CardDescription className="text-sm text-slate-600 leading-relaxed pt-1">
                {currentOption.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 block">
                Typical Areas of Assistance:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentOption.examples.map((ex) => (
                  <div key={ex} className="p-3 rounded-lg bg-surface-muted border border-slate-200/70 text-xs text-slate-700 flex items-start gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-brand-emerald-600 shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="p-0 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                Ready to begin? Contact TMR directly on WhatsApp with your vehicle/licence details.
              </p>

              <WhatsAppCTA
                size="md"
                variant="emerald"
                message={currentOption.whatsappMessage}
                className="w-full sm:w-auto shrink-0"
              >
                Inquire on WhatsApp
              </WhatsAppCTA>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
