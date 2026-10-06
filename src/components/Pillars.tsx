import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PillarsProps {
  onExploreFeature?: (featureName: string) => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onExploreFeature }) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);

  const pillars = [
    {
      id: 'advise',
      title: 'Advise on liquidity',
      description: 'Get AI-driven cash flow insights across banking feeds and ERP ledgers to protect capital runway.',
      badge: 'Runway & Capital Intelligence',
      simulation: {
        headline: 'Autonomous Cash Flow & Burn Triage',
        summary: 'FinLedger AI identified 3 high-impact treasury optimizations this morning:',
        points: [
          'Detected $340k uncollected receivables; triggered automated dunning reminder with 92% recovery probability',
          'Identified $48k/mo redundant SaaS licenses; initiated vendor consolidation review',
          'Net operational runway extended from 16.4 to 22.8 months under base-case forecast',
        ],
      },
    },
    {
      id: 'action',
      title: 'Take action on ledgers',
      description: 'Automate reconciliation, journal entries, and complex multi-entity closes at scale with AI.',
      badge: 'Continuous Close & Reconciliation',
      simulation: {
        headline: 'Automated Multi-Entity Month-End Close',
        summary: 'FinLedger AI matched and posted transactions across 5 corporate subsidiaries:',
        points: [
          'Auto-reconciled 14,250 bank, card, and payment gateway transactions in 8 seconds (99.8% match rate)',
          'Generated compliant intercompany journal entries and FX revaluation in NetSuite',
          'Eliminated 94% of manual accounting spreadsheet reconciliations',
        ],
      },
    },
    {
      id: 'adapt',
      title: 'Adapt to your financial model',
      description: 'Use AI that adjusts to your corporate chart of accounts, tax jurisdictions, and growth goals.',
      badge: 'Custom Governance & Compliance',
      simulation: {
        headline: 'Enterprise Chart of Accounts Alignment',
        summary: 'FinLedger AI dynamically adjusts to your unique financial policies and audit controls:',
        points: [
          'Enforces granular corporate spend rules: automated approvals over $5,000 threshold',
          'SOC1 Type II, SOC2 Type II, and GAAP / IFRS continuous audit trail generated in real time',
          'Zero training on your proprietary corporate financial statements',
        ],
      },
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-20 md:py-24">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Three Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-14">
          {pillars.map((pillar, index) => {
            const isExpanded = activePillarIndex === index;
            return (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Heading */}
                  <h3 className="text-xl sm:text-[22px] md:text-[23px] font-bold text-[#101113] tracking-tight group-hover:text-[#242872] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Body Paragraph */}
                  <p className="mt-3 text-[15px] sm:text-[15.5px] leading-relaxed text-[#565961] font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Interactive trigger */}
                <div className="mt-5 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      const next = isExpanded ? null : index;
                      setActivePillarIndex(next);
                      if (onExploreFeature) onExploreFeature(pillar.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#242872] hover:text-[#181B52] transition-colors group-hover:translate-x-0.5 duration-150 py-1"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide financial simulation' : 'See how it works'}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>

                {/* Expandable Interactive Preview */}
                {isExpanded && (
                  <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200/90 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 mb-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F06A6A]">
                        {pillar.badge}
                      </span>
                      <span className="text-[10px] bg-white border border-neutral-200 px-2 py-0.5 rounded text-neutral-500 font-medium">
                        Live Simulation
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-neutral-900 mb-1.5">
                      {pillar.simulation.headline}
                    </p>
                    <p className="text-[12px] text-neutral-600 mb-2 leading-relaxed">
                      {pillar.simulation.summary}
                    </p>

                    <div className="space-y-1.5">
                      {pillar.simulation.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11.5px] text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Financial Compliance Assurance Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Human-in-the-loop: Every automated journal entry requires controller authorization or predefined audit rules.</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>SOC1 & SOC2 Type II</span>
            <span>·</span>
            <span>GAAP & IFRS Compliant</span>
            <span>·</span>
            <span>256-Bit Financial Encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
};
