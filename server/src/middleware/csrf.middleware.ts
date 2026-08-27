import { Request, Response, NextFunction } from 'express';
import { serverEnv } from '../config/env.js';
import { ApiResponse } from '../utils/apiResponse.js';

/**
 * Lightweight CSRF protection middleware for cookie-authenticated mutating requests.
 * Defends state-changing endpoints (POST, PATCH, PUT, DELETE) against cross-origin forgery.
 */
export const csrfProtection = (req: Request, res: Response, next: NextFunction): void => {
  // Safe read-only HTTP methods do not change state
  const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
  if (safeMethods.includes(req.method)) {
    return next();
  }

  const origin = req.headers.origin || req.headers.referer;

  // In production, verify that mutating requests come from an authorized frontend origin
  if (origin && serverEnv.NODE_ENV === 'production') {
    try {
      const originUrl = new URL(origin);
      const normalizedOrigin = originUrl.origin.replace(/\/+$/, '');
      const allowedOrigins = serverEnv.CORS_ORIGIN.split(',').map((o) =>
        o.trim().replace(/\/+$/, '')
      );

      const isAllowed =
        allowedOrigins.includes(normalizedOrigin) ||
        allowedOrigins.includes('*') ||
        (normalizedOrigin.endsWith('.vercel.app') &&
          allowedOrigins.some((o) => o.includes('vercel.app')));

      if (!isAllowed) {
        ApiResponse.error(res, 'Unauthorized request origin (CSRF protection)', 403);
        return;
      }
    } catch {
      ApiResponse.error(res, 'Malformed request origin', 400);
      return;
    }
  }

  next();
};
