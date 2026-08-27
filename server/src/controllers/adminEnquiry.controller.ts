import { Request, Response, NextFunction } from 'express';
import { AdminEnquiryService } from '../services/adminEnquiry.service.js';
import { queryEnquiriesSchema, updateEnquiryStatusSchema } from '../types/admin.types.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class AdminEnquiryController {
  static async listEnquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const parsedQuery = queryEnquiriesSchema.safeParse(req.query);
      if (!parsedQuery.success) {
        ApiResponse.badRequest(res, 'Invalid query parameters', {
          query: parsedQuery.error.issues.map((i) => i.message),
        });
        return;
      }

      const result = await AdminEnquiryService.listEnquiries(parsedQuery.data);
      ApiResponse.success(res, result, 'Enquiries retrieved successfully');
    } catch (error) {
      next(error);
    }
  }

  static async getEnquiryById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const enquiry = await AdminEnquiryService.getEnquiryById(id);

      if (!enquiry) {
        ApiResponse.error(res, 'Enquiry not found', 404);
        return;
      }

      ApiResponse.success(res, enquiry, 'Enquiry details retrieved');
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const parsedBody = updateEnquiryStatusSchema.safeParse(req.body);

      if (!parsedBody.success) {
        ApiResponse.badRequest(res, 'Invalid status value. Must be NEW, CONTACTED, or CLOSED');
        return;
      }

      const updated = await AdminEnquiryService.updateEnquiryStatus(id, parsedBody.data.status);

      if (!updated) {
        ApiResponse.error(res, 'Enquiry not found or could not be updated', 404);
        return;
      }

      ApiResponse.success(res, updated, `Status updated to ${parsedBody.data.status}`);
    } catch (error) {
      next(error);
    }
  }
}
