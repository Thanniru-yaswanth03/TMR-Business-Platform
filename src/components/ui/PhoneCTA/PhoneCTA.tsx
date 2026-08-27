import React from 'react';
import { Phone } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { buildPhoneUrl, BUSINESS_PHONE_INTL, BUSINESS_PHONE_DISPLAY } from '@/config/contact';

export interface PhoneCTAProps extends Omit<ButtonProps, 'href' | 'to' | 'external'> {
  phoneNumber?: string;
  displayNumber?: string;
}

export const PhoneCTA: React.FC<PhoneCTAProps> = ({
  phoneNumber = BUSINESS_PHONE_INTL,
  displayNumber,
  variant = 'primary',
  size = 'md',
  children,
  leftIcon = <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />,
  className,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const href = buildPhoneUrl(phoneNumber);
  const label = children || displayNumber || (phoneNumber === BUSINESS_PHONE_INTL ? `Call ${BUSINESS_PHONE_DISPLAY}` : `Call ${phoneNumber}`);
  const resolvedAriaLabel = ariaLabel || (typeof label === 'string' ? label : 'Call TMR');

  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      className={className}
      aria-label={resolvedAriaLabel}
      {...rest}
    >
      {label}
    </Button>
  );
};

