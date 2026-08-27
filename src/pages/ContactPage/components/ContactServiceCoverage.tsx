import React from 'react';
import { MapPin, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const ContactServiceCoverage: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card variant="default" className="bg-white border border-slate-200 shadow-card p-6 space-y-4">
        <CardHeader className="p-0 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-navy-700" />
              <CardTitle className="text-lg text-brand-navy-950">
                Service Jurisdictions
              </CardTitle>
            </div>
            <Badge variant="navy">Coverage</Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 space-y-4 text-xs text-slate-600">
          <div className="p-3.5 rounded-xl bg-surface-muted border border-slate-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-brand-navy-950 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-600" /> Real Estate Brokerage
              </span>
              <Badge variant="gold">Hyderabad Focus</Badge>
            </div>
            <p className="leading-relaxed">
              Serving residential buyers, sellers, tenants, and investors across the entire Hyderabad metropolitan area.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-muted border border-slate-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-brand-navy-950 text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald-600" /> RTO & Transport Services
              </span>
              <Badge variant="emerald">TS + AP</Badge>
            </div>
            <p className="leading-relaxed">
              Driving licence and vehicle documentation assistance across transport office circles in Telangana and Andhra Pradesh.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* RTO Regulatory Independence Disclaimer */}
      <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p>
          <strong>Notice:</strong> TMR operates as an independent consultancy and broker. Official transport approvals, driving evaluations, and document issuance are handled strictly by state transport departments.
        </p>
      </div>
    </div>
  );
};
