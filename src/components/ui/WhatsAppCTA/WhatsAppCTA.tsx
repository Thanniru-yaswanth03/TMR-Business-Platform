import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { BUSINESS_DETAILS } from '@/config/env';

export interface WhatsAppCTAProps extends Omit<ButtonProps, 'href' | 'to' | 'external'> {
  message?: string;
  phoneNumber?: string;
  badge?: string;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  message = 'Hello TMR Services, I would like to inquire about your services.',
  phoneNumber = BUSINESS_DETAILS.contact.whatsapp,
  badge,
  variant = 'emerald',
  size = 'md',
  children = 'Chat on WhatsApp',
  leftIcon = <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />,
  className,
  ...rest
}) => {
  const cleanNumber = phoneNumber ? phoneNumber.replace(/\D/g, '') : '';
  const url = cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <Button
      href={url}
      external
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      className={className}
      aria-label="Contact TMR Services on WhatsApp"
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
