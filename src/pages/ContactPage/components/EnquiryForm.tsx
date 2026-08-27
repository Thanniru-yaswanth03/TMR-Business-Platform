import React, { useState } from 'react';
import { ZodError } from 'zod';
import { Home, Car, MessageSquare, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';
import { PhoneCTA } from '@/components/ui/PhoneCTA';
import { EnquiryService } from '@/services/enquiryService';
import { EnquiryType, EnquiryTransactionType, clientEnquirySchema } from '@/types/enquiry';

interface FormState {
  name: string;
  phone: string;
  type: EnquiryType;
  transactionType: EnquiryTransactionType | '';
  propertyType: string;
  location: string;
  budget: string;
  service: string;
  state: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  phone: '',
  type: 'REAL_ESTATE',
  transactionType: 'BUY',
  propertyType: 'Apartments / Flats',
  location: '',
  budget: '',
  service: "Learner's Licence (LLR)",
  state: 'Telangana',
  message: '',
};

export const EnquiryForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTypeChange = (newType: EnquiryType) => {
    setForm((prev) => ({
      ...prev,
      type: newType,
    }));
    setErrors({});
    setSubmitError(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error on edit
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setErrors({});

    // Validate with Zod
    try {
      const validatedData = clientEnquirySchema.parse({
        name: form.name,
        phone: form.phone,
        type: form.type,
        transactionType: form.type === 'REAL_ESTATE' && form.transactionType ? form.transactionType : null,
        propertyType: form.type === 'REAL_ESTATE' ? form.propertyType || null : null,
        location: form.type === 'REAL_ESTATE' ? form.location || null : null,
        budget: form.type === 'REAL_ESTATE' ? form.budget || null : null,
        service: form.type === 'RTO' ? form.service || null : null,
        state: form.type === 'RTO' ? form.state || null : null,
        message: form.message || null,
      });

      setIsSubmitting(true);

      const response = await EnquiryService.submitEnquiry(validatedData);

      if (response.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(response.message || 'Failed to submit enquiry. Please try again.');
        if (response.errors) {
          const mappedErrors: Record<string, string> = {};
          for (const [k, v] of Object.entries(response.errors)) {
            mappedErrors[k] = v[0] || 'Invalid field';
          }
          setErrors(mappedErrors);
        }
      }
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        const mappedErrors: Record<string, string> = {};
        for (const issue of err.issues) {
          const path = issue.path[0] ? String(issue.path[0]) : 'form';
          mappedErrors[path] = issue.message;
        }
        setErrors(mappedErrors);
      } else {
        setSubmitError('An unexpected error occurred. Please check your connection.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialFormState);
    setErrors({});
    setSubmitError(null);
    setIsSuccess(false);
  };

  // Success Confirmation State
  if (isSuccess) {
    return (
      <Card variant="accent-navy" className="bg-white shadow-elevated p-8 sm:p-10 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-emerald-700 mx-auto flex items-center justify-center border-2 border-emerald-200">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <Badge variant="emerald" withDot>
            Enquiry Received
          </Badge>
          <CardTitle className="text-2xl sm:text-3xl text-brand-navy-950 font-bold">
            Thank You, {form.name}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Your enquiry has been received. TMR will contact you using the details provided.
          </CardDescription>
        </div>

        <div className="p-4 rounded-xl bg-surface-muted border border-slate-200/80 text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
          <div className="flex justify-between">
            <span className="text-slate-400">Phone:</span>
            <span className="font-semibold text-brand-navy-950">{form.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Category:</span>
            <span className="font-semibold text-brand-navy-950">
              {form.type === 'REAL_ESTATE' ? 'Real Estate' : form.type === 'RTO' ? 'RTO Services' : 'General Enquiry'}
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppCTA
            size="md"
            message={`Hello TMR, I just submitted an enquiry for ${form.type === 'REAL_ESTATE' ? 'Real Estate' : form.type === 'RTO' ? 'RTO Services' : 'General'} under the name ${form.name}.`}
          >
            Chat on WhatsApp
          </WhatsAppCTA>

          <PhoneCTA size="md" variant="gold">
            Call TMR
          </PhoneCTA>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={resetForm}
            className="text-xs text-slate-500 hover:text-brand-navy-900 underline font-medium cursor-pointer"
          >
            Submit another enquiry
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="default" className="bg-white border border-slate-200 shadow-card p-6 sm:p-8">
      <CardHeader className="p-0 pb-6 border-b border-slate-100 space-y-2">
        <Badge variant="navy" withDot>
          Enquiry Form
        </Badge>
        <CardTitle className="text-xl sm:text-2xl text-brand-navy-950">
          Submit Your Requirement
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-slate-600">
          Fill in your details below and TMR will review your requirement directly.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} className="pt-6 space-y-6" noValidate>
        {/* Step 1: Initial Service Category Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950">
            1. What Do You Need Help With? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5" role="radiogroup" aria-label="Enquiry Category">
            <button
              type="button"
              role="radio"
              aria-checked={form.type === 'REAL_ESTATE'}
              onClick={() => handleTypeChange('REAL_ESTATE')}
              className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                form.type === 'REAL_ESTATE'
                  ? 'bg-brand-navy-950 text-white border-brand-navy-950 shadow-sm'
                  : 'bg-surface-muted text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <Home className={`w-4 h-4 ${form.type === 'REAL_ESTATE' ? 'text-brand-gold-400' : 'text-slate-500'}`} />
              <span>Real Estate</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={form.type === 'RTO'}
              onClick={() => handleTypeChange('RTO')}
              className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                form.type === 'RTO'
                  ? 'bg-brand-navy-950 text-white border-brand-navy-950 shadow-sm'
                  : 'bg-surface-muted text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <Car className={`w-4 h-4 ${form.type === 'RTO' ? 'text-brand-emerald-400' : 'text-slate-500'}`} />
              <span>RTO / Vehicle</span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={form.type === 'GENERAL'}
              onClick={() => handleTypeChange('GENERAL')}
              className={`p-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                form.type === 'GENERAL'
                  ? 'bg-brand-navy-950 text-white border-brand-navy-950 shadow-sm'
                  : 'bg-surface-muted text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <MessageSquare className={`w-4 h-4 ${form.type === 'GENERAL' ? 'text-brand-gold-400' : 'text-slate-500'}`} />
              <span>General Enquiry</span>
            </button>
          </div>
        </div>

        {/* Global Error Banner */}
        {submitError && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold">Submission Issue</p>
              <p>{submitError}</p>
            </div>
          </div>
        )}

        {/* Step 2: Core Contact Details (Always Required) */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <span className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950">
            2. Your Contact Information
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                required
                error={errors.name}
                autoComplete="name"
              />
            </div>

            <div>
              <Input
                label="Phone Number (Mobile)"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                required
                error={errors.phone}
                helperText="10-digit Indian mobile number"
                autoComplete="tel"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Progressive Contextual Fields */}

        {/* A. Real Estate Progressive Fields */}
        {form.type === 'REAL_ESTATE' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <span className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950">
              3. Real Estate Details (Hyderabad)
            </span>

            {/* Buy / Sell / Rent Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                I am looking to: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['BUY', 'SELL', 'RENT'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setForm((prev) => ({ ...prev, transactionType: t }));
                      if (errors.transactionType) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.transactionType;
                          return next;
                        });
                      }
                    }}
                    className={`py-2 px-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                      form.transactionType === t
                        ? 'bg-brand-navy-900 text-white border-brand-navy-900'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    {t === 'BUY' ? 'Buy Property' : t === 'SELL' ? 'Sell Property' : 'Rent / Lease'}
                  </button>
                ))}
              </div>
              {errors.transactionType && (
                <p className="text-xs text-red-600 mt-1">{errors.transactionType}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Select
                  label="Property Type (Optional)"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  options={[
                    { value: 'Apartments / Flats', label: 'Apartment / Flat' },
                    { value: 'Villas & Gated Communities', label: 'Villa' },
                    { value: 'Independent Houses', label: 'Independent House' },
                    { value: 'Residential Plots & Layouts', label: 'Residential Plot' },
                    { value: 'Agricultural & Farmland', label: 'Agricultural / Farmland' },
                    { value: 'Commercial Property', label: 'Commercial Property' },
                    { value: 'Other Property', label: 'Other' },
                  ]}
                />
              </div>

              <div>
                <Input
                  label="Preferred Location / Area in Hyderabad (Optional)"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Gachibowli, Miyapur, Kondapur"
                />
              </div>
            </div>

            <div>
              <Input
                label="Approximate Budget (Optional)"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g. ₹60 Lakhs - ₹1.2 Cr"
              />
            </div>

            <div>
              <Textarea
                label="Additional Requirement Notes (Optional)"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share any specifics such as BHK, facing, timeline, or special requirements..."
                rows={3}
                error={errors.message}
              />
            </div>
          </div>
        )}

        {/* B. RTO / Vehicle Progressive Fields */}
        {form.type === 'RTO' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <span className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950">
              3. RTO / Vehicle Details (TS & AP)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Select
                  label="Service Required *"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  options={[
                    { value: "Learner's Licence (LLR)", label: "Learner's Licence (LLR)" },
                    { value: 'Permanent Driving Licence (DL)', label: 'Permanent Driving Licence (DL)' },
                    { value: 'Licence Renewal / Expired DL', label: 'Licence Renewal / Expired DL' },
                    { value: 'Duplicate Licence / Lost DL', label: 'Duplicate Licence' },
                    { value: 'Vehicle Ownership Transfer (RC)', label: 'Vehicle Ownership Transfer (RC)' },
                    { value: 'New Vehicle Registration', label: 'New Vehicle Registration' },
                    { value: 'State Transfer NOC (Form 28)', label: 'State Transfer NOC (Form 28)' },
                    { value: 'Commercial Vehicle Fitness & Permits', label: 'Fitness & Permits' },
                    { value: 'Other Vehicle Documentation', label: 'Other Vehicle Service' },
                  ]}
                  error={errors.service}
                />
              </div>

              <div>
                <Select
                  label="State Jurisdiction (Optional)"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  options={[
                    { value: 'Telangana', label: 'Telangana State' },
                    { value: 'Andhra Pradesh', label: 'Andhra Pradesh State' },
                    { value: 'Other / Interstate', label: 'Other State / Interstate' },
                  ]}
                />
              </div>
            </div>

            <div>
              <Textarea
                label="Describe Your Requirement / Current Status *"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mention current document status, vehicle type, or specific question..."
                rows={3}
                required
                error={errors.message}
              />
            </div>
          </div>
        )}

        {/* C. General Enquiry Progressive Fields */}
        {form.type === 'GENERAL' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <span className="block text-xs font-bold uppercase tracking-wider text-brand-navy-950">
              3. Enquiry Details
            </span>

            <div>
              <Textarea
                label="How can we assist you? *"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please describe what you would like to discuss with TMR..."
                rows={4}
                required
                error={errors.message}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry to TMR</span>
              </>
            )}
          </Button>
          <p className="text-[11px] text-slate-400 text-center mt-2">
            Your details are kept private and used solely to respond to your enquiry.
          </p>
        </div>
      </form>
    </Card>
  );
};
