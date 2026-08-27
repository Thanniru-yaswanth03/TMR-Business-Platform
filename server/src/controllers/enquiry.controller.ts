import { Request, Response, NextFunction } from 'express';
import { EnquiryService } from '../services/enquiry.service.js';
import { CreateEnquiryInput } from '../types/enquiry.types.js';
import { ApiResponse } from '../utils/apiResponse.js';

export class EnquiryController {
  static async createEnquiry(
    req: Request<unknown, unknown, CreateEnquiryInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const enquiry = await EnquiryService.createEnquiry(req.body);

      ApiResponse.created(
        res,
        {
          id: enquiry._id,
          type: enquiry.type,
          createdAt: enquiry.createdAt,
        },
        'Thank you. Your enquiry has been received. TMR will contact you using the details provided.'
      );
    } catch (error) {
      next(error);
    }
  }
}
