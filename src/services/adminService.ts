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
  private static TOKEN_KEY = 'tmr_admin_jwt';

  private static getHeaders(extraHeaders: Record<string, string> = {}): Record<string, string> {
    const headers: Record<string, string> = { ...extraHeaders };
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(this.TOKEN_KEY) || sessionStorage.getItem(this.TOKEN_KEY);
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return headers;
  }

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

      let json: { success?: boolean; error?: string; data?: { user?: AdminUser; token?: string } } = {};
      try {
        json = await response.json();
      } catch {
        json = {};
      }

      if (!response.ok) {
        if (response.status === 404) {
          return {
            success: false,
            error: 'Backend API not found (404). Please verify VITE_API_BASE_URL on Vercel.',
          };
        }
        return {
          success: false,
          error: json.error || `Server returned error (${response.status}). Please try again.`,
        };
      }

      // Persist fallback token for cross-origin Bearer header requests
      if (json.data?.token && typeof window !== 'undefined') {
        localStorage.setItem(this.TOKEN_KEY, json.data.token);
      }

      return {
        success: true,
        user: json.data?.user,
      };
    } catch (err) {
      console.error('Admin login error:', err);
      return {
        success: false,
        error: 'Could not connect to backend API. Please check your Render service status & VITE_API_BASE_URL setting.',
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
        headers: this.getHeaders(),
        credentials: 'include',
      });
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.TOKEN_KEY);
        sessionStorage.removeItem(this.TOKEN_KEY);
      }
      return true;
    } catch (err) {
      console.error('Admin logout error:', err);
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.TOKEN_KEY);
        sessionStorage.removeItem(this.TOKEN_KEY);
      }
      return false;
    }
  }

  /**
   * Fetches current authenticated admin session
   */
  static async getMe(): Promise<{ authenticated: boolean; user?: AdminUser }> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/me`, {
        headers: this.getHeaders(),
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
        headers: this.getHeaders(),
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
        headers: this.getHeaders(),
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
        headers: this.getHeaders({ 'Content-Type': 'application/json' }),
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
