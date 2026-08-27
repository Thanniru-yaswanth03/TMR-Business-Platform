import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ApiResponse } from '../utils/apiResponse.js';

export const validateBody = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors: Record<string, string[]> = {};
        
        for (const issue of error.issues) {
          const key = issue.path.join('.') || 'body';
          if (!formattedErrors[key]) {
            formattedErrors[key] = [];
          }
          formattedErrors[key].push(issue.message);
        }

        ApiResponse.badRequest(res, 'Validation failed for one or more fields', formattedErrors);
        return;
      }

      ApiResponse.badRequest(res, 'Malformed request data');
    }
  };
};
