import React from 'react';
import { Building2, Car, ShieldCheck } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { BUSINESS_DETAILS } from '@/config/env';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <SEOHead
        title="About TMR Real Estate & RTO Services | 20+ Years Track Record"
        description="Learn about Thanniru Malli Karjuna Rao (TMR), offering 20+ years of licence & RTO assistance and 5+ years of dedicated Hyderabad real estate brokerage."
        canonicalUrl="https://tmrservices.in/about"
      />

      <Section spacing="md" background="navy">
        <Container size="xl">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold" withDot>Established & Referral-Driven</Badge>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              About {BUSINESS_DETAILS.shortName}
            </h1>
            <p className="text-base text-slate-300">
              A referral-driven consultancy combining local Hyderabad real estate knowledge with over two decades of licence & RTO-related assistance.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="md" background="surface">
        <Container size="lg">
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-card space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-brand-navy-950">
                Experience & Background
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Led by <strong>{BUSINESS_DETAILS.owner}</strong>, TMR Real Estate & RTO Services was built on long-term client trust, transparency, and personal referrals. We offer direct one-on-one assistance for property brokerage and transport office documentation across Telangana and Andhra Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2.5 text-brand-gold-700 font-heading font-bold text-lg">
                  <Building2 className="w-5 h-5" aria-hidden="true" />
                  <span>Real Estate Brokerage</span>
                </div>
                <p className="text-2xl font-extrabold text-brand-navy-950">~5 Years</p>
                <p className="text-xs text-slate-500">
                  Focused exclusively on the Hyderabad real estate market, assisting buyers, sellers, and landlords with property transactions and documentation checking.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2.5 text-brand-emerald-700 font-heading font-bold text-lg">
                  <Car className="w-5 h-5" aria-hidden="true" />
                  <span>Licence & RTO Assistance</span>
                </div>
                <p className="text-2xl font-extrabold text-brand-navy-950">~20 Years</p>
                <p className="text-xs text-slate-500">
                  Assisting individuals and vehicle owners across Telangana and Andhra Pradesh with licence applications, RC transfers, and transport paperwork.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-brand-navy-50/70 border border-brand-navy-100 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-brand-navy-700 shrink-0 mt-1" aria-hidden="true" />
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-brand-navy-950">
                  Referral-First Philosophy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Our business has grown primarily through word-of-mouth and repeat clients who value honest guidance, direct communication, and personal assistance.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <WhatsAppCTA message="Hello TMR Services, I would like to learn more about your background and services.">
                Chat on WhatsApp
              </WhatsAppCTA>
              <Button
                to="/contact"
                variant="primary"
                size="md"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;
