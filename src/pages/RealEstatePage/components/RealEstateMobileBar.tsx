import React from 'react';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';

export const RealEstateMobileBar: React.FC = () => {
  return (
    <aside
      aria-label="Real estate mobile quick contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-elevated safe-area-bottom"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <WhatsAppCTA
          size="sm"
          fullWidth
          message="Hello TMR, I am looking for real estate assistance in Hyderabad."
        >
          WhatsApp
        </WhatsAppCTA>

        <PhoneCTA
          size="sm"
          variant="gold"
          fullWidth
          displayNumber="Call TMR"
        >
          Call TMR
        </PhoneCTA>
      </div>
    </aside>
  );
};
