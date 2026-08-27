import { Request, Response } from 'express';
import { isDbConnected } from '../config/db.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class HealthController {
  static checkHealth(_req: Request, res: Response): void {
    const dbStatus = isDbConnected() ? 'connected' : 'disconnected';
    const isHealthy = isDbConnected();

    const data = {
      status: isHealthy ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      database: dbStatus,
      environment: process.env.NODE_ENV || 'development',
    };

    ApiResponse.success(res, data, 'Health check passed', isHealthy ? 200 : 503);
  }
}
