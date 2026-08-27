import { Router } from 'express';
import { EnquiryController } from '../controllers/enquiry.controller.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { enquiryRateLimiter } from '../middleware/rateLimit.middleware.js';
import { createEnquirySchema } from '../types/enquiry.types.js';

const router = Router();

// POST /api/enquiries - Submit a new lead / enquiry
router.post(
  '/',
  enquiryRateLimiter,
  validateBody(createEnquirySchema),
  EnquiryController.createEnquiry
);

export const enquiryRouter = router;
