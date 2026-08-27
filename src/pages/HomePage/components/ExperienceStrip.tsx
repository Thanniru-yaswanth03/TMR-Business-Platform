import React from 'react';
import { Container } from '@/components/ui/Container';
import { Clock, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceStrip: React.FC = () => {
  const stats = [
    {
      value: '20+',
      unit: 'Years',
      title: 'Licence & RTO Experience',
      desc: 'Transport office documentation assistance across TS & AP',
      icon: <Clock className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
    },
    {
      value: '5+',
      unit: 'Years',
      title: 'Real Estate Brokerage',
      desc: 'Local property advisory and transactions in Hyderabad',
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold-600" aria-hidden="true" />,
    },
    {
      value: 'Hyderabad',
      unit: 'Focus',
      title: 'Real Estate Coverage',
      desc: 'Residential, commercial, and plot assistance',
      icon: <MapPin className="w-5 h-5 text-brand-navy-600" aria-hidden="true" />,
    },
    {
      value: 'TS + AP',
      unit: 'Wide',
      title: 'RTO Service Regions',
      desc: 'Telangana and Andhra Pradesh transport jurisdictions',
      icon: <CheckCircle2 className="w-5 h-5 text-brand-emerald-600" aria-hidden="true" />,
    },
  ];

  return (
    <section className="bg-surface-card border-b border-slate-200/80 py-6 sm:py-8 shadow-subtle relative z-20">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-muted/60 border border-slate-200/60 transition-all hover:bg-surface-muted"
            >
              <div className="p-2.5 rounded-xl bg-white shrink-0 border border-slate-200/80 shadow-2xs mt-0.5">
                {stat.icon}
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-heading font-extrabold text-2xl lg:text-3xl text-brand-navy-950 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-700">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm text-brand-navy-900 leading-snug truncate">
                  {stat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <p>
            * Operational experience and regional service coverage. TMR operates as an independent private consultancy.
          </p>
        </div>
      </Container>
    </section>
  );
};
