import React from 'react';
import { Building2, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';
import { CTA_MESSAGES } from '@/config/contact';

export const RealEstateHero: React.FC = () => {
  return (
    <Section spacing="lg" background="navy" className="overflow-hidden relative border-b border-brand-navy-800">
      {/* Subtle gold dotted grid pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#DEC07C_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      {/* Ambient decorative glow */}
      <div
        className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline and Direct Enquiries */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gold" withDot>
                REAL ESTATE • HYDERABAD
              </Badge>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] text-balance">
              Real Estate Assistance Across Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
              Looking to buy, sell, or rent property in Hyderabad? TMR provides direct brokerage and property assistance based on your specific requirements.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <WhatsAppCTA
                size="lg"
                fullWidth
                className="sm:w-auto"
                message={CTA_MESSAGES.realEstate.hero}
              >
                Discuss Your Requirement
              </WhatsAppCTA>

              <PhoneCTA size="lg" variant="gold" fullWidth className="sm:w-auto">
                Call TMR
              </PhoneCTA>
            </div>

            {/* Verified Fact Tickers */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>~5 Years Real Estate Experience</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>Hyderabad-Focused Brokerage</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>Direct Broker Communication</span>
              </span>
            </div>
          </div>

          {/* Right Column: Key Service Pillars Overview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-navy-900/90 border border-brand-navy-700/90 p-6 sm:p-8 backdrop-blur-sm shadow-elevated space-y-6">
              <div className="flex items-center justify-between border-b border-brand-navy-700/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center border border-brand-gold-500/30 shrink-0">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-300 block">
                      Local Property Advisory
                    </span>
                    <span className="text-sm font-bold text-white">
                      Hyderabad Market
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-400" /> Direct Broker
                </span>
              </div>

              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="p-3 rounded-xl bg-brand-navy-800/80 border border-brand-navy-700/70 space-y-1">
                  <span className="text-xs font-bold text-brand-gold-300 uppercase tracking-wider">
                    How Property Queries Work
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Share your budget, preferred zone, and property type directly with <strong>{BUSINESS_DETAILS.owner}</strong>. We discuss matching opportunities directly with you.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-brand-navy-800/50 border border-brand-navy-700 text-slate-300">
                    <span className="font-semibold text-white block">Buying & Selling</span>
                    <span className="text-[11px] text-slate-400">Residential & commercial</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-brand-navy-800/50 border border-brand-navy-700 text-slate-300">
                    <span className="font-semibold text-white block">Plots & Rentals</span>
                    <span className="text-[11px] text-slate-400">Documentation guidance</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center border-t border-brand-navy-700/80 pt-3">
                No public digital inventory • Opportunities discussed on 1-on-1 consultation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
