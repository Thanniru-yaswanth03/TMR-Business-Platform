import { Response } from 'express';

export interface ApiResponseData<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export class ApiResponse {
  static success<T>(
    res: Response,
    data: T,
    message = 'Success',
    statusCode = 200
  ): Response {
    const payload: ApiResponseData<T> = {
      success: true,
      message,
      data,
    };
    return res.status(statusCode).json(payload);
  }

  static created<T>(
    res: Response,
    data: T,
    message = 'Resource created successfully'
  ): Response {
    return this.success(res, data, message, 201);
  }

  static error(
    res: Response,
    message = 'An unexpected error occurred',
    statusCode = 500,
    errors?: Record<string, string[]>
  ): Response {
    const payload: ApiResponseData = {
      success: false,
      error: message,
      ...(errors && { errors }),
    };
    return res.status(statusCode).json(payload);
  }

  static badRequest(
    res: Response,
    message = 'Invalid request data',
    errors?: Record<string, string[]>
  ): Response {
    return this.error(res, message, 400, errors);
  }
}
