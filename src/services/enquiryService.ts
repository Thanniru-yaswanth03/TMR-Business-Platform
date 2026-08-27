import { ENV } from '@/config/env';
import { EnquirySubmissionPayload, EnquirySubmissionResponse } from '@/types/enquiry';

export class EnquiryService {
  private static baseUrl = ENV.API_BASE_URL;

  /**
   * Submits a customer lead / enquiry to the TMR backend
   */
  static async submitEnquiry(payload: EnquirySubmissionPayload): Promise<EnquirySubmissionResponse> {
    try {
      // Determine endpoint (support relative /api proxy in Vite or full URL)
      const endpoint = `${this.baseUrl}/enquiries`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.error || data.message || 'Failed to submit enquiry. Please try again.',
          error: data.error || 'Server error',
          errors: data.errors,
        };
      }

      return {
        success: true,
        message: data.message || 'Thank you. Your enquiry has been received. TMR will contact you using the details provided.',
        data: data.data,
      };
    } catch (err: unknown) {
      console.error('Enquiry submission error:', err);
      return {
        success: false,
        message: 'Could not connect to the enquiry service. You can also reach TMR directly on WhatsApp or phone.',
        error: err instanceof Error ? err.message : 'Network error',
      };
    }
  }

  /**
   * Checks the health of the backend server
   */
  static async checkHealth(): Promise<{ healthy: boolean; details?: unknown }> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      if (response.ok) {
        const data = await response.json();
        return { healthy: true, details: data };
      }
      return { healthy: false };
    } catch {
      return { healthy: false };
    }
  }
}
