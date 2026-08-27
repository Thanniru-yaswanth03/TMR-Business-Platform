import { z } from 'zod';

export type EnquiryType = 'REAL_ESTATE' | 'RTO' | 'GENERAL';
export type EnquiryStatus = 'NEW' | 'CONTACTED' | 'CLOSED';

export interface IEnquiry {
  _id: string;
  name: string;
  phone: string;
  type: EnquiryType;
  service?: string | null;
  state?: string | null;
  location?: string | null;
  propertyType?: string | null;
  transactionType?: string | null;
  budget?: string | null;
  message?: string | null;
  status: EnquiryStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Indian & standard phone number regex (10 digits with optional +91/0 prefix)
export const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[- ]\s*)?|[0]?)?[6789]\d{9}$/;

// Zod Validation Schema for Enquiry Submission
export const createEnquirySchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .regex(phoneRegex, 'Please enter a valid 10-digit Indian phone number'),

  type: z.enum(['REAL_ESTATE', 'RTO', 'GENERAL'], {
    required_error: 'Enquiry type is required',
  }),

  // Service field (required for RTO, optional for others)
  service: z.string().trim().max(150, 'Service name too long').optional().nullable(),

  // State field (e.g., Telangana, Andhra Pradesh)
  state: z.string().trim().max(100).optional().nullable(),

  // Real estate specific fields
  location: z.string().trim().max(150).optional().nullable(),
  propertyType: z.string().trim().max(100).optional().nullable(),
  transactionType: z.enum(['BUY', 'SELL', 'RENT']).optional().nullable(),
  budget: z.string().trim().max(100).optional().nullable(),

  // General or additional message
  message: z
    .string()
    .trim()
    .max(2000, 'Message cannot exceed 2000 characters')
    .optional()
    .nullable(),
}).superRefine((data, ctx) => {
  // RTO inquiries require either service or message
  if (data.type === 'RTO' && !data.service && !data.message) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please specify the RTO service or requirement you need assistance with',
      path: ['service'],
    });
  }

  // General inquiries require message
  if (data.type === 'GENERAL' && (!data.message || data.message.length < 5)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Please provide details about your enquiry (at least 5 characters)',
      path: ['message'],
    });
  }
});

export type CreateEnquiryInput = z.infer<typeof createEnquirySchema>;
