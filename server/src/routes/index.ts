import { Router } from 'express';
import { enquiryRouter } from './enquiry.routes.js';
import { authRouter } from './auth.routes.js';
import { adminEnquiryRouter } from './adminEnquiry.routes.js';
import { HealthController } from '../controllers/health.controller.js';

const router = Router();

// Health Check API
router.get('/health', HealthController.checkHealth);

// Public Enquiries API (POST /api/enquiries)
router.use('/enquiries', enquiryRouter);

// Admin Auth API (/api/auth)
router.use('/auth', authRouter);

// Protected Admin API (/api/admin/enquiries)
router.use('/admin/enquiries', adminEnquiryRouter);

export const apiRouter = router;

