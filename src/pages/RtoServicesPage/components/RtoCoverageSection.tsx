import React from 'react';
import { MapPin, Car, ShieldCheck, PhoneCall } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const RtoCoverageSection: React.FC = () => {
  return (
    <Section spacing="lg" background="surface">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Providing document assistance and procedural guidance across Regional Transport Offices in both Telugu states."
        >
          Regional Service Coverage
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Telangana State Coverage */}
          <Card variant="accent-navy" className="bg-white shadow-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <CardHeader className="p-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center border border-brand-navy-200">
                      <Car className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-700 block">
                        State Transport Jurisdiction
                      </span>
                      <CardTitle className="text-xl text-brand-navy-950">
                        Telangana State
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="navy">Telangana</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-3 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Document assistance, form preparation, and slot scheduling guidance across Regional Transport Offices in Telangana:
                </p>

                <div className="p-3.5 rounded-xl bg-brand-navy-50/50 border border-brand-navy-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-brand-navy-950">
                    <ShieldCheck className="w-4 h-4 text-brand-navy-700" />
                    <span>Key Transport Jurisdictions:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Hyderabad (Central, North, South, East, West), Rangareddy (Kondapur/Attapur), Medchal-Malkajgiri, Sangareddy, Warangal, Karimnagar, Nizamabad, Khammam, Mahabubnagar, and all Telangana district transport circles.
                  </p>
                </div>
              </CardContent>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-navy-600" /> Telangana Wide
              </span>
              <WhatsAppCTA
                size="sm"
                variant="primary"
                message="Hello TMR, I need RTO document assistance in Telangana."
              >
                Inquire for Telangana
              </WhatsAppCTA>
            </div>
          </Card>

          {/* Card 2: Andhra Pradesh State Coverage */}
          <Card variant="accent-navy" className="bg-white shadow-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <CardHeader className="p-0 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-emerald-800 flex items-center justify-center border border-emerald-200">
                      <Car className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald-700 block">
                        State Transport Jurisdiction
                      </span>
                      <CardTitle className="text-xl text-brand-navy-950">
                        Andhra Pradesh State
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="emerald">Andhra Pradesh</Badge>
                </div>
              </CardHeader>

              <CardContent className="p-0 space-y-3 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Document facilitation and procedure support for vehicle owners and licence applicants across Andhra Pradesh transport offices:
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-brand-emerald-950">
                    <ShieldCheck className="w-4 h-4 text-brand-emerald-700" />
                    <span>Key Transport Jurisdictions:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Vijayawada, Visakhapatnam, Guntur, Tirupati, Kurnool, Nellore, Kakinada, Anantapur, Rajahmundry, Kadapa, Eluru, Vizianagaram, and all Andhra Pradesh district transport circles.
                  </p>
                </div>
              </CardContent>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-emerald-600" /> Andhra Pradesh Wide
              </span>
              <WhatsAppCTA
                size="sm"
                variant="emerald"
                message="Hello TMR, I need RTO document assistance in Andhra Pradesh."
              >
                Inquire for AP
              </WhatsAppCTA>
            </div>
          </Card>
        </div>

        <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 text-center text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <PhoneCall className="w-4 h-4 text-brand-navy-600 shrink-0" />
          <span>All inquiries are handled through direct WhatsApp and phone consultation without geographic constraints.</span>
        </div>
      </Container>
    </Section>
  );
};
