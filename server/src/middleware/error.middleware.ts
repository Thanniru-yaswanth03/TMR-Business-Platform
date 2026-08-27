import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse.js';
import { serverEnv } from '../config/env.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  console.error('Unhandled server error:', err);

  const message = serverEnv.NODE_ENV === 'production'
    ? 'An unexpected error occurred while processing your request. Please try again later.'
    : err.message || 'Internal Server Error';

  ApiResponse.error(res, message, 500);
};

export const notFoundHandler = (req: Request, res: Response): void => {
  ApiResponse.error(res, `Cannot ${req.method} ${req.originalUrl}`, 404);
};
