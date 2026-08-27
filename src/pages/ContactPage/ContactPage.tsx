import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ContactHero } from './components/ContactHero';
import { EnquiryForm } from './components/EnquiryForm';
import { ContactDirectChannels } from './components/ContactDirectChannels';
import { ContactServiceCoverage } from './components/ContactServiceCoverage';

export const ContactPage: React.FC = () => {
  return (
    <div className="relative">
      <SEOHead
        title="Contact TMR Real Estate & RTO Services | Hyderabad, TS & AP"
        description="Contact TMR Services for real estate brokerage in Hyderabad or driving licence and vehicle document assistance across Telangana and Andhra Pradesh. Direct WhatsApp and phone consultation."
        canonicalUrl="https://tmrservices.in/contact"
      />

      {/* 1. Hero: Direct communication header & quick conversion */}
      <ContactHero />

      {/* 2. Main Contact Grid: Progressive Enquiry Form + Direct Channels */}
      <Section spacing="lg" background="surface">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Main Column: Interactive Progressive Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right Column: Direct Channels (WhatsApp, Phone) & Regional Coverage */}
            <div className="lg:col-span-5 space-y-8">
              <ContactDirectChannels />
              <ContactServiceCoverage />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ContactPage;
