import React from 'react';
import { Search, MessageSquare, PhoneCall, Building2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { CTA_MESSAGES } from '@/config/contact';

export const FutureListingsPlaceholder: React.FC = () => {
  return (
    <Section spacing="lg" background="surface" className="border-t border-b border-slate-200/80">
      <Container size="lg">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-card p-6 sm:p-10 text-center space-y-6">
          <div className="inline-flex items-center justify-center">
            <Badge variant="gold" withDot icon={<Search className="w-3.5 h-3.5" />}>
              Specific Property Inquiry
            </Badge>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy-950 tracking-tight">
              Looking for a Specific Property?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us what you are looking for and we will discuss available opportunities that match your specific budget and location criteria across Hyderabad.
            </p>
          </div>

          {/* 2 Requirement Prompt Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2 text-left">
            <div className="p-4 rounded-xl bg-surface-muted border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy-950">
                <Building2 className="w-4 h-4 text-brand-gold-600" />
                <span>Buyer / Tenant Requirement</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Share your target zone (e.g. West, North, or Central Hyderabad), category (flat, villa, plot, commercial), and budget.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-muted border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy-950">
                <Building2 className="w-4 h-4 text-brand-navy-600" />
                <span>Property Owner / Seller</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Share your property specifications, location, title details, and expected pricing for prompt buyer matchmaking.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <WhatsAppCTA
              size="md"
              message={CTA_MESSAGES.realEstate.general}
            >
              Send Requirement on WhatsApp
            </WhatsAppCTA>

            <PhoneCTA size="md" variant="primary">
              Call to Discuss
            </PhoneCTA>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-emerald-600" /> WhatsApp Response
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-brand-gold-600" /> Direct Phone Support
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
