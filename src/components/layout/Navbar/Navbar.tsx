import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2, Car } from 'lucide-react';
import { PRIMARY_NAV_ITEMS } from '@/config/navigation';
import { BUSINESS_DETAILS } from '@/config/env';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const cleanPhone = BUSINESS_DETAILS.contact.phone ? BUSINESS_DETAILS.contact.phone.replace(/\s+/g, '') : '';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-navbar transition-all">
      {/* Top micro-bar for direct contact */}
      <div className="bg-brand-navy-950 text-slate-200 text-xs py-1.5 px-4 hidden sm:block border-b border-brand-navy-900">
        <Container size="xl" className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-brand-gold-400" aria-hidden="true" />
              <span>Real Estate: <strong className="text-white">Hyderabad</strong> (~5 yrs exp)</span>
            </span>
            <span className="text-brand-navy-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Car className="w-3.5 h-3.5 text-brand-emerald-400" aria-hidden="true" />
              <span>RTO & Licence: <strong className="text-white">Telangana & Andhra Pradesh</strong> (~20 yrs exp)</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {cleanPhone ? (
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-brand-gold-300 transition-colors"
                aria-label={`Call ${BUSINESS_DETAILS.contact.phone}`}
              >
                <Phone className="w-3 h-3 text-brand-gold-400" aria-hidden="true" />
                <span>{BUSINESS_DETAILS.contact.phone}</span>
              </a>
            ) : (
              <NavLink
                to="/contact"
                className="flex items-center gap-1.5 text-slate-300 hover:text-brand-gold-300 transition-colors"
              >
                <Phone className="w-3 h-3 text-brand-gold-400" aria-hidden="true" />
                <span>Call TMR Directly</span>
              </NavLink>
            )}
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Container size="xl" className="flex items-center justify-between h-16 sm:h-20">
        {/* Brand Logo */}
        <Logo asLink to="/" size="md" variant="full" theme="dark" />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-1.5"
          aria-label="Main Navigation"
        >
          {PRIMARY_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-colors relative flex items-center gap-1.5 ${
                  isActive
                    ? 'text-brand-navy-950 font-bold bg-slate-100/90 shadow-2xs'
                    : 'text-slate-600 hover:text-brand-navy-900 hover:bg-slate-50'
                }`
              }
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-brand-navy-100 text-brand-navy-900 border border-brand-navy-200/60">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <WhatsAppCTA
            size="sm"
            message="Hello TMR Services, I would like to inquire about your real estate and RTO services."
          >
            WhatsApp
          </WhatsAppCTA>

          <Button
            to="/contact"
            variant="primary"
            size="sm"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:text-brand-navy-950 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[65px] sm:top-[81px] bottom-0 bg-brand-navy-950/50 backdrop-blur-sm z-50 flex flex-col"
        >
          <div className="bg-white border-b border-slate-200 px-4 py-6 shadow-xl space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Mobile Nav Links */}
            <nav className="space-y-1" aria-label="Mobile Navigation">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-brand-navy-950 font-bold border border-slate-200'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-navy-950'
                    }`
                  }
                >
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    {item.description && (
                      <span className="text-xs text-slate-500 font-normal mt-0.5">
                        {item.description}
                      </span>
                    )}
                  </div>
                  {item.badge && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-navy-100 text-brand-navy-900">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Quick Action CTAs */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <WhatsAppCTA
                fullWidth
                size="md"
                message="Hello TMR Services, I would like to inquire about your services."
              >
                Chat on WhatsApp
              </WhatsAppCTA>

              <PhoneCTA
                variant="outline"
                size="md"
                fullWidth
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
