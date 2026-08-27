import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { tmrStructuredData } from '@/config/structuredData';
import { HeroSection } from './components/HeroSection';
import { ExperienceStrip } from './components/ExperienceStrip';
import { CoreServicesSection } from './components/CoreServicesSection';
import { WhyTmrSection } from './components/WhyTmrSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { MobileContactBar } from './components/MobileContactBar';

export const HomePage: React.FC = () => {
  return (
    <div className="relative pb-16 md:pb-0">
      <SEOHead
        title="TMR Real Estate & RTO Services | Hyderabad & TS/AP"
        description="TMR provides trusted real estate brokerage across Hyderabad and professional RTO & driving licence documentation assistance across Telangana & Andhra Pradesh."
        canonicalUrl="https://tmrservices.in/"
        structuredData={tmrStructuredData}
      />

      {/* 1. Hero Section: 5-second clarity with dual service shortcuts */}
      <HeroSection />

      {/* 2. Experience / Trust Strip: 20+ yrs RTO, 5+ yrs RE, Hyderabad & TS/AP */}
      <ExperienceStrip />

      {/* 3. Core Services Section: Detailed cards for Real Estate & RTO */}
      <CoreServicesSection />

      {/* 4. Why TMR: 4 authentic value propositions */}
      <WhyTmrSection />

      {/* 5. How It Works: Simple 3-step customer journey */}
      <HowItWorksSection />

      {/* 6. Service Areas: Hyderabad real estate & TS/AP RTO circles */}
      <ServiceAreasSection />

      {/* 7. Final Call to Action: Closing conversion block */}
      <FinalCtaSection />

      {/* 8. Mobile Floating Quick Contact Bar */}
      <MobileContactBar />
    </div>
  );
};

export default HomePage;
