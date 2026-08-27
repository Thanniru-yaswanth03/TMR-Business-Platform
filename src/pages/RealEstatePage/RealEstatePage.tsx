import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { RealEstateHero } from './components/RealEstateHero';
import { RealEstateExperienceStrip } from './components/RealEstateExperienceStrip';
import { RealEstateIntentPaths } from './components/RealEstateIntentPaths';
import { PropertyCategoriesSection } from './components/PropertyCategoriesSection';
import { RealEstateHowItWorks } from './components/RealEstateHowItWorks';
import { HyderabadFocusSection } from './components/HyderabadFocusSection';
import { WhyTmrRealEstate } from './components/WhyTmrRealEstate';
import { FutureListingsPlaceholder } from './components/FutureListingsPlaceholder';
import { RealEstateFinalCta } from './components/RealEstateFinalCta';
import { RealEstateMobileBar } from './components/RealEstateMobileBar';

export const RealEstatePage: React.FC = () => {
  return (
    <div className="relative pb-16 md:pb-0">
      <SEOHead
        title="Real Estate Brokerage in Hyderabad | TMR Real Estate Services"
        description="Looking to buy, sell, or rent property in Hyderabad? TMR provides personalized real estate brokerage, property matchmaking, and document guidance across Hyderabad."
        canonicalUrl="https://tmrservices.in/real-estate"
      />

      {/* 1. Real Estate Hero: Direct clarity and WhatsApp enquiry CTAs */}
      <RealEstateHero />

      {/* 2. Experience / Trust Strip: 5+ Years, Hyderabad Focus, Broker Model */}
      <RealEstateExperienceStrip />

      {/* 3. Intent Pathways: Buy, Sell, and Rent requirements */}
      <RealEstateIntentPaths />

      {/* 4. Property Categories: Types of properties TMR assists with */}
      <PropertyCategoriesSection />

      {/* 5. How TMR Can Help: 3-step consultation and matchmaking process */}
      <RealEstateHowItWorks />

      {/* 6. Hyderabad Focus: Broad coverage across Hyderabad */}
      <HyderabadFocusSection />

      {/* 7. Why Work With TMR: 5 defensible reasons based on experience & direct contact */}
      <WhyTmrRealEstate />

      {/* 8. Specific Requirement Placeholder: Future-ready requirement consultation */}
      <FutureListingsPlaceholder />

      {/* 9. Final Call to Action: Closing conversion block */}
      <RealEstateFinalCta />

      {/* 10. Mobile Floating Quick Action Bar */}
      <RealEstateMobileBar />
    </div>
  );
};

export default RealEstatePage;
