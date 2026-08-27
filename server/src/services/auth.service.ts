import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serverEnv } from '../config/env.js';

export interface AdminJwtPayload {
  username: string;
  role: 'admin';
  sessionId: string;
}

export class AuthService {
  private static cachedPasswordHash: string | null = null;
  // Active session tracking for immediate revocation on logout
  private static activeSessions = new Set<string>();

  /**
   * Initializes or returns the precomputed bcrypt hash of the admin password
   */
  private static async getAdminHash(): Promise<string> {
    if (serverEnv.ADMIN_PASSWORD_HASH && serverEnv.ADMIN_PASSWORD_HASH.trim().length > 0) {
      return serverEnv.ADMIN_PASSWORD_HASH;
    }

    if (!this.cachedPasswordHash) {
      const plainPassword = serverEnv.ADMIN_PASSWORD || 'tmr_admin_pass_2026!';
      this.cachedPasswordHash = await bcrypt.hash(plainPassword, 10);
    }

    return this.cachedPasswordHash;
  }

  /**
   * Validates admin credentials against configured environment values
   */
  static async verifyAdminCredentials(username: string, plainTextPassword: string): Promise<boolean> {
    const configuredUsername = serverEnv.ADMIN_USERNAME || 'admin';
    if (username.trim().toLowerCase() !== configuredUsername.trim().toLowerCase()) {
      return false;
    }

    const adminHash = await this.getAdminHash();
    return await bcrypt.compare(plainTextPassword, adminHash);
  }

  /**
   * Creates a new authenticated session and generates a signed JWT
   */
  static createSession(username: string): { token: string; sessionId: string } {
    const sessionId = crypto.randomUUID();
    this.activeSessions.add(sessionId);

    const payload: AdminJwtPayload = {
      username,
      role: 'admin',
      sessionId,
    };

    const token = jwt.sign(payload, serverEnv.JWT_SECRET, {
      expiresIn: '7d',
    });

    return { token, sessionId };
  }

  /**
   * Revokes a session on server-side logout
   */
  static revokeSession(sessionId: string): void {
    this.activeSessions.delete(sessionId);
  }

  /**
   * Revokes all active sessions (e.g. on security reset)
   */
  static revokeAllSessions(): void {
    this.activeSessions.clear();
  }

  /**
   * Verifies the token and confirms the session has not been revoked
   */
  static verifyToken(token: string): AdminJwtPayload | null {
    try {
      const decoded = jwt.verify(token, serverEnv.JWT_SECRET) as AdminJwtPayload;
      if (
        decoded &&
        decoded.role === 'admin' &&
        decoded.username &&
        decoded.sessionId &&
        this.activeSessions.has(decoded.sessionId)
      ) {
        return {
          username: decoded.username,
          role: 'admin',
          sessionId: decoded.sessionId,
        };
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Helper to check if a specific sessionId is active
   */
  static isSessionActive(sessionId: string): boolean {
    return this.activeSessions.has(sessionId);
  }
}
