import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CheckCircle2, ShieldAlert, ArrowLeft, Clock, MapPin } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { CTA_MESSAGES } from '@/config/contact';
import { RtoMobileBar } from './components/RtoMobileBar';

export const DrivingLicencePage: React.FC = () => {
  const licenceTypes = [
    {
      id: 'llr',
      title: "Learner's Licence (LLR)",
      badge: 'Step 1',
      description: 'Initial computer-based test slot booking, form preparation, and document checklist for two-wheeler (MCWG) and four-wheeler (LMV) learner permits.',
      points: [
        'Application filing on state transport portals (TS / AP)',
        'Slot scheduling for computer-based learner knowledge test',
        'Age proof and address proof documentation guidance',
        'Valid for 6 months across India',
      ],
      whatsappMsg: CTA_MESSAGES.rto.drivingLicence,
    },
    {
      id: 'dl',
      title: 'Permanent Driving Licence (DL)',
      badge: 'Step 2',
      description: 'Slot booking and procedural guidance for driving track evaluation and biometrics after mandatory learner holding period.',
      points: [
        'Permanent DL application filing after 30 days of LLR',
        'Driving test track slot booking assistance',
        'Biometrics, photo, and signature appointment coordination',
        'Smart card dispatch guidance to registered address',
      ],
      whatsappMsg: CTA_MESSAGES.rto.drivingLicence,
    },
    {
      id: 'renewal',
      title: 'Licence Renewal & Expired DL',
      badge: 'Renewals',
      description: 'Procedural support for renewing expired driving licences, medical certificate Form 1A guidance, and grace period rules.',
      points: [
        'Renewal application filing before or after DL expiry',
        'Form 1A medical fitness certificate guidance',
        'Late renewal procedure guidance for licences expired >1 year',
        'Smart card re-issuance processing',
      ],
      whatsappMsg: CTA_MESSAGES.rto.drivingLicence,
    },
    {
      id: 'duplicate-corrections',
      title: 'Duplicate DL & Details Correction',
      badge: 'Corrections',
      description: 'Assistance for replacing lost, damaged, or torn driving licences, updating residential address, or correcting names/dates of birth.',
      points: [
        'Duplicate DL filing for lost, stolen, or damaged cards',
        'Address change documentation on existing DL',
        'Name and personal detail correction paperwork',
        'Non-availability report & FIR/lost certificate guidance',
      ],
      whatsappMsg: CTA_MESSAGES.rto.drivingLicence,
    },
  ];

  return (
    <div className="relative pb-16 md:pb-0">
      <SEOHead
        title="Driving Licence Assistance in Telangana & AP | TMR Services"
        description="Step-by-step guidance for new learner licences (LLR), permanent licences, renewals, and duplicate cards backed by approximately 20 years of transport procedural experience."
        canonicalUrl="https://tmrservices.in/rto-services/driving-licence"
      />

      {/* Subpage Hero */}
      <Section spacing="lg" background="navy" className="border-b border-brand-navy-800">
        <Container size="xl" className="space-y-6">
          <Link
            to="/rto-services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-emerald-400 hover:text-brand-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All RTO Services</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <Badge variant="emerald" withDot icon={<UserCheck className="w-3.5 h-3.5" />}>
              DRIVING LICENCE SERVICES • TS & AP
            </Badge>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Driving Licence Assistance in Telangana & Andhra Pradesh
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Step-by-step guidance for new learner licences, permanent licences, renewals, and duplicate cards backed by approximately 20 years of transport procedural experience.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <WhatsAppCTA
                size="lg"
                message={CTA_MESSAGES.rto.drivingLicence}
              >
                Discuss Licence on WhatsApp
              </WhatsAppCTA>

              <PhoneCTA size="lg" variant="gold">
                Call for DL Guidance
              </PhoneCTA>
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Strip */}
      <section className="bg-surface-card border-b border-slate-200/80 py-6">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-emerald-600 shrink-0" />
              <div>
                <span className="font-bold text-brand-navy-950 block text-sm">~20 Years Experience</span>
                <span>Practical transport office procedural insight</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:pl-6">
              <MapPin className="w-5 h-5 text-brand-navy-600 shrink-0" />
              <div>
                <span className="font-bold text-brand-navy-950 block text-sm">Telangana & Andhra Pradesh</span>
                <span>Coverage across all district RTO circles</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:pl-6">
              <ShieldAlert className="w-5 h-5 text-brand-gold-600 shrink-0" />
              <div>
                <span className="font-bold text-brand-navy-950 block text-sm">Independent Facilitation</span>
                <span>Official tests governed by transport departments</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Licence Categories Grid */}
      <Section spacing="lg" background="warm-white">
        <Container size="xl" className="space-y-12">
          <Heading
            as="h2"
            size="h2"
            align="center"
            accentGold
            subtitle="Explore specific driving licence categories we can assist you with."
          >
            Licence Services We Facilitate
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {licenceTypes.map((item) => (
              <Card
                key={item.id}
                variant="default"
                className="bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="border-b border-slate-100 pb-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="emerald" withDot>
                        {item.badge}
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium">TS & AP</span>
                    </div>

                    <CardTitle className="text-xl text-brand-navy-950 pt-1">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-5 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 block">
                      Key Process Assistance:
                    </span>
                    <ul className="space-y-2">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-brand-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <CardFooter className="bg-slate-50/70 p-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Direct 1-on-1 Guidance
                  </span>
                  <WhatsAppCTA
                    size="sm"
                    variant="emerald"
                    message={item.whatsappMsg}
                  >
                    Inquire on WhatsApp
                  </WhatsAppCTA>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-brand-navy-900 text-slate-300 text-xs flex items-start gap-3 max-w-3xl mx-auto border border-brand-navy-800">
            <ShieldAlert className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Notice:</strong> Document requirements, slot availability, and eligibility criteria vary based on age, vehicle category, and jurisdiction. Contact TMR for the exact requirements for your application.
            </p>
          </div>
        </Container>
      </Section>

      {/* Final Call to Action */}
      <Section spacing="lg" background="dark" className="border-t border-brand-navy-800">
        <Container size="md" className="text-center space-y-6">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Need Driving Licence Assistance?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get in touch directly with TMR on WhatsApp or phone to understand the application steps, documents needed, and slot schedule.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <WhatsAppCTA
              size="lg"
              message={CTA_MESSAGES.rto.drivingLicence}
            >
              WhatsApp TMR Directly
            </WhatsAppCTA>

            <PhoneCTA size="lg" variant="gold">
              Call TMR
            </PhoneCTA>
          </div>
        </Container>
      </Section>

      {/* Mobile Sticky Bar */}
      <RtoMobileBar />
    </div>
  );
};

export default DrivingLicencePage;
