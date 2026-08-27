import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import { Badge } from '@/components/ui/Badge';
import { Heading } from '@/components/ui/Heading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { Divider } from '@/components/ui/Divider';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Phone, MessageSquare, Building2, ShieldCheck } from 'lucide-react';

export const DesignSystemPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedService, setSelectedService] = useState('real-estate');

  return (
    <div className="space-y-0 pb-16">
      {/* Design System Hero */}
      <Section spacing="lg" background="navy">
        <Container size="xl" className="space-y-4">
          <Badge variant="gold" withDot>Design Token System v2.0</Badge>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            TMR Visual Identity & Component System
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Centralized design tokens, brand assets, typography hierarchies, and accessible UI components for TMR Real Estate & RTO Services.
          </p>
        </Container>
      </Section>

      {/* 1. Brand Logo Suite */}
      <Section spacing="md" background="surface">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Clean, recognizable SVG monogram and wordmark variants.">
            1. Brand Logo Suite
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Full Dark (for light surface) */}
            <Card variant="bordered" className="p-6 flex flex-col items-center justify-center text-center space-y-4 bg-white">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Logo (Light Bg)</span>
              <Logo variant="full" theme="dark" size="md" />
            </Card>

            {/* Full Light (for dark surface) */}
            <Card variant="bordered" className="p-6 flex flex-col items-center justify-center text-center space-y-4 bg-brand-navy-950 text-white">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Logo (Dark Bg)</span>
              <Logo variant="full" theme="light" size="md" />
            </Card>

            {/* Mark Only */}
            <Card variant="bordered" className="p-6 flex flex-col items-center justify-center text-center space-y-4 bg-white">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Monogram Mark</span>
              <div className="flex items-center gap-3">
                <Logo variant="mark" size="sm" />
                <Logo variant="mark" size="md" />
                <Logo variant="mark" size="lg" />
              </div>
            </Card>

            {/* Stacked Logo */}
            <Card variant="bordered" className="p-6 flex flex-col items-center justify-center text-center space-y-4 bg-white">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Stacked Logo</span>
              <Logo variant="stacked" theme="dark" size="md" />
            </Card>
          </div>
        </Container>
      </Section>

      {/* 2. Color Palette System */}
      <Section spacing="md" background="warm-white">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Calibrated color tokens ensuring WCAG AA contrast compliance.">
            2. Color Palette System
          </Heading>

          <div className="space-y-6">
            {/* Primary Navy */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Primary: Deep Navy (Trust & Authority)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-11 gap-2 text-xs">
                {[
                  { label: '50', bg: 'bg-brand-navy-50', text: 'text-brand-navy-900', hex: '#F2F5F8' },
                  { label: '100', bg: 'bg-brand-navy-100', text: 'text-brand-navy-900', hex: '#E1E8EF' },
                  { label: '200', bg: 'bg-brand-navy-200', text: 'text-brand-navy-900', hex: '#C3D1DE' },
                  { label: '300', bg: 'bg-brand-navy-300', text: 'text-brand-navy-900', hex: '#9EB5C9' },
                  { label: '400', bg: 'bg-brand-navy-400', text: 'text-white', hex: '#688CAE' },
                  { label: '500', bg: 'bg-brand-navy-500', text: 'text-white', hex: '#3D6893' },
                  { label: '600', bg: 'bg-brand-navy-600', text: 'text-white', hex: '#264D76' },
                  { label: '700', bg: 'bg-brand-navy-700', text: 'text-white', hex: '#183759' },
                  { label: '800 (Core)', bg: 'bg-brand-navy-800', text: 'text-white', hex: '#0E233D' },
                  { label: '900', bg: 'bg-brand-navy-900', text: 'text-white', hex: '#09182B' },
                  { label: '950', bg: 'bg-brand-navy-950', text: 'text-white', hex: '#050D18' },
                ].map((c) => (
                  <div key={c.label} className={`${c.bg} ${c.text} p-3 rounded-xl shadow-2xs flex flex-col justify-between h-20`}>
                    <span className="font-bold">{c.label}</span>
                    <span className="font-mono text-[10px] opacity-80">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warm Gold */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Secondary: Warm Muted Gold (Refinement)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 text-xs">
                {[
                  { label: '50', bg: 'bg-brand-gold-50', text: 'text-brand-gold-950', hex: '#FDFBF7' },
                  { label: '100', bg: 'bg-brand-gold-100', text: 'text-brand-gold-950', hex: '#FBF6EB' },
                  { label: '200', bg: 'bg-brand-gold-200', text: 'text-brand-gold-950', hex: '#F5E9CE' },
                  { label: '300', bg: 'bg-brand-gold-300', text: 'text-brand-gold-950', hex: '#ECD7A8' },
                  { label: '400', bg: 'bg-brand-gold-400', text: 'text-brand-navy-950', hex: '#DEC07C' },
                  { label: '500', bg: 'bg-brand-gold-500', text: 'text-brand-navy-950', hex: '#CCA652' },
                  { label: '600 (Core)', bg: 'bg-brand-gold-600', text: 'text-brand-navy-950', hex: '#B88E36' },
                  { label: '700', bg: 'bg-brand-gold-700', text: 'text-white', hex: '#967128' },
                  { label: '800', bg: 'bg-brand-gold-800', text: 'text-white', hex: '#785923' },
                  { label: '900', bg: 'bg-brand-gold-900', text: 'text-white', hex: '#624920' },
                ].map((c) => (
                  <div key={c.label} className={`${c.bg} ${c.text} p-3 rounded-xl shadow-2xs flex flex-col justify-between h-20`}>
                    <span className="font-bold">{c.label}</span>
                    <span className="font-mono text-[10px] opacity-80">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emerald & Surfaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="bg-brand-emerald-600 text-white p-4 rounded-xl shadow-2xs flex flex-col justify-between h-24">
                <span className="font-bold">WhatsApp Emerald</span>
                <span className="text-xs">#059669 (Active Action)</span>
              </div>
              <div className="bg-surface-warm text-slate-900 border border-slate-300 p-4 rounded-xl shadow-2xs flex flex-col justify-between h-24">
                <span className="font-bold">Warm Off-White</span>
                <span className="text-xs">#FAF9F6 (Page Body)</span>
              </div>
              <div className="bg-white text-slate-900 border border-slate-200 p-4 rounded-xl shadow-card flex flex-col justify-between h-24">
                <span className="font-bold">Card Surface</span>
                <span className="text-xs">#FFFFFF (Elevated Elements)</span>
              </div>
              <div className="bg-brand-navy-950 text-white p-4 rounded-xl shadow-2xs flex flex-col justify-between h-24">
                <span className="font-bold">Ultra Dark Surface</span>
                <span className="text-xs">#050D18 (Header / Footer)</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Typography Scales */}
      <Section spacing="md" background="surface">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Clean sans-serif interface paired with optional display serif for real estate prestige.">
            3. Typography Hierarchy
          </Heading>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase">Display / Real Estate Prestige (Cinzel Serif)</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-brand-navy-950">
                Premium Hyderabad Real Estate Consultancy
              </p>
            </div>

            <Divider />

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase">Heading 1 (Plus Jakarta Sans)</span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy-950">
                Two Decades of Trusted RTO & Licence Assistance
              </h1>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase">Heading 2 (Plus Jakarta Sans)</span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-navy-950">
                Buyer & Seller Matchmaking in Hyderabad
              </h2>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase">Body / Interface (Inter)</span>
              <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                We deliver straightforward, relationship-driven property brokerage and transport documentation assistance across Telangana and Andhra Pradesh with complete transparency.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Interactive Buttons & CTAs */}
      <Section spacing="md" background="warm-white">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Buttons, variants, sizes, icon buttons, and preconfigured WhatsApp and Phone CTAs.">
            4. Buttons, Icons & Action CTAs
          </Heading>

          {/* Button Variants */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Button Variants</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary (Navy)</Button>
              <Button variant="gold">Secondary (Gold)</Button>
              <Button variant="emerald">Emerald (Action)</Button>
              <Button variant="navy-outline">Navy Outline</Button>
              <Button variant="outline">Slate Outline</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="dark">Dark Button</Button>
            </div>

            <Divider />

            <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" variant="primary">Small (sm)</Button>
              <Button size="md" variant="primary">Medium (md)</Button>
              <Button size="lg" variant="primary">Large (lg)</Button>
              <Button size="md" variant="primary" isLoading>Loading Button</Button>
            </div>

            <Divider />

            <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Specialized Contact CTAs</h3>
            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppCTA />
              <PhoneCTA />
              <WhatsAppCTA size="sm" variant="gold">Custom Gold WhatsApp</WhatsAppCTA>
            </div>

            <Divider />

            <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Accessible Icon Buttons</h3>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton aria-label="Call direct" icon={<Phone className="w-4 h-4" />} variant="primary" />
              <IconButton aria-label="WhatsApp chat" icon={<MessageSquare className="w-4 h-4" />} variant="emerald" />
              <IconButton aria-label="Security check" icon={<ShieldCheck className="w-4 h-4" />} variant="gold" />
              <IconButton aria-label="Building services" icon={<Building2 className="w-4 h-4" />} variant="outline" shape="circle" />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Badges, Cards & Dividers */}
      <Section spacing="md" background="surface">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Status indicators, content cards, and sectional dividers.">
            5. Badges & Composable Cards
          </Heading>

          {/* Badges */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-brand-navy-950 uppercase tracking-wider">Badge Styles</h3>
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="navy" withDot>Hyderabad Brokerage</Badge>
              <Badge variant="gold" withDot>TS & AP RTO</Badge>
              <Badge variant="emerald" withDot>Direct Assistance</Badge>
              <Badge variant="slate">20+ Years Exp</Badge>
              <Badge variant="outline">Consultancy</Badge>
              <Badge variant="subtle" withDot>Referral-Driven</Badge>
            </div>
          </div>

          {/* Composable Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="accent-gold">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="gold" withDot>Real Estate</Badge>
                  <span className="text-xs text-slate-400 font-medium">Hyderabad</span>
                </div>
                <CardTitle className="pt-2">Property Brokerage & Matchmaking</CardTitle>
                <CardDescription>
                  Residential & commercial sales, rentals, and land deals across Hyderabad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Comprehensive property advisory connecting verified buyers directly with property owners.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="primary" size="sm">Explore</Button>
                <WhatsAppCTA size="sm" variant="emerald" />
              </CardFooter>
            </Card>

            <Card variant="accent-navy">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="navy" withDot>RTO Services</Badge>
                  <span className="text-xs text-slate-400 font-medium">TS & AP</span>
                </div>
                <CardTitle className="pt-2">Licence & Vehicle Documentation</CardTitle>
                <CardDescription>
                  Prompt transport documentation facilitation with over 20 years of experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Driving licence assistance, vehicle RC transfer, state NOC assistance, and tax paperwork.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="primary" size="sm">Learn More</Button>
                <WhatsAppCTA size="sm" variant="emerald" />
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Form Controls & Interactive Inputs */}
      <Section spacing="md" background="warm-white">
        <Container size="xl" className="space-y-8">
          <Heading as="h2" size="h2" accentGold subtitle="Accessible inputs, selects, textareas, with clear label associations and error states.">
            6. Accessible Form Controls
          </Heading>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="e.g. Rajesh Kumar"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Enter your name as per government records."
              />

              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                required
                leftIcon={<Phone className="w-4 h-4" />}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Select
                label="Service Category"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                options={[
                  { value: 'real-estate', label: 'Hyderabad Real Estate Brokerage' },
                  { value: 'rto-driving-licence', label: 'Driving Licence Assistance (TS & AP)' },
                  { value: 'rto-rc-transfer', label: 'Vehicle RC & Ownership Transfer' },
                  { value: 'rto-noc', label: 'Interstate NOC Assistance' },
                ]}
              />

              <Input
                label="Location / Area"
                placeholder="e.g. Gachibowli, Hyderabad"
              />
            </div>

            <Textarea
              label="Inquiry Details"
              placeholder="Please describe your property requirements or RTO assistance needs..."
              rows={3}
              helperText="We will respond via WhatsApp or direct phone call."
            />

            <div className="pt-2 flex justify-end">
              <Button variant="gold" size="md">
                Submit Inquiry Test
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
