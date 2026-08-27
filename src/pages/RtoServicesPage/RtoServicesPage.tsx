import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { RtoHero } from './components/RtoHero';
import { RtoExperienceStrip } from './components/RtoExperienceStrip';
import { QuickServiceSelector } from './components/QuickServiceSelector';
import { RtoServiceCategories } from './components/RtoServiceCategories';
import { RtoServiceDetailsAccordion } from './components/RtoServiceDetailsAccordion';
import { RtoHowItWorks } from './components/RtoHowItWorks';
import { RtoCoverageSection } from './components/RtoCoverageSection';
import { WhyTmrRtoSection } from './components/WhyTmrRtoSection';
import { RtoFaqSection } from './components/RtoFaqSection';
import { RtoFinalCta } from './components/RtoFinalCta';
import { RtoMobileBar } from './components/RtoMobileBar';

export const RtoServicesPage: React.FC = () => {
  return (
    <div className="relative pb-16 md:pb-0">
      <SEOHead
        title="RTO & Vehicle Services in Telangana & Andhra Pradesh | TMR"
        description="Need assistance with driving licences, vehicle RC transfers, state NOCs, or transport documentation across Telangana and Andhra Pradesh? TMR provides 20+ years of expert procedural guidance."
        canonicalUrl="https://tmrservices.in/rto-services"
      />

      {/* 1. Hero: Direct value proposition and primary conversion */}
      <RtoHero />

      {/* 2. Experience / Trust Strip: 20+ Years Experience, TS+AP Coverage */}
      <RtoExperienceStrip />

      {/* 3. Quick Service Selector: Interactive contextual WhatsApp generator */}
      <QuickServiceSelector />

      {/* 4. Core Service Categories: 4 comprehensive categories */}
      <RtoServiceCategories />

      {/* 5. Service Detail Experience: Deep dive guidance on major requirements */}
      <RtoServiceDetailsAccordion />

      {/* 6. How It Works: 3-step procedural journey */}
      <RtoHowItWorks />

      {/* 7. Service Coverage: Telangana and Andhra Pradesh jurisdictions */}
      <RtoCoverageSection />

      {/* 8. Why TMR: 5 defensible reasons */}
      <WhyTmrRtoSection />

      {/* 9. FAQ Section: 4 verified FAQs with accessible accordion */}
      <RtoFaqSection />

      {/* 10. Final Call to Action: Closing conversion block */}
      <RtoFinalCta />

      {/* 11. Mobile Quick Contact Bar */}
      <RtoMobileBar />
    </div>
  );
};

export default RtoServicesPage;
