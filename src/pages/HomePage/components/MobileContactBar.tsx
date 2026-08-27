import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { CTA_MESSAGES } from '@/config/contact';

export const MobileContactBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-elevated safe-area-bottom"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <WhatsAppCTA
          size="sm"
          fullWidth
          message={CTA_MESSAGES.home.hero}
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
