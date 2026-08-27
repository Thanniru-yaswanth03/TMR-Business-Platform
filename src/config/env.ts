import {
  BUSINESS_NAME,
  BUSINESS_SHORT_NAME,
  BUSINESS_OWNER,
  BUSINESS_PHONE_INTL,
  BUSINESS_WHATSAPP_RAW,
} from './contact';

/**
 * Type-safe environment configuration with default fallbacks.
 */
export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || BUSINESS_NAME,
  APP_SHORT_NAME: import.meta.env.VITE_APP_SHORT_NAME || BUSINESS_SHORT_NAME,
  
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || BUSINESS_PHONE_INTL,
  CONTACT_WHATSAPP: import.meta.env.VITE_CONTACT_WHATSAPP || BUSINESS_WHATSAPP_RAW,
  
  LOCATION_CITY: import.meta.env.VITE_LOCATION_CITY || 'Hyderabad',
  LOCATION_REGION: import.meta.env.VITE_LOCATION_REGION || 'Telangana & Andhra Pradesh',
  
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api'),
  API_TIMEOUT_MS: Number(import.meta.env.VITE_API_TIMEOUT_MS) || 10000,
  
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;

export const BUSINESS_DETAILS = {
  name: ENV.APP_NAME,
  shortName: ENV.APP_SHORT_NAME,
  owner: BUSINESS_OWNER,
  realEstateExperienceYears: 5,
  rtoExperienceYears: 20,
  locations: {
    realEstate: 'Hyderabad, Telangana',
    rtoServices: 'Telangana & Andhra Pradesh',
  },
  contact: {
    phone: ENV.CONTACT_PHONE,
    whatsapp: ENV.CONTACT_WHATSAPP,
  },
} as const;
