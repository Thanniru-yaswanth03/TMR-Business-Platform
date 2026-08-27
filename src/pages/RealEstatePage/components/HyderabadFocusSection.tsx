import React from 'react';
import { MapPin, Building2, ShieldCheck, Compass } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';
import { CTA_MESSAGES } from '@/config/contact';

export const HyderabadFocusSection: React.FC = () => {
  return (
    <Section spacing="lg" background="surface">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Dedicated to property buyers, sellers, and tenants throughout the Hyderabad metropolitan region."
        >
          Hyderabad Real Estate Focus
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Column / Focus Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge variant="gold" withDot>
                  Primary Service Region
                </Badge>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy-950 leading-snug">
                Local Brokerage Centered in Hyderabad
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Real estate decisions in Hyderabad require local market familiarity, reliable document checks, and direct communication. With approximately 5 years of active market experience, <strong>{BUSINESS_DETAILS.owner}</strong> provides dedicated brokerage assistance across residential and commercial property categories throughout Hyderabad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-brand-gold-700 font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Broad Hyderabad Coverage</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assistance with residential properties, plots, agricultural land, and commercial units across Hyderabad.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-brand-navy-700 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Matchmaking</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connecting genuine buyers and sellers with transparent deal advisory and personal accountability.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <WhatsAppCTA
                size="md"
                message={CTA_MESSAGES.realEstate.general}
              >
                Discuss Hyderabad Property
              </WhatsAppCTA>

              <PhoneCTA size="md" variant="gold">
                Call Direct
              </PhoneCTA>
            </div>
          </div>

          {/* Right Column: Highlights Card */}
          <div className="lg:col-span-6">
            <Card variant="accent-gold" className="bg-white shadow-card p-6 sm:p-8 space-y-6">
              <CardHeader className="p-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold-50 text-brand-gold-700 flex items-center justify-center border border-brand-gold-200">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700 block">
                        Regional Scope
                      </span>
                      <CardTitle className="text-xl text-brand-navy-950">
                        Hyderabad, Telangana
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="gold">Hyderabad</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Whether you are planning to purchase your first home, sell a residential plot, or look for a suitable commercial rental in Hyderabad, our service focuses on your specific criteria rather than generic listings.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Residential:</strong> Apartments, standalone houses, villas, and residential plots.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Commercial & Land:</strong> Office spaces, commercial shops, farmlands, and investment land.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Tenancy:</strong> Residential and commercial rental coordination for owners and tenants.</span>
                  </div>
                </div>
              </CardContent>

              <div className="p-3.5 rounded-xl bg-surface-muted border border-slate-200/80 text-[11px] text-slate-500">
                <p>
                  * Services are delivered through direct communication. We coordinate directly with property owners and genuine buyers.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
