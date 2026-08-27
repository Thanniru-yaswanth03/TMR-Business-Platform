import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string({ required_error: 'Username is required' }).trim().min(1, 'Username is required'),
  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required'),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const updateEnquiryStatusSchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'CLOSED'], {
    required_error: 'Status is required (NEW, CONTACTED, or CLOSED)',
  }),
});

export type UpdateEnquiryStatusInput = z.infer<typeof updateEnquiryStatusSchema>;

export const queryEnquiriesSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  status: z.enum(['NEW', 'CONTACTED', 'CLOSED']).optional(),
  type: z.enum(['REAL_ESTATE', 'RTO', 'GENERAL']).optional(),
  search: z.string().trim().optional(),
  sort: z.enum(['newest', 'oldest']).default('newest'),
});

export type QueryEnquiriesInput = z.infer<typeof queryEnquiriesSchema>;

export interface EnquiryCounts {
  total: number;
  new: number;
  contacted: number;
  closed: number;
  realEstate: number;
  rto: number;
  general: number;
}

export interface PaginatedEnquiriesResult {
  data: unknown[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  counts: EnquiryCounts;
}
