import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageSquare, Building2, ShieldCheck, AlertCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/config/env';
import { FOOTER_SERVICE_LINKS } from '@/config/navigation';
import { buildPhoneUrl, buildWhatsAppUrl, BUSINESS_PHONE_DISPLAY, CTA_MESSAGES } from '@/config/contact';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(BUSINESS_DETAILS.contact.whatsapp, CTA_MESSAGES.home.general);
  const phoneUrl = buildPhoneUrl(BUSINESS_DETAILS.contact.phone);
  const displayPhone = BUSINESS_DETAILS.contact.phone || BUSINESS_PHONE_DISPLAY;

  return (
    <footer className="bg-brand-navy-950 text-slate-300 pt-16 pb-12 border-t border-brand-navy-900">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-navy-800/80">
          {/* Col 1: Brand Overview */}
          <div className="space-y-4">
            <Logo size="md" variant="full" theme="light" />

            <p className="text-sm text-slate-400 leading-relaxed pt-1">
              Real estate brokerage in Hyderabad (~5 years experience) and dedicated licence & vehicle documentation assistance across Telangana and Andhra Pradesh (~20 years experience).
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                <span>Real Estate Brokerage • Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                <span>RTO & Licence Assistance • TS & AP</span>
              </div>
            </div>
          </div>

          {/* Col 2: Real Estate Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Real Estate Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICE_LINKS.realEstate.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-brand-gold-300 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: RTO Services Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              RTO & Licence Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICE_LINKS.rtoServices.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-brand-emerald-400 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Coordinates */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={phoneUrl}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-brand-gold-300 transition-colors"
                  aria-label={`Call TMR on ${displayPhone}`}
                >
                  <Phone className="w-4 h-4 text-brand-gold-400 shrink-0" aria-hidden="true" />
                  <span>{displayPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-brand-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-brand-emerald-400 shrink-0" aria-hidden="true" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Hyderabad, Telangana • Serving Telangana & Andhra Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div className="py-6 border-b border-brand-navy-900/80">
          <div className="p-4 rounded-xl bg-brand-navy-900/90 border border-brand-navy-800 text-slate-400 text-xs leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-brand-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="text-slate-300">Disclaimer:</strong> TMR Real Estate & RTO Services is an independent private consultancy and document assistance provider. We are not an official government transport department (RTO) office or government agency. All official fees, taxes, tests, and documentation procedures are governed strictly by the respective state transport departments of Telangana and Andhra Pradesh.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_DETAILS.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            <Link to="/about" className="hover:text-brand-gold-300 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-brand-gold-300 transition-colors">
              Contact
            </Link>
            <Link to="/real-estate" className="hover:text-brand-gold-300 transition-colors">
              Real Estate
            </Link>
            <Link to="/rto-services" className="hover:text-brand-gold-300 transition-colors">
              RTO Services
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
