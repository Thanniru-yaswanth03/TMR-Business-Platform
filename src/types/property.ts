/**
 * Future-ready property data model interface.
 * Note: No mock records or client database are connected in Sprint 4.
 */
export type PropertyType =
  | 'apartment'
  | 'villa'
  | 'independent_house'
  | 'residential_plot'
  | 'agricultural_land'
  | 'commercial'
  | 'rental'
  | 'other';

export type TransactionType = 'buy' | 'sell' | 'rent';

export type PriceVisibility = 'visible' | 'on_request';

export interface Property {
  id: string;
  title: string;
  slug: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  location: string;
  price?: number;
  priceVisibility: PriceVisibility;
  area?: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  amenities?: string[];
  images?: string[];
  status: 'available' | 'under_discussion' | 'closed';
  createdAt: string;
  updatedAt: string;
}
