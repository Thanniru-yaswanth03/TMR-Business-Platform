import { ENV } from '@/config/env';
import {
  AdminUser,
  AdminEnquiryItem,
  AdminEnquiryListResponse,
  AdminEnquiryQuery,
} from '@/types/admin';
import { EnquiryStatus } from '@/types/enquiry';

export class AdminService {
  private static baseUrl = ENV.API_BASE_URL;

  /**
   * Logs in the single administrator
   */
  static async login(
    username: string,
    password: string
  ): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: json.error || 'Invalid credentials. Please try again.',
        };
      }

      return {
        success: true,
        user: json.data?.user,
      };
    } catch (err) {
      console.error('Admin login error:', err);
      return {
        success: false,
        error: 'Could not connect to authentication service.',
      };
    }
  }

  /**
   * Logs out the administrator and clears session cookie
   */
  static async logout(): Promise<boolean> {
    try {
      await fetch(`${this.baseUrl}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      return true;
    } catch (err) {
      console.error('Admin logout error:', err);
      return false;
    }
  }

  /**
   * Fetches current authenticated admin session
   */
  static async getMe(): Promise<{ authenticated: boolean; user?: AdminUser }> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/me`, {
        credentials: 'include',
      });

      if (!response.ok) {
        return { authenticated: false };
      }

      const json = await response.json();
      return {
        authenticated: true,
        user: json.data?.user,
      };
    } catch {
      return { authenticated: false };
    }
  }

  /**
   * Fetches paginated & filtered enquiries list
   */
  static async getEnquiries(query: AdminEnquiryQuery = {}): Promise<AdminEnquiryListResponse | null> {
    try {
      const params = new URLSearchParams();
      if (query.page) params.set('page', String(query.page));
      if (query.limit) params.set('limit', String(query.limit));
      if (query.status && query.status !== 'ALL') params.set('status', query.status);
      if (query.type && query.type !== 'ALL') params.set('type', query.type);
      if (query.search && query.search.trim()) params.set('search', query.search.trim());
      if (query.sort) params.set('sort', query.sort);

      const url = `${this.baseUrl}/admin/enquiries?${params.toString()}`;
      const response = await fetch(url, {
        credentials: 'include',
      });

      if (!response.ok) {
        return null;
      }

      const json = await response.json();
      return json.data as AdminEnquiryListResponse;
    } catch (err) {
      console.error('Fetch enquiries error:', err);
      return null;
    }
  }

  /**
   * Fetches a single enquiry by its ID
   */
  static async getEnquiryById(id: string): Promise<AdminEnquiryItem | null> {
    try {
      const response = await fetch(`${this.baseUrl}/admin/enquiries/${id}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        return null;
      }

      const json = await response.json();
      return json.data as AdminEnquiryItem;
    } catch (err) {
      console.error('Fetch enquiry detail error:', err);
      return null;
    }
  }

  /**
   * Updates an enquiry status
   */
  static async updateStatus(id: string, status: EnquiryStatus): Promise<AdminEnquiryItem | null> {
    try {
      const response = await fetch(`${this.baseUrl}/admin/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        return null;
      }

      const json = await response.json();
      return json.data as AdminEnquiryItem;
    } catch (err) {
      console.error('Update status error:', err);
      return null;
    }
  }
}
