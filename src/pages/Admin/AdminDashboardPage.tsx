import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Inbox,
  Sparkles,
  Home,
  Car,
  MessageSquare,
  ArrowRight,
  RefreshCw,
  Clock,
  Phone,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { AdminService } from '@/services/adminService';
import { AdminEnquiryListResponse } from '@/types/admin';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const AdminDashboardPage: React.FC = () => {
  const [data, setData] = useState<AdminEnquiryListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await AdminService.getEnquiries({ limit: 8, sort: 'newest' });
      if (res) {
        setData(res);
      } else {
        setError('Failed to load dashboard data. Please try again.');
      }
    } catch {
      setError('Connection error loading enquiries.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const counts = data?.counts || {
    total: 0,
    new: 0,
    contacted: 0,
    closed: 0,
    realEstate: 0,
    rto: 0,
    general: 0,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'NEW':
        return <Badge variant="gold" withDot>NEW</Badge>;
      case 'CONTACTED':
        return <Badge variant="navy">CONTACTED</Badge>;
      case 'CLOSED':
        return <Badge variant="slate">CLOSED</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'REAL_ESTATE':
        return <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy-900 bg-slate-100 px-2 py-0.5 rounded"><Home className="w-3 h-3 text-brand-gold-600" /> Real Estate</span>;
      case 'RTO':
        return <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy-900 bg-emerald-50 px-2 py-0.5 rounded text-emerald-800"><Car className="w-3 h-3 text-emerald-600" /> RTO</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded"><MessageSquare className="w-3 h-3 text-slate-500" /> General</span>;
    }
  };

  return (
    <div className="space-y-8">
      <SEOHead
        title="Admin Operations Dashboard | TMR Services"
        description="Private operator dashboard for reviewing customer leads."
        noIndex={true}
      />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy-950 tracking-tight">
            Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Overview of customer enquiries and lead conversion pipeline.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchDashboardData}
            disabled={isLoading}
            className="flex items-center gap-1.5 bg-white text-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </Button>

          <Link to="/admin/enquiries">
            <Button variant="primary" size="sm" className="flex items-center gap-1.5 text-xs">
              <Inbox className="w-3.5 h-3.5" />
              <span>View All Enquiries</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Error loading dashboard</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Overview Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Total Enquiries */}
        <Card variant="default" className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Leads</span>
            <Inbox className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-heading font-extrabold text-brand-navy-950">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-slate-300" /> : counts.total}
          </div>
          <span className="text-[11px] text-slate-400 block">All-time submissions</span>
        </Card>

        {/* New Enquiries */}
        <Card variant="default" className="bg-white border-2 border-brand-gold-400/40 p-4 rounded-xl shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-brand-gold-700">
            <span className="text-xs font-semibold uppercase tracking-wider">New Actionable</span>
            <Sparkles className="w-4 h-4 text-brand-gold-600" />
          </div>
          <div className="text-2xl font-heading font-extrabold text-brand-navy-950">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-slate-300" /> : counts.new}
          </div>
          <span className="text-[11px] text-brand-gold-800 font-medium block">Awaiting response</span>
        </Card>

        {/* Real Estate Enquiries */}
        <Card variant="default" className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-brand-navy-700">
            <span className="text-xs font-semibold uppercase tracking-wider">Real Estate</span>
            <Home className="w-4 h-4 text-brand-navy-600" />
          </div>
          <div className="text-2xl font-heading font-extrabold text-brand-navy-950">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-slate-300" /> : counts.realEstate}
          </div>
          <span className="text-[11px] text-slate-400 block">Hyderabad properties</span>
        </Card>

        {/* RTO Enquiries */}
        <Card variant="default" className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-brand-emerald-700">
            <span className="text-xs font-semibold uppercase tracking-wider">RTO & Vehicle</span>
            <Car className="w-4 h-4 text-brand-emerald-600" />
          </div>
          <div className="text-2xl font-heading font-extrabold text-brand-navy-950">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-slate-300" /> : counts.rto}
          </div>
          <span className="text-[11px] text-slate-400 block">TS & AP transport</span>
        </Card>

        {/* General Enquiries */}
        <Card variant="default" className="bg-white border border-slate-200 p-4 rounded-xl shadow-2xs space-y-2 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-600">
            <span className="text-xs font-semibold uppercase tracking-wider">General</span>
            <MessageSquare className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-heading font-extrabold text-brand-navy-950">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-slate-300" /> : counts.general}
          </div>
          <span className="text-[11px] text-slate-400 block">Direct questions</span>
        </Card>
      </div>

      {/* Recent Enquiries Section */}
      <Card variant="default" className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
        <CardHeader className="p-5 sm:p-6 border-b border-slate-100 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg text-brand-navy-950">
              Recent Customer Enquiries
            </CardTitle>
            <p className="text-xs text-slate-500 mt-0.5">
              Latest leads submitted across the website
            </p>
          </div>

          <Link
            to="/admin/enquiries"
            className="text-xs font-bold text-brand-navy-900 hover:text-brand-gold-600 flex items-center gap-1 transition-colors"
          >
            <span>All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </CardHeader>

        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-12 text-center text-slate-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-brand-navy-900" />
              <p className="text-xs">Loading recent enquiries...</p>
            </div>
          ) : !data || data.data.length === 0 ? (
            <div className="p-12 text-center text-slate-400 space-y-2">
              <Inbox className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">No enquiries found</p>
              <p className="text-xs text-slate-400">When visitors submit enquiry forms, they will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-100 font-semibold">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Customer</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Service / Requirement</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.data.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <Link to={`/admin/enquiries/${item._id}`} className="block">
                          <span className="font-bold text-brand-navy-950 group-hover:text-brand-gold-600 block">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3" /> {item.phone}
                          </span>
                        </Link>
                      </td>

                      <td className="py-3.5 px-4">
                        {getTypeBadge(item.type)}
                      </td>

                      <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                        {item.service || (item.transactionType ? `${item.transactionType} ${item.propertyType || ''}` : item.message) || '—'}
                      </td>

                      <td className="py-3.5 px-4">
                        {getStatusBadge(item.status)}
                      </td>

                      <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(item.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-right">
                        <Link
                          to={`/admin/enquiries/${item._id}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-brand-navy-900 font-bold hover:bg-brand-navy-950 hover:text-white transition-colors"
                        >
                          <span>Review</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboardPage;
