import { EnquiryType, EnquiryStatus, EnquiryTransactionType } from './enquiry';

export interface AdminUser {
  username: string;
  role: 'admin';
}

export interface AdminEnquiryItem {
  _id: string;
  name: string;
  phone: string;
  type: EnquiryType;
  service?: string | null;
  state?: string | null;
  location?: string | null;
  propertyType?: string | null;
  transactionType?: EnquiryTransactionType | null;
  budget?: string | null;
  message?: string | null;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
}

export interface AdminEnquiryCounts {
  total: number;
  new: number;
  contacted: number;
  closed: number;
  realEstate: number;
  rto: number;
  general: number;
}

export interface AdminEnquiryListPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface AdminEnquiryListResponse {
  data: AdminEnquiryItem[];
  pagination: AdminEnquiryListPagination;
  counts: AdminEnquiryCounts;
}

export interface AdminEnquiryQuery {
  page?: number;
  limit?: number;
  status?: EnquiryStatus | 'ALL';
  type?: EnquiryType | 'ALL';
  search?: string;
  sort?: 'newest' | 'oldest';
}
