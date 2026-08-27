import { Request, Response, NextFunction } from 'express';
import { AuthService, AdminJwtPayload } from '../services/auth.service.js';
import { LoginInput } from '../types/admin.types.js';
import { serverEnv } from '../config/env.js';
import { ApiResponse } from '../utils/apiResponse.js';
import jwt from 'jsonwebtoken';

export class AuthController {
  static async login(
    req: Request<unknown, unknown, LoginInput>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = req.body;

      const isValid = await AuthService.verifyAdminCredentials(username, password);
      if (!isValid) {
        ApiResponse.error(res, 'Invalid credentials', 401);
        return;
      }

      const { token } = AuthService.createSession(username.trim());

      // Set secure HTTP-only cookie with environment-appropriate security
      res.cookie(serverEnv.COOKIE_NAME, token, {
        httpOnly: true,
        secure: serverEnv.NODE_ENV === 'production',
        sameSite: serverEnv.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: '/',
      });

      ApiResponse.success(
        res,
        {
          user: {
            username: username.trim(),
            role: 'admin',
          },
          token, // fallback token for Authorization header clients
        },
        'Logged in successfully'
      );
    } catch (error) {
      next(error);
    }
  }

  static logout(req: Request, res: Response): void {
    // Extract token to revoke server-side session
    let token = req.cookies?.[serverEnv.COOKIE_NAME];
    if (!token && req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.substring(7).trim();
    }

    if (token) {
      try {
        const decoded = jwt.decode(token) as AdminJwtPayload | null;
        if (decoded?.sessionId) {
          AuthService.revokeSession(decoded.sessionId);
        }
      } catch (err) {
        console.warn('Could not decode session token on logout:', err);
      }
    }

    // Clear authentication cookie
    res.clearCookie(serverEnv.COOKIE_NAME, {
      httpOnly: true,
      secure: serverEnv.NODE_ENV === 'production',
      sameSite: serverEnv.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    });

    ApiResponse.success(res, { success: true }, 'Logged out successfully');
  }

  static getMe(req: Request, res: Response): void {
    if (!req.admin) {
      ApiResponse.error(res, 'Unauthenticated', 401);
      return;
    }

    ApiResponse.success(
      res,
      {
        user: {
          username: req.admin.username,
          role: req.admin.role,
        },
      },
      'Admin session active'
    );
  }
}
