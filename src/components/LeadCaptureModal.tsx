import React, { useState } from 'react';
import { X, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { FinancialBrandLogo } from './Logos';

interface LeadCaptureModalProps {
  isOpen: boolean;
  type: 'get-started' | 'contact-sales' | 'login';
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [revenueScale, setRevenueScale] = useState('$5M - $25M ARR');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setFullName('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
          <FinancialBrandLogo iconSize={24} textClassName="text-[#101113] font-bold text-xl tracking-tight" />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                {type === 'login' ? 'Secure Magic Link Sent' : 'Welcome to FinLedger'}
              </h3>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                {type === 'login'
                  ? `We sent a biometric/passkey verification link to ${email}. Check your inbox to sign into your financial dashboard.`
                  : type === 'contact-sales'
                  ? `Thank you ${fullName || 'there'}! A FinLedger Enterprise Treasury Strategist will contact ${email} within 2 business hours.`
                  : `Your free 30-day FinLedger sandbox workspace has been initialized for ${email}. Check your email to access real-time demo banking feeds.`}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#101113] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                  {type === 'get-started' && 'Start your 30-day FinLedger trial'}
                  {type === 'contact-sales' && 'Schedule an Enterprise Treasury Consultation'}
                  {type === 'login' && 'Sign into your FinLedger workspace'}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  {type === 'get-started' && 'No credit card required. Connect demo bank accounts or integrate NetSuite in under 5 minutes.'}
                  {type === 'contact-sales' && 'Discover how global CFOs and controllers automate high-volume transaction reconciliation.'}
                  {type === 'login' && 'Enter your authorized corporate work email to access your treasury console.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'contact-sales' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#242872] focus:ring-2 focus:ring-[#242872]/20 text-sm text-neutral-900 outline-none transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Corporate Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="cfo@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#242872] focus:ring-2 focus:ring-[#242872]/20 text-sm text-neutral-900 outline-none transition-all"
                  />
                </div>

                {type === 'contact-sales' && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Annual Revenue / Transaction Volume
                    </label>
                    <select
                      value={revenueScale}
                      onChange={(e) => setRevenueScale(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-[#242872] focus:ring-2 focus:ring-[#242872]/20 text-sm text-neutral-900 outline-none bg-white transition-all"
                    >
                      <option value="under-5m">Under $5M ARR / Volume</option>
                      <option value="5m-25m">$5M - $25M ARR / Volume</option>
                      <option value="25m-100m">$25M - $100M ARR / Volume</option>
                      <option value="100m-plus">$100M+ Global Enterprise</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 px-4 rounded-lg bg-[#101113] hover:bg-neutral-900 text-white font-medium text-sm transition-all duration-150 active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>
                        {type === 'get-started' && 'Launch FinLedger Workspace'}
                        {type === 'contact-sales' && 'Request Treasury Briefing'}
                        {type === 'login' && 'Verify & Enter Dashboard'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <Shield className="w-3.5 h-3.5 text-neutral-400" />
                <span>Bank-level 256-bit AES encryption. SOC1 & SOC2 certified.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
