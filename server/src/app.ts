import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { serverEnv } from './config/env.js';
import { apiRouter } from './routes/index.js';
import { csrfProtection } from './middleware/csrf.middleware.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';

export function createApp(): Express {
  const app = express();

  // Security Headers via Helmet
  app.use(helmet());

  // Cookie parser for reading HTTP-only admin auth cookie
  app.use(cookieParser());

  // CORS Configuration
  const allowedOrigins = serverEnv.CORS_ORIGIN.split(',').map((origin) => origin.trim());

  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1 || serverEnv.NODE_ENV === 'development') {
          return callback(null, true);
        }
        return callback(new Error('Blocked by CORS policy: Origin not allowed'));
      },
      methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
      maxAge: 86400, // 24 hours preflight cache
    })
  );

  // Request Body Parsers with safe payload limits
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: false, limit: '10kb' }));

  // CSRF Protection on mutating requests
  app.use(csrfProtection);

  // Mount API Endpoints
  app.use('/api', apiRouter);

  // Fallback 404 handler
  app.use(notFoundHandler);

  // Global Error Handler
  app.use(errorHandler);

  return app;
}
