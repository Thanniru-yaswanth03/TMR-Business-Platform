import React from 'react';
import { MessageSquare, Phone, Clock, User, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { BUSINESS_DETAILS } from '@/config/env';

export const ContactDirectChannels: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Primary Channel: WhatsApp */}
      <Card variant="default" className="bg-white border-2 border-brand-emerald-500/30 shadow-card p-6 space-y-4">
        <CardHeader className="p-0 space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-emerald-700 flex items-center justify-center border border-emerald-200">
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
            </div>
            <Badge variant="emerald" withDot>
              Primary Channel
            </Badge>
          </div>

          <div>
            <CardTitle className="text-lg text-brand-navy-950">
              WhatsApp Consultation
            </CardTitle>
            <CardDescription className="text-xs text-slate-600 mt-0.5">
              Fastest way to get answers, share requirement notes, or ask procedural questions.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-0 pt-2 space-y-3">
          <WhatsAppCTA
            size="md"
            fullWidth
            message="Hello TMR, I would like to discuss a requirement."
          >
            Start WhatsApp Chat
          </WhatsAppCTA>

          <p className="text-[11px] text-slate-500 text-center">
            One-tap chat opens directly on WhatsApp mobile or web.
          </p>
        </CardContent>
      </Card>

      {/* Secondary Channel: Phone Call */}
      <Card variant="default" className="bg-white border border-slate-200 shadow-card p-6 space-y-4">
        <CardHeader className="p-0 space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-brand-gold-50 text-brand-gold-800 flex items-center justify-center border border-brand-gold-200">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </div>
            <Badge variant="gold">Direct Call</Badge>
          </div>

          <div>
            <CardTitle className="text-lg text-brand-navy-950">
              Direct Phone Call
            </CardTitle>
            <CardDescription className="text-xs text-slate-600 mt-0.5">
              Speak directly with TMR to discuss property opportunities or transport cases.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-0 pt-2 space-y-3">
          <PhoneCTA size="md" variant="gold" fullWidth>
            {BUSINESS_DETAILS.contact.phone ? `Call ${BUSINESS_DETAILS.contact.phone}` : 'Call TMR Directly'}
          </PhoneCTA>

          <p className="text-[11px] text-slate-500 text-center">
            Direct personal conversation without call centers.
          </p>
        </CardContent>
      </Card>

      {/* Direct Consultant Profile Note */}
      <div className="p-4 rounded-xl bg-brand-navy-950 text-slate-300 border border-brand-navy-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 font-bold text-white">
          <User className="w-4 h-4 text-brand-gold-400" />
          <span>{BUSINESS_DETAILS.owner}</span>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11px]">
          Lead consultant managing all inquiries personally. ~5 years real estate experience in Hyderabad and ~20 years licence/transport procedural experience across Telangana and Andhra Pradesh.
        </p>
        <div className="pt-2 border-t border-brand-navy-800/80 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-brand-gold-400" /> Personal Attention
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-brand-emerald-400" /> Direct Trust
          </span>
        </div>
      </div>
    </div>
  );
};
