import React from 'react';
import { MapPin, Building2, Car, PhoneCall, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const ServiceAreasSection: React.FC = () => {
  return (
    <Section spacing="lg" background="surface">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Clear jurisdictional focus tailored to property matchmaking in Hyderabad and transport documentation across both Telugu states."
        >
          Service Areas & Regional Coverage
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service Area 1: Real Estate (Hyderabad) */}
          <Card variant="accent-gold" className="flex flex-col justify-between h-full bg-white shadow-card">
            <div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold-50 text-brand-gold-800 flex items-center justify-center border border-brand-gold-200">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
                        Real Estate Brokerage
                      </span>
                      <CardTitle className="text-xl text-brand-navy-950">
                        Hyderabad Metropolitan Area
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="gold">Hyderabad</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Active property brokerage and consultation covering prime residential, commercial, and investment corridors across Hyderabad, Telangana:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700 pt-1">
                  {[
                    'Gachibowli & Hitec City',
                    'Kondapur & Madhapur',
                    'Kukatpally & Miyapur',
                    'Manikonda & Puppalaguda',
                    'Tellapur & Nallagandla',
                    'Banjara & Jubilee Hills',
                    'Secunderabad Zones',
                    'Kokapet & Gandipet',
                    'Medchal & Kompally',
                  ].map((loc) => (
                    <div key={loc} className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-muted border border-slate-200/60 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold-600 shrink-0" aria-hidden="true" />
                      <span className="truncate">{loc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>

            <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-brand-gold-600" />
                Residential, Commercial & Plots
              </span>
              <WhatsAppCTA size="sm" variant="gold" message="Hello TMR Services, I have a property inquiry in Hyderabad.">
                Ask About Location
              </WhatsAppCTA>
            </div>
          </Card>

          {/* Service Area 2: RTO Services (Telangana + Andhra Pradesh) */}
          <Card variant="accent-navy" className="flex flex-col justify-between h-full bg-white shadow-card">
            <div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center border border-brand-navy-200">
                      <Car className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-700">
                        RTO & Vehicle Documentation
                      </span>
                      <CardTitle className="text-xl text-brand-navy-950">
                        Telangana & Andhra Pradesh
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="navy">TS & AP Wide</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Comprehensive document assistance and procedural guidance across Regional Transport Offices in both Telangana and Andhra Pradesh:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-brand-navy-50/50 border border-brand-navy-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-navy-950">
                      <ShieldCheck className="w-4 h-4 text-brand-navy-700" />
                      <span>Telangana State RTOs</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hyderabad (Central, North, South, East, West), Rangareddy, Medchal-Malkajgiri, Sangareddy, Warangal, Karimnagar & all TS RTO circles.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-emerald-900">
                      <ShieldCheck className="w-4 h-4 text-brand-emerald-700" />
                      <span>Andhra Pradesh RTOs</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Vijayawada, Visakhapatnam, Guntur, Tirupati, Kurnool, Nellore, Kakinada, Anantapur, Rajahmundry & all AP RTO jurisdictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-brand-emerald-600" />
                Direct Assistance Across All Circles
              </span>
              <WhatsAppCTA size="sm" variant="emerald" message="Hello TMR Services, I need RTO document assistance in TS / AP.">
                Inquire for My RTO
              </WhatsAppCTA>
            </div>
          </Card>
        </div>

        <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 text-center text-xs text-slate-600 max-w-2xl mx-auto">
          <p>
            * All services are provided through direct phone and WhatsApp consultation. We do not operate a walk-in retail storefront.
          </p>
        </div>
      </Container>
    </Section>
  );
};
