import { Request, Response, NextFunction } from 'express';
import { AuthService, AdminJwtPayload } from '../services/auth.service.js';
import { serverEnv } from '../config/env.js';
import { ApiResponse } from '../utils/apiResponse.js';

// Extend Express Request to include admin user property
declare global {
  namespace Express {
    interface Request {
      admin?: AdminJwtPayload;
    }
  }
}

export const requireAdminAuth = (req: Request, res: Response, next: NextFunction): void => {
  // 1. Try to extract from HTTP-only cookie
  let token: string | undefined = req.cookies?.[serverEnv.COOKIE_NAME];

  // 2. Fallback to Authorization: Bearer header (helpful for automated tests/API tools)
  if (!token && req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.substring(7).trim();
  }

  if (!token) {
    ApiResponse.error(res, 'Authentication required. Please log in.', 401);
    return;
  }

  const payload = AuthService.verifyToken(token);
  if (!payload) {
    ApiResponse.error(res, 'Invalid or expired session. Please log in again.', 401);
    return;
  }

  req.admin = payload;
  next();
};
