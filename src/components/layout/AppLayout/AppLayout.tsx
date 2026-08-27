import React from 'react';
import { Outlet } from 'react-router-dom';
import { SkipLink } from '@/components/ui/SkipLink';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-amber-200 selection:text-brand-navy-950">
      <SkipLink targetId="main-content" />
      <Navbar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0 focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
