import mongoose, { Schema, Document } from 'mongoose';
import { IEnquiry } from '../types/enquiry.types.js';

export interface EnquiryDocument extends Omit<IEnquiry, '_id'>, Document {}

const enquirySchema = new Schema<EnquiryDocument>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      index: true,
    },
    type: {
      type: String,
      required: [true, 'Enquiry type is required'],
      enum: {
        values: ['REAL_ESTATE', 'RTO', 'GENERAL'],
        message: '{VALUE} is not a valid enquiry type',
      },
      index: true,
    },
    service: {
      type: String,
      trim: true,
      maxlength: [150, 'Service description too long'],
      default: null,
    },
    state: {
      type: String,
      trim: true,
      maxlength: [100, 'State name too long'],
      default: null,
    },
    location: {
      type: String,
      trim: true,
      maxlength: [150, 'Location too long'],
      default: null,
    },
    propertyType: {
      type: String,
      trim: true,
      maxlength: [100, 'Property type too long'],
      default: null,
    },
    transactionType: {
      type: String,
      trim: true,
      enum: {
        values: ['BUY', 'SELL', 'RENT', null],
        message: '{VALUE} is not a valid transaction type',
      },
      default: null,
    },
    budget: {
      type: String,
      trim: true,
      maxlength: [100, 'Budget too long'],
      default: null,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
      default: null,
    },
    status: {
      type: String,
      enum: ['NEW', 'CONTACTED', 'CLOSED'],
      default: 'NEW',
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound index for efficient enquiry lookups by type & created date
enquirySchema.index({ type: 1, createdAt: -1 });

export const Enquiry = mongoose.model<EnquiryDocument>('Enquiry', enquirySchema);
