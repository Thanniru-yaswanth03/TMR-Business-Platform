import React from 'react';
import { MessageSquare, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';

export const ContactHero: React.FC = () => {
  return (
    <Section spacing="lg" background="navy" className="border-b border-brand-navy-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5B700_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10 text-left space-y-6">
        <div className="inline-flex items-center gap-2">
          <Badge variant="gold" withDot icon={<MessageSquare className="w-3.5 h-3.5" />}>
            DIRECT CONTACT & CONSULTATION
          </Badge>
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Connect With TMR Directly
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Speak directly with <strong>{BUSINESS_DETAILS.owner}</strong> for real estate brokerage in Hyderabad and driving licence / vehicle document assistance across Telangana and Andhra Pradesh.
          </p>
        </div>

        {/* Quick Conversions */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <WhatsAppCTA
            size="lg"
            message="Hello TMR, I would like to enquire about your services."
          >
            WhatsApp TMR Directly
          </WhatsAppCTA>

          <PhoneCTA size="lg" variant="gold">
            Call TMR
          </PhoneCTA>
        </div>

        {/* Highlight Tickers */}
        <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium border-t border-brand-navy-800/80">
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
            <span>Direct Phone & WhatsApp Support</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
            <span>Hyderabad (RE) • TS & AP (RTO)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
            <span>Personalized 1-on-1 Communication</span>
          </span>
        </div>
      </Container>
    </Section>
  );
};
