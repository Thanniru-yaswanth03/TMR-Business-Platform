import { z } from 'zod';

export type EnquiryType = 'REAL_ESTATE' | 'RTO' | 'GENERAL';
export type EnquiryStatus = 'NEW' | 'CONTACTED' | 'CLOSED';
export type EnquiryTransactionType = 'BUY' | 'SELL' | 'RENT';

export interface EnquirySubmissionPayload {
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
}

export interface EnquirySubmissionResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    type: EnquiryType;
    createdAt: string;
  };
  error?: string;
  errors?: Record<string, string[]>;
}

// Indian & standard phone regex (10 digits with optional +91/0 prefix)
export const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[- ]\s*)?|[0]?)?[6789]\d{9}$/;

// Zod Schema for client-side form validation
export const clientEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),

  phone: z
    .string()
    .trim()
    .regex(phoneRegex, 'Please enter a valid 10-digit mobile number'),

  type: z.enum(['REAL_ESTATE', 'RTO', 'GENERAL']),

  // Real Estate Fields
  transactionType: z.enum(['BUY', 'SELL', 'RENT']).optional().nullable(),
  propertyType: z.string().trim().max(100).optional().nullable(),
  location: z.string().trim().max(150).optional().nullable(),
  budget: z.string().trim().max(100).optional().nullable(),

  // RTO Fields
  service: z.string().trim().max(150).optional().nullable(),
  state: z.string().trim().max(100).optional().nullable(),

  // Message
  message: z.string().trim().max(2000, 'Message cannot exceed 2000 characters').optional().nullable(),
}).superRefine((data, ctx) => {
  if (data.type === 'REAL_ESTATE' && !data.transactionType && !data.message) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please select what you are looking to do (Buy, Sell, or Rent) or describe your requirement',
      path: ['transactionType'],
    });
  }

  if (data.type === 'RTO' && !data.service && !data.message) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please select or specify the RTO service you need help with',
      path: ['service'],
    });
  }

  if (data.type === 'GENERAL' && (!data.message || data.message.length < 5)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please provide details about your enquiry (at least 5 characters)',
      path: ['message'],
    });
  }
});

export type ClientEnquiryFormData = z.infer<typeof clientEnquirySchema>;
