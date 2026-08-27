import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageLoadingFallback } from '@/components/layout/PageLoadingFallback';
import { AdminAuthProvider } from '@/context/AdminAuthProvider';
import { AdminProtectedRoute } from '@/components/admin/AdminProtectedRoute';

// Keep HomePage directly imported for fast first contentful paint of landing hero
import { HomePage } from '@/pages/HomePage';

// Lazy-loaded Public Pages for route-level code splitting
const RealEstatePage = lazy(() =>
  import('@/pages/RealEstatePage').then((m) => ({ default: m.RealEstatePage }))
);
const RtoServicesPage = lazy(() =>
  import('@/pages/RtoServicesPage').then((m) => ({ default: m.RtoServicesPage }))
);
const DrivingLicencePage = lazy(() =>
  import('@/pages/RtoServicesPage').then((m) => ({ default: m.DrivingLicencePage }))
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const DesignSystemPage = lazy(() =>
  import('@/pages/DesignSystemPage').then((m) => ({ default: m.DesignSystemPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

// Lazy-loaded Admin Pages & Layout (completely decoupled from public bundle)
const AdminLayout = lazy(() =>
  import('@/components/admin/AdminLayout').then((m) => ({ default: m.AdminLayout }))
);
const AdminLoginPage = lazy(() =>
  import('@/pages/Admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage }))
);
const AdminDashboardPage = lazy(() =>
  import('@/pages/Admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage }))
);
const AdminEnquiriesPage = lazy(() =>
  import('@/pages/Admin/AdminEnquiriesPage').then((m) => ({ default: m.AdminEnquiriesPage }))
);
const AdminEnquiryDetailPage = lazy(() =>
  import('@/pages/Admin/AdminEnquiryDetailPage').then((m) => ({ default: m.AdminEnquiryDetailPage }))
);

// Scroll restoration component for router transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <ScrollToTop />
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            {/* Public Marketing Website Routes */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="real-estate" element={<RealEstatePage />} />
              <Route path="rto-services" element={<RtoServicesPage />} />
              <Route path="rto-services/driving-licence" element={<DrivingLicencePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="design-system" element={<DesignSystemPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            {/* Admin Login Route (Unauthenticated) */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Protected Admin Portal Routes */}
            <Route path="/admin" element={<AdminProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<AdminDashboardPage />} />
                <Route path="enquiries" element={<AdminEnquiriesPage />} />
                <Route path="enquiries/:id" element={<AdminEnquiryDetailPage />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </AdminAuthProvider>
    </BrowserRouter>
  );
};

export default App;
