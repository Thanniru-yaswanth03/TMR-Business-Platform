/**
 * Centralized Business Contact Configuration & Utilities
 * Single authoritative source of truth for TMR contact coordinates.
 */

export const BUSINESS_PHONE_RAW = '9949948759';
export const BUSINESS_PHONE_INTL = '+919949948759';
export const BUSINESS_PHONE_DISPLAY = '+91 99499 48759';
export const BUSINESS_WHATSAPP_RAW = '919949948759';

export const BUSINESS_NAME = 'TMR Real Estate & RTO Services';
export const BUSINESS_SHORT_NAME = 'TMR Services';
export const BUSINESS_OWNER = 'Thanniru Malli Karjuna Rao';

/**
 * Normalizes phone numbers for WhatsApp click-to-chat format.
 * Defaults to TMR business WhatsApp if no phone number is provided.
 */
export function normalizePhoneForWhatsApp(phone?: string): string {
  if (!phone || phone.trim().length === 0) {
    return BUSINESS_WHATSAPP_RAW;
  }

  const digits = phone.replace(/\D/g, '');
  if (!digits) {
    return BUSINESS_WHATSAPP_RAW;
  }

  // If 10-digit Indian mobile number (e.g. 9949948759), prefix with '91'
  if (digits.length === 10) {
    return `91${digits}`;
  }

  return digits;
}

/**
 * Builds a secure WhatsApp click-to-chat URL with optional pre-filled message.
 * Format: https://wa.me/<phone>?text=<encoded-message>
 */
export function buildWhatsAppUrl(phone?: string, message?: string): string {
  const normalizedPhone = normalizePhoneForWhatsApp(phone);
  if (!message || message.trim().length === 0) {
    return `https://wa.me/${normalizedPhone}`;
  }
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Normalizes phone numbers for standard tel: links.
 * Defaults to TMR business phone (+919949948759) if no phone number is provided.
 */
export function normalizePhoneForTel(phone?: string): string {
  if (!phone || phone.trim().length === 0) {
    return BUSINESS_PHONE_INTL;
  }

  const clean = phone.replace(/[\s()-]/g, '').trim();
  if (!clean) {
    return BUSINESS_PHONE_INTL;
  }

  // If already starts with '+', return directly
  if (clean.startsWith('+')) {
    return clean;
  }

  const digits = clean.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91${digits}`;
  }

  if (digits.length === 12 && digits.startsWith('91')) {
    return `+${digits}`;
  }

  return clean;
}

/**
 * Builds a standard tel: protocol URL.
 * Format: tel:<normalized-phone>
 */
export function buildPhoneUrl(phone?: string): string {
  return `tel:${normalizePhoneForTel(phone)}`;
}

/**
 * Builds WhatsApp consultation link targeting a CUSTOMER'S phone number (used in Admin Portal).
 */
export function buildCustomerWhatsAppUrl(customerPhone: string, customerName: string): string {
  const message = `Hello ${customerName}, this is TMR regarding your enquiry.`;
  return buildWhatsAppUrl(customerPhone, message);
}

/**
 * Builds direct telephone dialer link targeting a CUSTOMER'S phone number (used in Admin Portal).
 */
export function buildCustomerPhoneUrl(customerPhone: string): string {
  return buildPhoneUrl(customerPhone);
}

/**
 * Authoritative Contextual WhatsApp Message Templates
 */
export const CTA_MESSAGES = {
  // Real Estate Page Messages
  realEstate: {
    hero: 'Hello TMR, I am looking for real estate assistance in Hyderabad. I would like to discuss my requirement.',
    buy: 'Hello TMR, I am looking to buy property in Hyderabad. I would like to discuss my requirements.',
    sell: 'Hello TMR, I have a property in Hyderabad that I would like to discuss for sale.',
    rent: 'Hello TMR, I am looking for rental property in Hyderabad. I would like to discuss my requirements.',
    general: 'Hello TMR, I would like to discuss a real estate requirement in Hyderabad.',
  },

  // RTO / Vehicle Services Messages
  rto: {
    general: 'Hello TMR, I need assistance with an RTO/vehicle-related service. I would like to discuss my requirement.',
    drivingLicence: 'Hello TMR, I need assistance with a driving licence service. Please let me know the process and requirements.',
    registration: 'Hello TMR, I need assistance with vehicle registration. Please let me know the process and requirements.',
    rcTransfer: 'Hello TMR, I need assistance with an RC/ownership-related service. I would like to discuss my requirement.',
    noc: 'Hello TMR, I need assistance with an NOC-related vehicle service. Please let me know the process and requirements.',
  },

  // Contact Page Messages
  contact: {
    general: 'Hello TMR, I would like to discuss a requirement. Please let me know how you can assist me.',
    afterEnquiry: (category: string, name: string) =>
      `Hello TMR, I just submitted an enquiry for ${category} under the name ${name}.`,
  },

  // Home Page Messages
  home: {
    hero: 'Hello TMR, I would like to inquire about your property or vehicle services.',
    general: 'Hello TMR Services, I would like to inquire about your services.',
  },

  // Admin Portal Message
  admin: {
    customerEnquiry: (customerName: string) =>
      `Hello ${customerName}, this is TMR regarding your enquiry.`,
  },
} as const;
