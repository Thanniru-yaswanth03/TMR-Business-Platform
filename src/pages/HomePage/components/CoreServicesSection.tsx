import React from 'react';
import { Building2, Car, CheckCircle2, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { CTA_MESSAGES } from '@/config/contact';

export const CoreServicesSection: React.FC = () => {
  const realEstateServices = [
    'Residential property purchase & buyer representation in Hyderabad',
    'Property sales, seller representation & market price advisory',
    'Rental assistance for residential flats, houses, and commercial premises',
    'Residential & commercial land/plot documentation checking',
    'Direct coordination between property owners and prospective buyers',
  ];

  const rtoServices = [
    'New Driving Licence, learner licence, and DL renewal procedures',
    'Vehicle RC transfer, ownership change, and hypothecation removal',
    'Inter-state NOC (No Objection Certificate) assistance for Telangana & AP vehicles',
    'Commercial vehicle fitness certificates, road tax, and permit assistance',
    'Duplicate RC, address correction, and re-registration paperwork',
  ];

  return (
    <Section spacing="lg" background="warm-white">
      <Container size="xl" className="space-y-12">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Explore our two primary service areas, backed by dedicated local knowledge and over two decades of combined operational experience."
        >
          Two Core Service Disciplines
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Real Estate Services */}
          <Card variant="accent-gold" className="flex flex-col justify-between h-full bg-white shadow-card hover:shadow-card-hover transition-all">
            <div>
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold-50 text-brand-gold-800 flex items-center justify-center border border-brand-gold-200 shrink-0">
                    <Building2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="gold" withDot>~5 Years Experience</Badge>
                    <Badge variant="outline" icon={<MapPin className="w-3 h-3" />}>Hyderabad</Badge>
                  </div>
                </div>

                <CardTitle className="text-2xl text-brand-navy-950">
                  Real Estate Brokerage & Advisory
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Straightforward property brokerage services across Hyderabad for buyers, sellers, and landlords.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy-900">
                  Property Services Offered:
                </h4>
                <ul className="space-y-3">
                  {realEstateServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter className="bg-slate-50/70 p-6 flex flex-wrap items-center gap-3 justify-between border-t border-slate-100">
              <Button
                to="/real-estate"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Real Estate
              </Button>

              <WhatsAppCTA
                size="md"
                variant="emerald"
                message={CTA_MESSAGES.realEstate.hero}
              >
                Inquire on WhatsApp
              </WhatsAppCTA>
            </CardFooter>
          </Card>

          {/* Card 2: RTO & Licence Services */}
          <Card variant="accent-navy" className="flex flex-col justify-between h-full bg-white shadow-card hover:shadow-card-hover transition-all">
            <div>
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy-50 text-brand-navy-800 flex items-center justify-center border border-brand-navy-200 shrink-0">
                    <Car className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="navy" withDot>~20 Years Experience</Badge>
                    <Badge variant="outline" icon={<ShieldCheck className="w-3 h-3" />}>Telangana & AP</Badge>
                  </div>
                </div>

                <CardTitle className="text-2xl text-brand-navy-950">
                  Licence & Vehicle Documentation Assistance
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Reliable document facilitation and procedure guidance for driving licences, RC books, and vehicle documentation.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy-900">
                  RTO Services Facilitated:
                </h4>
                <ul className="space-y-3">
                  {rtoServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter className="bg-slate-50/70 p-6 flex flex-wrap items-center gap-3 justify-between border-t border-slate-100">
              <Button
                to="/rto-services"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View RTO Services
              </Button>

              <WhatsAppCTA
                size="md"
                variant="emerald"
                message={CTA_MESSAGES.rto.general}
              >
                Inquire on WhatsApp
              </WhatsAppCTA>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
