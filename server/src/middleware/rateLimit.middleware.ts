import rateLimit from 'express-rate-limit';
import { serverEnv } from '../config/env.js';

export const enquiryRateLimiter = rateLimit({
  windowMs: serverEnv.RATE_LIMIT_WINDOW_MS, // 15 minutes
  max: serverEnv.RATE_LIMIT_MAX_REQUESTS, // e.g. 10 requests
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      error: 'Too many enquiries submitted from this network. Please wait a few minutes before trying again or contact TMR directly via WhatsApp or phone.',
    });
  },
});

// Stricter rate limiter for admin login endpoint (5 attempts per 15 minutes)
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 login attempts
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      error: 'Too many failed login attempts. Please wait 15 minutes before trying again.',
    });
  },
});
