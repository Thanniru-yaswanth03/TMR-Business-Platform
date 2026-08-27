import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center space-y-3">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold-500 mx-auto" />
        <p className="text-xs text-slate-500 font-medium">Loading page...</p>
      </div>
    </div>
  );
};
