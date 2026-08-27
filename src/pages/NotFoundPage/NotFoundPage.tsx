import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <Section spacing="lg" background="default" className="min-h-[60vh] flex items-center">
      <SEOHead
        title="Page Not Found (404)"
        description="The requested page could not be found."
        noIndex={true}
      />

      <Container size="sm" className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold-100 text-brand-gold-800 border border-brand-gold-200 font-extrabold text-2xl">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy-950">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Use the options below to navigate back to safety.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button
            to="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Go Back
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
