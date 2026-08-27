import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Clock,
  Home,
  Car,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  IndianRupee,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { AdminService } from '@/services/adminService';
import { AdminEnquiryItem } from '@/types/admin';
import { EnquiryStatus } from '@/types/enquiry';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { buildCustomerWhatsAppUrl, buildCustomerPhoneUrl } from '@/config/contact';

export const AdminEnquiryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [enquiry, setEnquiry] = useState<AdminEnquiryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiryDetail = useCallback(async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      setError(null);
      const data = await AdminService.getEnquiryById(id);
      if (data) {
        setEnquiry(data);
      } else {
        setError('Enquiry not found or invalid record ID.');
      }
    } catch {
      setError('Network or server error while loading enquiry detail.');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchEnquiryDetail();
  }, [fetchEnquiryDetail]);

  const handleStatusChange = async (newStatus: EnquiryStatus) => {
    if (!id || !enquiry || enquiry.status === newStatus || isUpdatingStatus) return;
    try {
      setIsUpdatingStatus(true);
      setStatusMessage(null);
      const updated = await AdminService.updateStatus(id, newStatus);
      if (updated) {
        setEnquiry(updated);
        setStatusMessage(`Status updated to ${newStatus}`);
        setTimeout(() => setStatusMessage(null), 3000);
      } else {
        setError('Failed to update enquiry status.');
      }
    } catch {
      setStatusMessage('Failed to update status.');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 animate-spin text-brand-gold-600" />
      </div>
    );
  }

  if (error || !enquiry) {
    return (
      <div className="max-w-2xl mx-auto space-y-4 pt-10">
        <div className="p-6 rounded-2xl bg-white border border-red-200 text-center space-y-4 shadow-subtle">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
          <h2 className="text-lg font-bold text-slate-800">{error || 'Enquiry Not Found'}</h2>
          <p className="text-xs text-slate-500">The requested enquiry could not be found or has an invalid ID.</p>
          <Link to="/admin/enquiries">
            <Button variant="outline" size="sm">
              Back to Enquiries List
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = buildCustomerWhatsAppUrl(enquiry.phone, enquiry.name);
  const phoneUrl = buildCustomerPhoneUrl(enquiry.phone);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <SEOHead
        title={`Enquiry: ${enquiry.name} | TMR Admin`}
        description="Private operator lead detail."
        noIndex={true}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/admin/enquiries"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-navy-950 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Enquiries</span>
        </Link>

        <div className="text-xs text-slate-400">
          Enquiry ID: <span className="font-mono text-slate-600">{enquiry._id}</span>
        </div>
      </div>

      {/* Main Header Banner Card */}
      <Card variant="default" className="bg-white border border-slate-200 rounded-2xl shadow-card p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Lead Record
              </span>
              {enquiry.type === 'REAL_ESTATE' && (
                <Badge variant="navy" withDot icon={<Home className="w-3 h-3" />}>Real Estate</Badge>
              )}
              {enquiry.type === 'RTO' && (
                <Badge variant="emerald" withDot icon={<Car className="w-3 h-3" />}>RTO Services</Badge>
              )}
              {enquiry.type === 'GENERAL' && (
                <Badge variant="gold" withDot icon={<MessageSquare className="w-3 h-3" />}>General Enquiry</Badge>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-navy-950">
              {enquiry.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-mono text-slate-700 font-bold">
                <Phone className="w-3.5 h-3.5 text-brand-gold-600" />
                {enquiry.phone}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Received: {new Date(enquiry.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
              </span>
            </div>
          </div>

          {/* Quick Direct Actions Targeting the Customer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-emerald-700 text-white text-xs font-bold hover:bg-brand-emerald-800 transition-all shadow-xs w-full sm:w-auto"
              aria-label={`Contact ${enquiry.name} on WhatsApp`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href={phoneUrl}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gold-600 text-brand-navy-950 text-xs font-bold hover:bg-brand-gold-500 transition-all shadow-xs w-full sm:w-auto"
              aria-label={`Call customer ${enquiry.name}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Customer</span>
            </a>
          </div>
        </div>

        {/* Status Lifecycle Management */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-brand-navy-950 block">
              Enquiry Status Pipeline
            </span>
            <span className="text-[11px] text-slate-500">
              Update status to track follow-up progress.
            </span>
          </div>

          <div className="flex items-center gap-1.5" role="group" aria-label="Change Status">
            {(['NEW', 'CONTACTED', 'CLOSED'] as EnquiryStatus[]).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => handleStatusChange(st)}
                disabled={isUpdatingStatus}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  enquiry.status === st
                    ? st === 'NEW'
                      ? 'bg-brand-gold-500 text-brand-navy-950 shadow-xs ring-2 ring-brand-gold-400'
                      : st === 'CONTACTED'
                      ? 'bg-brand-navy-950 text-white shadow-xs ring-2 ring-brand-navy-800'
                      : 'bg-slate-700 text-white shadow-xs ring-2 ring-slate-600'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {statusMessage && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{statusMessage}</span>
          </div>
        )}
      </Card>

      {/* Detailed Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Requirement & Service Details Card */}
        <Card variant="default" className="bg-white border border-slate-200 rounded-2xl shadow-card p-6 space-y-4">
          <CardHeader className="p-0 border-b border-slate-100 pb-3">
            <CardTitle className="text-base text-brand-navy-950 font-bold">
              Requirement Specifications
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-slate-100">
              <span className="text-slate-500">Enquiry Category:</span>
              <span className="font-bold text-brand-navy-950">{enquiry.type}</span>
            </div>

            {enquiry.service && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Service Requested:</span>
                <span className="font-bold text-brand-navy-950">{enquiry.service}</span>
              </div>
            )}

            {enquiry.state && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">State Jurisdiction:</span>
                <span className="font-bold text-brand-navy-950">{enquiry.state}</span>
              </div>
            )}

            {enquiry.transactionType && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Transaction Type:</span>
                <span className="font-bold text-brand-navy-950">{enquiry.transactionType}</span>
              </div>
            )}

            {enquiry.propertyType && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Property Type:</span>
                <span className="font-bold text-brand-navy-950">{enquiry.propertyType}</span>
              </div>
            )}

            {enquiry.location && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Preferred Location:</span>
                <span className="font-bold text-brand-navy-950">{enquiry.location}</span>
              </div>
            )}

            {enquiry.budget && (
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Budget Range:</span>
                <span className="font-bold text-brand-navy-950 flex items-center gap-1">
                  <IndianRupee className="w-3 h-3 text-brand-gold-600" />
                  {enquiry.budget}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Customer Message / Notes Card */}
        <Card variant="default" className="bg-white border border-slate-200 rounded-2xl shadow-card p-6 space-y-4">
          <CardHeader className="p-0 border-b border-slate-100 pb-3">
            <CardTitle className="text-base text-brand-navy-950 font-bold">
              Customer Message / Notes
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 space-y-3">
            <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 text-xs text-slate-800 leading-relaxed min-h-[120px] whitespace-pre-wrap">
              {enquiry.message || 'No additional message was provided with this enquiry.'}
            </div>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Last Updated: {new Date(enquiry.updatedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminEnquiryDetailPage;
