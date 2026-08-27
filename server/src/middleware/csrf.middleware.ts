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

  // Exempt public enquiry creation from origin restrictions if needed, but still check if caller is an unauthorized cross-origin site
  // For admin routes and auth state changes:
  const origin = req.headers.origin || req.headers.referer;
  const secFetchSite = req.headers['sec-fetch-site'];

  // Check Sec-Fetch-Site metadata if provided by modern browser
  if (secFetchSite === 'cross-site') {
    ApiResponse.error(res, 'Cross-origin request rejected (CSRF protection)', 403);
    return;
  }

  // If origin/referer is present, verify against allowed CORS origins in production
  if (origin && serverEnv.NODE_ENV === 'production') {
    try {
      const originUrl = new URL(origin);
      const allowedOrigins = Array.isArray(serverEnv.CORS_ORIGIN)
        ? serverEnv.CORS_ORIGIN
        : [serverEnv.CORS_ORIGIN];

      const isAllowed = allowedOrigins.some((allowed) => {
        if (allowed === '*') return true;
        try {
          const allowedUrl = new URL(allowed);
          return originUrl.origin === allowedUrl.origin;
        } catch {
          return false;
        }
      });

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
