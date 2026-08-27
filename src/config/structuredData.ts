/**
 * Schema.org Structured Data definition for TMR Real Estate & RTO Services.
 * Factually constrained to verified business details (No invented street address, ratings, or hours).
 */
export const tmrStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TMR Real Estate & RTO Services',
  alternateName: 'TMR Services',
  telephone: '+919949948759',
  url: 'https://tmrservices.in',
  founder: {
    '@type': 'Person',
    name: 'Thanniru Malli Karjuna Rao',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Hyderabad',
      description: 'Primary operating area for Real Estate brokerage services',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Telangana',
      description: 'Operating state for RTO & vehicle documentation assistance',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Andhra Pradesh',
      description: 'Operating state for RTO & vehicle documentation assistance',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'TMR Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hyderabad Real Estate Brokerage',
          description: 'Assistance with buying, selling, and renting flats, villas, plots, independent houses, commercial units, and land across Hyderabad.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'RTO & Vehicle Documentation Assistance',
          description: 'Independent assistance with driving licences (LLR/Permanent/Renewal), vehicle registration, ownership transfers, NOC, and hypothecation across Telangana and Andhra Pradesh.',
        },
      },
    ],
  },
};
