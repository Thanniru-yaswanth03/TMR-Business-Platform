import React from 'react';
import { Car, ShieldAlert, CheckCircle2, MapPin } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';
import { CTA_MESSAGES } from '@/config/contact';

export const RtoHero: React.FC = () => {
  return (
    <Section spacing="lg" background="navy" className="overflow-hidden relative border-b border-brand-navy-800">
      {/* Subtle emerald dotted overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#2EAA66_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      {/* Decorative ambient glow */}
      <div
        className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-brand-emerald-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Primary Conversion */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" withDot icon={<Car className="w-3.5 h-3.5" />}>
                RTO & VEHICLE SERVICES • TELANGANA & ANDHRA PRADESH
              </Badge>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] text-balance">
              Driving Licence & Vehicle Service Assistance
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
              TMR provides assistance with driving licence and vehicle-related documentation across Telangana and Andhra Pradesh, backed by approximately 20 years of experience in this field.
            </p>

            {/* Primary & Secondary Conversion Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <WhatsAppCTA
                size="lg"
                fullWidth
                className="sm:w-auto"
                message={CTA_MESSAGES.rto.general}
              >
                WhatsApp TMR
              </WhatsAppCTA>

              <PhoneCTA size="lg" variant="gold" fullWidth className="sm:w-auto">
                Call TMR
              </PhoneCTA>
            </div>

            {/* Quick Fact Tickers */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                <span>~20 Years Licence/RTO Experience</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                <span>Telangana & Andhra Pradesh Coverage</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                <span>Direct Consultant Guidance</span>
              </span>
            </div>
          </div>

          {/* Right Column: Key Overview & Independence Notice Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-navy-900/90 border border-brand-navy-700/90 p-6 sm:p-8 backdrop-blur-sm shadow-elevated space-y-5">
              <div className="flex items-center justify-between border-b border-brand-navy-700/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-brand-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <Car className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald-300 block">
                      Licence & Vehicle Facilitation
                    </span>
                    <span className="text-sm font-bold text-white">
                      TS & AP Jurisdictions
                    </span>
                  </div>
                </div>
                <Badge variant="navy">20+ Yrs Exp</Badge>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-brand-navy-800/80 border border-brand-navy-700/70 space-y-1">
                  <span className="font-bold text-brand-gold-300 block uppercase tracking-wider text-[11px]">
                    Direct Guidance by {BUSINESS_DETAILS.owner}
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Step-by-step assistance for new licences, renewals, ownership transfers, state NOCs, and transport office documentation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-brand-navy-800/50 border border-brand-navy-700 text-slate-300">
                    <span className="font-semibold text-white block">Licence Services</span>
                    <span className="text-slate-400">LL, DL, Renewals, Duplicate</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-navy-800/50 border border-brand-navy-700 text-slate-300">
                    <span className="font-semibold text-white block">RC & NOC Work</span>
                    <span className="text-slate-400">Ownership transfer & NOCs</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-brand-navy-950 border border-brand-navy-800 flex items-start gap-2.5 text-[11px] text-slate-400 leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  TMR is an independent consultancy providing document guidance. Official tests, approvals, and issuance are governed strictly by state transport departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
