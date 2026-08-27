import mongoose from 'mongoose';
import { Enquiry, EnquiryDocument } from '../models/enquiry.model.js';
import { QueryEnquiriesInput, PaginatedEnquiriesResult, EnquiryCounts } from '../types/admin.types.js';
import { EnquiryStatus } from '../types/enquiry.types.js';

export class AdminEnquiryService {
  /**
   * Lists enquiries with search, filtering, sorting, and pagination
   */
  static async listEnquiries(query: QueryEnquiriesInput): Promise<PaginatedEnquiriesResult> {
    const filter: Record<string, unknown> = {};

    if (query.status) {
      filter.status = query.status;
    }

    if (query.type) {
      filter.type = query.type;
    }

    if (query.search && query.search.trim().length > 0) {
      const sanitized = query.search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filter.$or = [
        { name: { $regex: sanitized, $options: 'i' } },
        { phone: { $regex: sanitized, $options: 'i' } },
        { service: { $regex: sanitized, $options: 'i' } },
      ];
    }

    const sortOrder: Record<string, 1 | -1> = query.sort === 'oldest' ? { createdAt: 1 } : { createdAt: -1 };
    const skip = (query.page - 1) * query.limit;

    const [data, total, statusCounts, typeCounts] = await Promise.all([
      Enquiry.find(filter).sort(sortOrder).skip(skip).limit(query.limit).lean(),
      Enquiry.countDocuments(filter),
      Enquiry.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Enquiry.aggregate([
        { $group: { _id: '$type', count: { $sum: 1 } } },
      ]),
    ]);

    const counts: EnquiryCounts = {
      total: 0,
      new: 0,
      contacted: 0,
      closed: 0,
      realEstate: 0,
      rto: 0,
      general: 0,
    };

    statusCounts.forEach((sc: { _id: string; count: number }) => {
      counts.total += sc.count;
      if (sc._id === 'NEW') counts.new = sc.count;
      if (sc._id === 'CONTACTED') counts.contacted = sc.count;
      if (sc._id === 'CLOSED') counts.closed = sc.count;
    });

    typeCounts.forEach((tc: { _id: string; count: number }) => {
      if (tc._id === 'REAL_ESTATE') counts.realEstate = tc.count;
      if (tc._id === 'RTO') counts.rto = tc.count;
      if (tc._id === 'GENERAL') counts.general = tc.count;
    });

    const totalPages = Math.ceil(total / query.limit) || 1;

    return {
      data,
      pagination: {
        total,
        page: query.page,
        limit: query.limit,
        totalPages,
      },
      counts,
    };
  }

  /**
   * Retrieves a single enquiry by its ID
   */
  static async getEnquiryById(id: string): Promise<EnquiryDocument | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return null;
    }
    return await Enquiry.findById(id).lean() as unknown as EnquiryDocument | null;
  }

  /**
   * Updates an enquiry status (NEW, CONTACTED, CLOSED)
   */
  static async updateEnquiryStatus(id: string, status: EnquiryStatus): Promise<EnquiryDocument | null> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return null;
    }

    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return null;
    }

    enquiry.status = status;
    return await enquiry.save();
  }
}
