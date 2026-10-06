import React, { useState } from 'react';
import { StripeLogo, BrexLogo, RampLogo, PlaidLogo, CartaLogo } from './Logos';

export const CustomerProof: React.FC = () => {
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const customerStories: Record<string, { company: string; stat: string; impact: string }> = {
    stripe: {
      company: 'Stripe',
      stat: '$140M+ daily multi-currency settlement',
      impact: 'Stripe partners with FinLedger to auto-reconcile global merchant disbursements and cross-border FX corridors.',
    },
    brex: {
      company: 'Brex',
      stat: '99.4% zero-touch expense approvals',
      impact: 'Brex automates corporate card transaction categorization and tax receipt matching for venture-backed portfolios.',
    },
    ramp: {
      company: 'Ramp',
      stat: 'Books closed in under 4 hours',
      impact: 'Ramp leverages automated journal entry generation to eliminate manual month-end accrual adjustments.',
    },
    plaid: {
      company: 'Plaid',
      stat: '85,000+ banking feeds synchronized',
      impact: 'Plaid connects institutional banking data directly to FinLedger for real-time treasury position monitoring.',
    },
    carta: {
      company: 'Carta',
      stat: 'Continuous 409A & audit compliance',
      impact: 'Carta automates cap-table equity valuation accounting and stock-based compensation disclosures with zero errors.',
    },
  };

  return (
    <section className="bg-white border-b border-neutral-100 py-12 sm:py-16 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Stat Callout */}
          <div className="lg:max-w-xs shrink-0">
            <h2 className="text-xl sm:text-2xl md:text-[25px] font-bold text-[#101113] tracking-tight leading-snug">
              98% of high-growth<br className="hidden sm:inline" /> enterprises automate with FinLedger<sup className="text-sm font-semibold text-neutral-500">1</sup>
            </h2>
          </div>

          {/* Right Logo Array */}
          <div className="flex-1 w-full">
            {/* Desktop: Seamless flex row */}
            <div className="hidden sm:flex items-center justify-between gap-6 md:gap-8 lg:gap-10 overflow-visible">
              <button
                type="button"
                onClick={() => setActiveStory(activeStory === 'stripe' ? null : 'stripe')}
                className="opacity-90 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-50"
                aria-label="Stripe financial case study"
              >
                <StripeLogo className="h-6 md:h-7" />
              </button>

              <button
                type="button"
                onClick={() => setActiveStory(activeStory === 'brex' ? null : 'brex')}
                className="opacity-90 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-50"
                aria-label="Brex financial case study"
              >
                <BrexLogo className="h-6 md:h-7" />
              </button>

              <button
                type="button"
                onClick={() => setActiveStory(activeStory === 'ramp' ? null : 'ramp')}
                className="opacity-90 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-50"
                aria-label="Ramp financial case study"
              >
                <RampLogo className="h-6 md:h-7" />
              </button>

              <button
                type="button"
                onClick={() => setActiveStory(activeStory === 'plaid' ? null : 'plaid')}
                className="opacity-90 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-50"
                aria-label="Plaid financial case study"
              >
                <PlaidLogo className="h-6 md:h-7" />
              </button>

              <button
                type="button"
                onClick={() => setActiveStory(activeStory === 'carta' ? null : 'carta')}
                className="opacity-90 hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-neutral-50"
                aria-label="Carta financial case study"
              >
                <CartaLogo className="h-6 md:h-7" />
              </button>
            </div>

            {/* Mobile Touch-Optimized Layout */}
            <div className="sm:hidden grid grid-cols-2 gap-4 items-center">
              <div
                onClick={() => setActiveStory(activeStory === 'stripe' ? null : 'stripe')}
                className="p-3 bg-neutral-50/80 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <StripeLogo className="h-5" />
              </div>
              <div
                onClick={() => setActiveStory(activeStory === 'brex' ? null : 'brex')}
                className="p-3 bg-neutral-50/80 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <BrexLogo className="h-5" />
              </div>
              <div
                onClick={() => setActiveStory(activeStory === 'ramp' ? null : 'ramp')}
                className="p-3 bg-neutral-50/80 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <RampLogo className="h-5" />
              </div>
              <div
                onClick={() => setActiveStory(activeStory === 'plaid' ? null : 'plaid')}
                className="p-3 bg-neutral-50/80 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <PlaidLogo className="h-5" />
              </div>
              <div
                onClick={() => setActiveStory(activeStory === 'carta' ? null : 'carta')}
                className="col-span-2 p-3 bg-neutral-50/80 rounded-xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
              >
                <CartaLogo className="h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Customer Story Card if selected */}
        {activeStory && customerStories[activeStory] && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#242872]">
                  {customerStories[activeStory].company} Financial Impact
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#101113] mt-1">
                  Metric: {customerStories[activeStory].stat}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                  {customerStories[activeStory].impact}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="text-xs font-medium text-neutral-500 hover:text-neutral-900 px-2 py-1 rounded bg-white border border-neutral-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
