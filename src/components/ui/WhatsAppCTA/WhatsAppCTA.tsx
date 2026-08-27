import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { buildWhatsAppUrl, BUSINESS_WHATSAPP_RAW, CTA_MESSAGES } from '@/config/contact';

export interface WhatsAppCTAProps extends Omit<ButtonProps, 'href' | 'to' | 'external'> {
  message?: string;
  phoneNumber?: string;
  badge?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  message = CTA_MESSAGES.home.general,
  phoneNumber = BUSINESS_WHATSAPP_RAW,
  badge,
  variant = 'emerald',
  size = 'md',
  children = 'Chat on WhatsApp',
  leftIcon = <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />,
  className,
  'aria-label': ariaLabel = 'Contact TMR on WhatsApp',
  ...rest
}) => {
  const url = buildWhatsAppUrl(phoneNumber, message);

  return (
    <Button
      href={url}
      external
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      className={className}
      aria-label={ariaLabel}
      {...rest}
    >
      <span>{children}</span>
      {badge && (
        <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-white/20 text-white">
          {badge}
        </span>
      )}
    </Button>
  );
};

