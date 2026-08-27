import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  RefreshCw,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Home,
  Car,
  MessageSquare,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { AdminService } from '@/services/adminService';
import { AdminEnquiryListResponse, AdminEnquiryQuery } from '@/types/admin';
import { EnquiryType, EnquiryStatus } from '@/types/enquiry';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const AdminEnquiriesPage: React.FC = () => {
  const [data, setData] = useState<AdminEnquiryListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEnquiries = useCallback(async (queryOverride?: Partial<AdminEnquiryQuery>) => {
    setIsLoading(true);
    try {
      const query: AdminEnquiryQuery = {
        page: queryOverride?.page ?? currentPage,
        limit: 20,
        type: (queryOverride?.type ?? filterType) as EnquiryType | 'ALL',
        status: (queryOverride?.status ?? filterStatus) as EnquiryStatus | 'ALL',
        search: queryOverride?.search ?? searchTerm,
        sort: queryOverride?.sort ?? sortOrder,
      };

      const res = await AdminService.getEnquiries(query);
      if (res) {
        setData(res);
      }
    } catch (err) {
      console.error('Error loading enquiries:', err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, filterType, filterStatus, searchTerm, sortOrder]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchEnquiries({ page: 1, search: searchTerm });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFilterType(val);
    setCurrentPage(1);
    fetchEnquiries({ page: 1, type: val as EnquiryType | 'ALL' });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFilterStatus(val);
    setCurrentPage(1);
    fetchEnquiries({ page: 1, status: val as EnquiryStatus | 'ALL' });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as 'newest' | 'oldest';
    setSortOrder(val);
    fetchEnquiries({ sort: val });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= (data?.pagination.totalPages || 1)) {
      setCurrentPage(newPage);
      fetchEnquiries({ page: newPage });
    }
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
    <div className="space-y-6">
      <SEOHead
        title="Admin Enquiry Records | TMR Services"
        description="Private operator lead list."
        noIndex={true}
      />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy-950 tracking-tight">
            Customer Enquiries
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Search, filter, and manage all received leads and consult requests.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => fetchEnquiries()}
          disabled={isLoading}
          className="flex items-center gap-1.5 bg-white text-xs self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh List</span>
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <Card variant="default" className="bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-subtle space-y-4">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="lg:col-span-4">
            <Input
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, phone, service..."
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>

          {/* Type Filter */}
          <div className="lg:col-span-3">
            <Select
              name="typeFilter"
              value={filterType}
              onChange={handleTypeChange}
              options={[
                { value: 'ALL', label: 'All Categories' },
                { value: 'REAL_ESTATE', label: 'Real Estate (Hyderabad)' },
                { value: 'RTO', label: 'RTO & Transport (TS/AP)' },
                { value: 'GENERAL', label: 'General Enquiry' },
              ]}
            />
          </div>

          {/* Status Filter */}
          <div className="lg:col-span-3">
            <Select
              name="statusFilter"
              value={filterStatus}
              onChange={handleStatusChange}
              options={[
                { value: 'ALL', label: 'All Statuses' },
                { value: 'NEW', label: 'Status: NEW' },
                { value: 'CONTACTED', label: 'Status: CONTACTED' },
                { value: 'CLOSED', label: 'Status: CLOSED' },
              ]}
            />
          </div>

          {/* Sort Order */}
          <div className="lg:col-span-2">
            <Select
              name="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
              options={[
                { value: 'newest', label: 'Newest First' },
                { value: 'oldest', label: 'Oldest First' },
              ]}
            />
          </div>
        </form>

        {/* Active Filter Indicators */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Showing {data?.pagination.total ?? 0} enquiries found
            </span>
          </div>

          {(filterType !== 'ALL' || filterStatus !== 'ALL' || searchTerm) && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterType('ALL');
                setFilterStatus('ALL');
                setCurrentPage(1);
                fetchEnquiries({ page: 1, search: '', type: 'ALL', status: 'ALL' });
              }}
              className="text-xs text-brand-gold-700 hover:text-brand-gold-900 font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </Card>

      {/* Enquiries Table Card */}
      <Card variant="default" className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden">
        <CardHeader className="p-4 sm:p-5 border-b border-slate-100">
          <CardTitle className="text-base text-brand-navy-950 font-bold">
            Lead Records
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-16 text-center text-slate-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin mx-auto text-brand-navy-900" />
              <p className="text-xs">Loading enquiries...</p>
            </div>
          ) : !data || data.data.length === 0 ? (
            <div className="p-16 text-center text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">No enquiries match your query</p>
              <p className="text-xs text-slate-400">Try adjusting your search terms or filter selections.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-100 font-semibold">
                  <tr>
                    <th className="py-3 px-4 sm:px-6">Customer Name</th>
                    <th className="py-3 px-4">Contact Phone</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Service / Requirement</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Submitted Date</th>
                    <th className="py-3 px-4 sm:px-6 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.data.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <Link to={`/admin/enquiries/${item._id}`} className="font-bold text-brand-navy-950 group-hover:text-brand-gold-600 block">
                          {item.name}
                        </Link>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-slate-600">
                        {item.phone}
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
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-right">
                        <Link
                          to={`/admin/enquiries/${item._id}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-brand-navy-900 font-bold hover:bg-brand-navy-950 hover:text-white transition-colors"
                        >
                          <span>Open</span>
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

        {/* Pagination Bar */}
        {data && data.pagination.totalPages > 1 && (
          <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div>
              Page {data.pagination.page} of {data.pagination.totalPages}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1 || isLoading}
                className="py-1 px-2.5 text-xs flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= data.pagination.totalPages || isLoading}
                className="py-1 px-2.5 text-xs flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AdminEnquiriesPage;
