import React from 'react';
import { Container } from '@/components/ui/Container';
import { Clock, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

export const RtoExperienceStrip: React.FC = () => {
  const stats = [
    {
      value: '20+',
      unit: 'Years',
      title: 'Licence & RTO Experience',
      desc: 'Transport office documentation facilitation',
      icon: <Clock className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
    },
    {
      value: 'TS + AP',
      unit: 'States',
      title: 'Service Coverage',
      desc: 'Telangana & Andhra Pradesh transport jurisdictions',
      icon: <MapPin className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
    },
    {
      value: 'Direct',
      unit: 'Contact',
      title: 'Phone & WhatsApp Assistance',
      desc: '1-on-1 personal guidance without call centers',
      icon: <MessageSquare className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
    },
    {
      value: 'Independent',
      unit: 'Consultant',
      title: 'Private Document Guidance',
      desc: 'Procedural assistance for vehicle owners & drivers',
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
    },
  ];

  return (
    <section className="bg-surface-card border-b border-slate-200/80 py-8 shadow-subtle relative z-20">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div
              key={stat.title}
              className={`flex items-start gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className="p-2.5 rounded-xl bg-surface-muted shrink-0 border border-slate-200/60 mt-1">
                {stat.icon}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading font-extrabold text-2xl lg:text-3xl text-brand-navy-950 tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald-700">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-sm text-brand-navy-900 leading-snug">
                  {stat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-left">
          <p>
            * TMR operates as an independent private document consultant and is not an official government transport department (RTO) office.
          </p>
        </div>
      </Container>
    </section>
  );
};
