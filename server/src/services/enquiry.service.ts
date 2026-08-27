import { Enquiry, EnquiryDocument } from '../models/enquiry.model.js';
import { CreateEnquiryInput } from '../types/enquiry.types.js';

export class EnquiryService {
  static async createEnquiry(input: CreateEnquiryInput): Promise<EnquiryDocument> {
    const enquiry = new Enquiry({
      name: input.name,
      phone: input.phone,
      type: input.type,
      service: input.service || null,
      state: input.state || null,
      location: input.location || null,
      propertyType: input.propertyType || null,
      transactionType: input.transactionType || null,
      budget: input.budget || null,
      message: input.message || null,
      status: 'NEW',
    });

    return await enquiry.save();
  }
}
