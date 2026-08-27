import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';
import { ShieldCheck, Building2, Car } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <Section spacing="xl" background="dark" className="relative overflow-hidden border-t border-brand-navy-800">
      {/* Background glow and subtle accent */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#DEC07C_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold-500/10 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <Container size="lg" className="relative z-10 text-center space-y-8">
        <div className="inline-flex items-center justify-center">
          <Badge variant="gold" withDot>
            Direct Assistance • No Middlemen
          </Badge>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
            Need Help with Property or Vehicle Services?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-balance">
            Connect directly with <strong>{BUSINESS_DETAILS.owner}</strong> for transparent property advisory in Hyderabad or prompt RTO document assistance across Telangana & Andhra Pradesh.
          </p>
        </div>

        {/* Primary and Secondary Action Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <WhatsAppCTA
            size="lg"
            message="Hello TMR Services, I need assistance with your services."
            className="shadow-lg hover:shadow-xl"
          >
            WhatsApp TMR Directly
          </WhatsAppCTA>

          <PhoneCTA
            size="lg"
            variant="gold"
            className="shadow-lg hover:shadow-xl"
          >
            {BUSINESS_DETAILS.contact.phone ? `Call ${BUSINESS_DETAILS.contact.phone}` : 'Call TMR Directly'}
          </PhoneCTA>
        </div>

        {/* Value Highlights */}
        <div className="pt-8 border-t border-brand-navy-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
            <span>Hyderabad Real Estate Brokerage (~5 yrs exp)</span>
          </span>
          <span className="flex items-center gap-2">
            <Car className="w-4 h-4 text-brand-emerald-400" aria-hidden="true" />
            <span>Telangana & AP RTO Assistance (~20 yrs exp)</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold-400" aria-hidden="true" />
            <span>Direct One-on-One Communication</span>
          </span>
        </div>
      </Container>
    </Section>
  );
};
