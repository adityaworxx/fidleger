import React from 'react';
import { FinancialBrandLogo } from './Logos';

export const Footer: React.FC<{
  onOpenGetStarted: () => void;
  onOpenContactSales: () => void;
}> = ({ onOpenGetStarted, onOpenContactSales }) => {
  return (
    <footer className="bg-[#101113] text-white pt-14 pb-12 border-t border-neutral-800">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Footnote matching the ¹ mark in hero social proof */}
        <div className="pb-10 border-b border-neutral-800 text-xs text-neutral-400 max-w-3xl leading-relaxed">
          <p>
            <sup className="font-semibold text-neutral-300">1</sup> Source: FinLedger benchmark operational analytics across 1,200+ high-growth enterprise finance and treasury organizations utilizing autonomous multi-entity general ledger reconciliation, rolling cash runway models, and spend controls.
          </p>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10">
          <div className="col-span-2 md:col-span-1">
            <FinancialBrandLogo
              iconSize={26}
              textClassName="text-white font-bold text-2xl tracking-tight"
            />
            <p className="mt-4 text-xs text-neutral-400 leading-relaxed max-w-xs">
              FinLedger empowers corporate finance teams to reconcile ledgers in real time, forecast cash flow, and deploy capital with autonomous precision.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
              FinLedger AI
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">Autonomous Ledger</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">Runway Forecasting</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">Treasury Yield Vaults</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">Continuous Close</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
              Integrations
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">NetSuite Two-Way</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">QuickBooks Online</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">SAP S/4HANA</button></li>
              <li><button onClick={onOpenGetStarted} className="hover:text-white transition-colors">Stripe & Plaid Feeds</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
              Compliance & Trust
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><button onClick={onOpenContactSales} className="hover:text-white transition-colors">SOC1 & SOC2 Type II</button></li>
              <li><button onClick={onOpenContactSales} className="hover:text-white transition-colors">GAAP / IFRS Compliance</button></li>
              <li><button onClick={onOpenContactSales} className="hover:text-white transition-colors">FDIC Insured Sweeps</button></li>
              <li><button onClick={onOpenContactSales} className="hover:text-white transition-colors">Cryptographic Audit Logs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About FinLedger</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Notice</a></li>
              <li><button onClick={onOpenContactSales} className="hover:text-white transition-colors">Contact Treasury</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} FinLedger Technologies, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-neutral-300 transition-colors">Master Services Agreement</a>
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">Privacy & Data Governance</a>
            <a href="#security" className="hover:text-neutral-300 transition-colors">Bank-Level Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
