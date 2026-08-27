import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Car, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';
import { CTA_MESSAGES } from '@/config/contact';

export const HeroSection: React.FC = () => {
  return (
    <Section spacing="lg" background="navy" className="overflow-hidden relative border-b border-brand-navy-800">
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#DEC07C_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      {/* Decorative ambient background blur */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-emerald-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="gold" withDot>
                TMR REAL ESTATE & RTO SERVICES
              </Badge>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] text-balance">
              Trusted Assistance for Property & Vehicle Services
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-balance">
              Real estate brokerage assistance across <strong>Hyderabad</strong> and approximately 20 years of licence and vehicle-related documentation support across <strong>Telangana & Andhra Pradesh</strong>.
            </p>

            {/* Primary & Secondary Conversion Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
              <WhatsAppCTA
                size="lg"
                fullWidth
                className="sm:w-auto"
                message={CTA_MESSAGES.home.hero}
              >
                WhatsApp TMR
              </WhatsAppCTA>

              <PhoneCTA size="lg" variant="gold" fullWidth className="sm:w-auto">
                Call TMR Directly
              </PhoneCTA>
            </div>

            {/* Quick Feature Tickers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>Direct Personal Assistance</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                <span>Direct Consultant Communication</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>Hyderabad & TS/AP Wide</span>
              </span>
            </div>
          </div>

          {/* Right Column: Two Direct Service Entry Points */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-1 rounded-2xl bg-gradient-to-b from-brand-gold-500/30 to-brand-navy-700/40 p-4 sm:p-6 backdrop-blur-sm border border-brand-navy-700/80 shadow-elevated space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy-700/80 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-300">
                  How Can We Help?
                </span>
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald-400" /> 20+ Years Experience
                </span>
              </div>

              {/* Service Entry 1: Real Estate */}
              <Link
                to="/real-estate"
                className="group block p-4 rounded-xl bg-brand-navy-900/90 border border-brand-navy-700 hover:border-brand-gold-500/80 hover:bg-brand-navy-800/90 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold-500/20 text-brand-gold-400 flex items-center justify-center shrink-0 border border-brand-gold-500/30 group-hover:scale-105 transition-transform">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading font-bold text-base text-white group-hover:text-brand-gold-300 transition-colors">
                        Real Estate Services
                      </h2>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-gold-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Property buying, selling, and rental assistance in Hyderabad (~5 years experience).
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-brand-gold-400">
                      <MapPin className="w-3 h-3" /> Hyderabad Focus
                    </div>
                  </div>
                </div>
              </Link>

              {/* Service Entry 2: RTO Services */}
              <Link
                to="/rto-services"
                className="group block p-4 rounded-xl bg-brand-navy-900/90 border border-brand-navy-700 hover:border-brand-emerald-500/80 hover:bg-brand-navy-800/90 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-brand-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <Car className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading font-bold text-base text-white group-hover:text-brand-emerald-300 transition-colors">
                        RTO & Vehicle Services
                      </h2>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-emerald-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      Licence, RC transfer, NOC assistance & documentation (~20 years experience).
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-brand-emerald-400">
                      <MapPin className="w-3 h-3" /> Telangana & Andhra Pradesh
                    </div>
                  </div>
                </div>
              </Link>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                Direct guidance by <strong>{BUSINESS_DETAILS.owner}</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
