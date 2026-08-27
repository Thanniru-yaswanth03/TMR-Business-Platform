import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { LayoutDashboard, Inbox, LogOut, Shield, ArrowUpRight } from 'lucide-react';
import { useAdminAuth } from '@/context/useAdminAuth';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans antialiased text-slate-900">
      {/* Admin Top Navigation Bar */}
      <header className="bg-brand-navy-950 text-white border-b border-brand-navy-800 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand and Portal Identifier */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-gold-500 text-brand-navy-950 flex items-center justify-center font-heading font-black text-sm">
                TMR
              </div>
              <div>
                <span className="font-heading font-extrabold text-sm text-white tracking-tight block">
                  Admin Portal
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  Lead & Operations Workspace
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden sm:flex items-center gap-1.5 ml-4" aria-label="Admin Navigation">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-brand-navy-800 text-brand-gold-400 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-brand-navy-900'
                  }`
                }
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="/admin/enquiries"
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-brand-navy-800 text-brand-gold-400 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-brand-navy-900'
                  }`
                }
              >
                <Inbox className="w-4 h-4" />
                <span>Enquiries</span>
              </NavLink>
            </nav>
          </div>

          {/* Right: Authenticated User & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-3.5 h-3.5 text-brand-emerald-400" />
              <span>Operator:</span>
              <Badge variant="navy" size="sm" className="font-mono text-slate-200">
                {user?.username || 'admin'}
              </Badge>
            </div>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded hover:bg-brand-navy-900 transition-colors"
              title="View Public Site in new tab"
            >
              <span>Public Site</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs flex items-center gap-1.5 py-1.5 px-3"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="sm:hidden border-t border-brand-navy-900 px-4 py-2 flex items-center gap-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex-1 py-1.5 text-center rounded-lg text-xs font-bold ${
                isActive ? 'bg-brand-navy-800 text-brand-gold-400' : 'text-slate-400'
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/enquiries"
            className={({ isActive }) =>
              `flex-1 py-1.5 text-center rounded-lg text-xs font-bold ${
                isActive ? 'bg-brand-navy-800 text-brand-gold-400' : 'text-slate-400'
              }`
            }
          >
            Enquiries
          </NavLink>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};
