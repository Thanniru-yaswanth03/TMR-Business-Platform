import { Router } from 'express';
import { AdminEnquiryController } from '../controllers/adminEnquiry.controller.js';
import { requireAdminAuth } from '../middleware/auth.middleware.js';

const router = Router();

// All routes here strictly require admin authentication
router.use(requireAdminAuth);

// GET /api/admin/enquiries
router.get('/', AdminEnquiryController.listEnquiries);

// GET /api/admin/enquiries/:id
router.get('/:id', AdminEnquiryController.getEnquiryById);

// PATCH /api/admin/enquiries/:id/status
router.patch('/:id/status', AdminEnquiryController.updateStatus);

export const adminEnquiryRouter = router;
