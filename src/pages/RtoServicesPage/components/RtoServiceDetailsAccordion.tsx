import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, MessageSquare, ShieldAlert } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  whatIsIt: string;
  whatTmrAssistsWith: string[];
  whatYouShouldDoNext: string;
  whatsappMessage: string;
}

export const RtoServiceDetailsAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string>('dl-details');

  const details: ServiceDetail[] = [
    {
      id: 'dl-details',
      title: 'Driving Licence (LLR, DL, Renewals & Duplicate)',
      category: 'Licence Guidance',
      whatIsIt: 'Official state authorization to drive motor vehicles (two-wheelers, four-wheelers, or commercial vehicles) issued by state transport authorities in Telangana and Andhra Pradesh.',
      whatTmrAssistsWith: [
        'Form filling and portal application processing',
        'Slot scheduling for computer tests (LLR) and driving tests (DL)',
        'Checklist preparation for address proof, age proof, and medical declarations',
        'Guidance on renewal for expired licences and duplicate DL for lost cards',
      ],
      whatYouShouldDoNext: 'Contact TMR on WhatsApp or phone with your current licence details or age/residency details to receive the current document checklist and slot schedule guidance.',
      whatsappMessage: 'Hello TMR, I would like guidance on driving licence requirements for my case.',
    },
    {
      id: 'rc-transfer-details',
      title: 'Vehicle Ownership Transfer (Buyer & Seller Form 29/30)',
      category: 'RC & Ownership',
      whatIsIt: 'The formal legal transfer of vehicle registration from the previous registered owner to the new buyer upon private sale or purchase of a pre-owned vehicle.',
      whatTmrAssistsWith: [
        'Form 29 and Form 30 preparation with buyer & seller signatures',
        'Original RC smart card submission checking and tax clearance guidance',
        'Hypothecation clearance (Form 35) coordination if the vehicle had an active loan',
        'State transport portal submission and tracking support',
      ],
      whatYouShouldDoNext: 'Share the vehicle registration number and whether the vehicle has an active bank loan. TMR will outline the necessary NOC and seller signatures required.',
      whatsappMessage: 'Hello TMR, I would like to discuss a vehicle ownership transfer in TS/AP.',
    },
    {
      id: 'noc-details',
      title: 'Interstate State Transfer NOC (Form 28)',
      category: 'NOC & Relocation',
      whatIsIt: 'A No Objection Certificate issued by the registered RTO granting permission to re-register the vehicle in another state or jurisdiction (e.g. moving between Telangana and Andhra Pradesh).',
      whatTmrAssistsWith: [
        'Form 28 preparation and documentation bundle verification',
        'Crime records / NCRB clearance documentation guidance',
        'Road tax receipt verification and engine/chassis pencil print guidance',
        'Application submission guidance at the jurisdiction transport circle',
      ],
      whatYouShouldDoNext: 'Contact TMR with your vehicle registration number and target destination state/circle to determine the specific documentation pathway.',
      whatsappMessage: 'Hello TMR, I need assistance with an interstate vehicle NOC certificate.',
    },
    {
      id: 'fitness-permits-details',
      title: 'Commercial Vehicle Fitness & Transport Permits',
      category: 'Commercial Transport',
      whatIsIt: 'Mandatory statutory compliance inspections and permits for commercial transport vehicles, goods carriers, and passenger buses operating within or across state borders.',
      whatTmrAssistsWith: [
        'Fitness certificate renewal slot scheduling and document checking',
        'State transport permit application and renewal paperwork',
        'Road tax assessment guidance and pending challan settlement steps',
        'Pollution Under Control (PUC) and vehicle insurance record verification',
      ],
      whatYouShouldDoNext: 'Share your commercial vehicle category, current permit expiry, and registration state with TMR for customized procedural assistance.',
      whatsappMessage: 'Hello TMR, I need assistance with commercial vehicle fitness and permits.',
    },
  ];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <Section spacing="lg" background="warm-white" className="border-t border-b border-slate-200/80">
      <Container size="lg" className="space-y-10">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Detailed guidance on common transport office procedures, what TMR facilitates, and what you should do next."
        >
          Service Guidance & Step-by-Step Overview
        </Heading>

        {/* Dynamic Accordions */}
        <div className="space-y-4">
          {details.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl shadow-subtle overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`content-${item.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-emerald-700">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy-950">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-2 rounded-lg bg-surface-muted border border-slate-200 shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div id={`content-${item.id}`} className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 space-y-5 text-xs sm:text-sm text-slate-700">
                    {/* What is it */}
                    <div className="space-y-1.5">
                      <strong className="text-brand-navy-950 font-bold block text-xs uppercase tracking-wider">
                        1. What the Service Is:
                      </strong>
                      <p className="text-slate-600 leading-relaxed">
                        {item.whatIsIt}
                      </p>
                    </div>

                    {/* What TMR Assists With */}
                    <div className="space-y-2">
                      <strong className="text-brand-navy-950 font-bold block text-xs uppercase tracking-wider">
                        2. What TMR Assists With:
                      </strong>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.whatTmrAssistsWith.map((pt) => (
                          <li key={pt} className="p-2.5 rounded-lg bg-surface-muted border border-slate-200/70 flex items-start gap-2">
                            <span className="text-brand-emerald-600 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you should do next */}
                    <div className="p-3.5 rounded-xl bg-brand-navy-50/60 border border-brand-navy-100 space-y-1.5">
                      <strong className="text-brand-navy-950 font-bold block text-xs uppercase tracking-wider">
                        3. What You Should Do Next:
                      </strong>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.whatYouShouldDoNext}
                      </p>
                    </div>

                    {/* Contextual Action */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-brand-emerald-600" /> Direct WhatsApp Consultation
                      </span>
                      <WhatsAppCTA
                        size="sm"
                        variant="emerald"
                        message={item.whatsappMessage}
                      >
                        Ask About This Service
                      </WhatsAppCTA>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Document Warning Note */}
        <div className="p-4 rounded-xl bg-brand-navy-900 text-slate-300 text-xs flex items-start gap-3 max-w-3xl mx-auto border border-brand-navy-800">
          <AlertCircle className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            <strong>Important Requirement Notice:</strong> Required documents can vary depending on the service, vehicle category, and applicant circumstances. Contact TMR for current requirements for your specific case.
          </p>
        </div>

        {/* Regulatory Governance Statement */}
        <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-brand-gold-500 shrink-0" />
          <span>Official document issuance and testing approvals are governed strictly by state transport departments.</span>
        </div>
      </Container>
    </Section>
  );
};
