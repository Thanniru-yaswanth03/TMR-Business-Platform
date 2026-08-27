import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, Lock, User, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { useAdminAuth } from '@/context/useAdminAuth';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export const AdminLoginPage: React.FC = () => {
  const { login, isAuthenticated, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already authenticated, redirect to /admin or previous page
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login(username, password);
      if (result.success) {
        const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin';
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Invalid credentials. Please check your username and password.');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <SEOHead
        title="Admin Portal Login | TMR Services"
        description="Private operator login for TMR Real Estate & RTO Services."
        noIndex={true}
      />

      {/* Background ambient accents */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5B700_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-gold-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 space-y-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand-gold-500 text-brand-navy-950 flex items-center justify-center font-heading font-black text-xl mx-auto shadow-elevated">
          TMR
        </div>
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Admin Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Private dashboard for TMR business management & lead review
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0">
        <Card variant="default" className="bg-white/95 backdrop-blur-md shadow-elevated p-6 sm:p-8 rounded-2xl border border-slate-200">
          <CardHeader className="p-0 pb-6 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy-900">
              <Shield className="w-4 h-4 text-brand-gold-600" />
              <span>Operator Authentication</span>
            </div>
            <CardTitle className="text-lg text-brand-navy-950">
              Sign In to Continue
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Enter your single-admin credentials configured for this system.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <Input
                label="Admin Username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                leftIcon={<User className="w-4 h-4" />}
                required
                autoComplete="username"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Input
                label="Admin Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                leftIcon={<Lock className="w-4 h-4" />}
                required
                autoComplete="current-password"
                disabled={isSubmitting}
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In to Dashboard</span>
                )}
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <a
              href="/"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-brand-navy-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </a>
            <span>Protected Area</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminLoginPage;
