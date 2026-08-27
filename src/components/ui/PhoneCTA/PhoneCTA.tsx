import React from 'react';
import { Phone } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { BUSINESS_DETAILS } from '@/config/env';

export interface PhoneCTAProps extends Omit<ButtonProps, 'href' | 'to' | 'external'> {
  phoneNumber?: string;
  displayNumber?: string;
}

export const PhoneCTA: React.FC<PhoneCTAProps> = ({
  phoneNumber = BUSINESS_DETAILS.contact.phone,
  displayNumber,
  variant = 'primary',
  size = 'md',
  children,
  leftIcon = <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />,
  className,
  ...rest
}) => {
  const cleanNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  const href = cleanNumber ? `tel:${cleanNumber}` : '/contact';
  const label = children || (displayNumber || (phoneNumber ? `Call ${phoneNumber}` : 'Call TMR'));

  return (
    <Button
      href={cleanNumber ? href : undefined}
      to={!cleanNumber ? '/contact' : undefined}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      className={className}
      aria-label={typeof label === 'string' ? label : 'Call TMR Services'}
      {...rest}
    >
      {label}
    </Button>
  );
};
