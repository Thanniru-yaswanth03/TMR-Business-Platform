/**
 * Type-safe environment configuration with default fallbacks.
 */
export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'TMR Real Estate & RTO Services',
  APP_SHORT_NAME: import.meta.env.VITE_APP_SHORT_NAME || 'TMR Services',
  
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || '',
  CONTACT_WHATSAPP: import.meta.env.VITE_CONTACT_WHATSAPP || '',
  
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
  owner: 'Thanniru Malli Karjuna Rao',
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
