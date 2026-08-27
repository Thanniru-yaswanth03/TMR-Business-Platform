import React from 'react';
import { UserCheck, Car, FileText, FileBadge2, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const RtoServiceCategories: React.FC = () => {
  const categories = [
    {
      id: 'licence',
      title: 'Driving Licence Services',
      tag: 'Licence Assistance',
      icon: <UserCheck className="w-6 h-6 text-brand-emerald-700" aria-hidden="true" />,
      description: 'End-to-end guidance for individual driver licences across Telangana and Andhra Pradesh.',
      items: [
        "Learner's Licence (LLR) application assistance",
        'Permanent Driving Licence (DL) procedural guidance',
        'Licence renewal & expired DL assistance',
        'Duplicate licence assistance for lost/damaged cards',
        'Address change & personal details correction',
        'Additional vehicle class/category endorsements',
      ],
      whatsappMsg: 'Hello TMR, I need assistance with a driving licence service in TS/AP.',
      cta: 'Licence Inquiry',
    },
    {
      id: 'registration',
      title: 'Vehicle Registration',
      tag: 'New & Renewal',
      icon: <Car className="w-6 h-6 text-brand-navy-700" aria-hidden="true" />,
      description: 'Registration paperwork assistance for private two-wheelers, four-wheelers, and commercial vehicles.',
      items: [
        'New vehicle registration documentation assistance',
        'Re-registration assistance for vehicles aged 15+ years',
        'Temporary to permanent registration paperwork',
        'State road tax calculation & challan documentation',
        'Commercial transport vehicle registration paperwork',
        'Vehicle chassis & engine number verification support',
      ],
      whatsappMsg: 'Hello TMR, I need assistance with vehicle registration documentation.',
      cta: 'Registration Inquiry',
    },
    {
      id: 'rc-ownership',
      title: 'RC & Ownership Services',
      tag: 'Transfers & Hypothecation',
      icon: <FileText className="w-6 h-6 text-brand-gold-700" aria-hidden="true" />,
      description: 'Ownership transfer and registration certificate services for vehicle buyers and sellers.',
      items: [
        'Vehicle ownership transfer assistance (Form 29 & 30)',
        'Duplicate RC smart card application assistance',
        'Hypothecation endorsement & cancellation (Form 35)',
        'Address correction on existing RC records',
        'Name correction on vehicle registration book',
        'Inter-district vehicle jurisdiction transfer assistance',
      ],
      whatsappMsg: 'Hello TMR, I need assistance with vehicle RC and ownership transfer.',
      cta: 'RC Transfer Inquiry',
    },
    {
      id: 'noc-other',
      title: 'NOC & Transport Services',
      tag: 'Interstate & Commercial',
      icon: <FileBadge2 className="w-6 h-6 text-brand-emerald-700" aria-hidden="true" />,
      description: 'Interstate state transfers, commercial vehicle permits, fitness documentation, and road taxes.',
      items: [
        'State transfer NOC assistance (Telangana to AP and vice versa)',
        'Commercial vehicle fitness certificate renewal assistance',
        'Goods and passenger transport permit assistance',
        'State road tax receipt & payment guidance',
        'Traffic challan retrieval and clearance guidance',
        'Pollution & insurance documentation checking',
      ],
      whatsappMsg: 'Hello TMR, I need assistance with an NOC or vehicle transport service.',
      cta: 'NOC / Permit Inquiry',
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
          subtitle="Explore the four primary categories of transport office and vehicle documentation services facilitated by TMR."
        >
          Core Service Categories
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              variant="default"
              className="bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <CardHeader className="border-b border-slate-100 pb-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surface-muted border border-slate-200 flex items-center justify-center shrink-0">
                      {cat.icon}
                    </div>
                    <Badge variant="navy" withDot>
                      {cat.tag}
                    </Badge>
                  </div>

                  <div>
                    <CardTitle className="text-xl sm:text-2xl text-brand-navy-950">
                      {cat.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-600 mt-1">
                      {cat.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 block">
                    Services Included:
                  </span>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="bg-slate-50/70 p-5 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Telangana & Andhra Pradesh
                </span>
                <WhatsAppCTA
                  size="sm"
                  variant="emerald"
                  message={cat.whatsappMsg}
                >
                  {cat.cta}
                </WhatsAppCTA>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
