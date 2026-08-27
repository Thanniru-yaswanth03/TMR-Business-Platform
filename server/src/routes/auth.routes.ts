import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { authRateLimiter } from '../middleware/rateLimit.middleware.js';
import { requireAdminAuth } from '../middleware/auth.middleware.js';
import { loginSchema } from '../types/admin.types.js';

const router = Router();

// POST /api/auth/login
router.post('/login', authRateLimiter, validateBody(loginSchema), AuthController.login);

// POST /api/auth/logout
router.post('/logout', AuthController.logout);

// GET /api/auth/me (protected)
router.get('/me', requireAdminAuth, AuthController.getMe);

export const authRouter = router;
