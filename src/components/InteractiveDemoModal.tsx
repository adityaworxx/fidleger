import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, DollarSign, PieChart, TrendingUp, Play } from 'lucide-react';

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  isOpen,
  onClose,
  onGetStarted,
}) => {
  const [selectedScenario, setSelectedScenario] = useState<'reconciliation' | 'runway' | 'board'>('reconciliation');
  const [isRunning, setIsRunning] = useState(false);
  const [progressStep, setProgressStep] = useState(3);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!isOpen) {
      setIsRunning(false);
      setProgressStep(3);
    }
  }, [isOpen]);

  const runSimulation = (scenario: 'reconciliation' | 'runway' | 'board') => {
    setSelectedScenario(scenario);
    setIsRunning(true);
    setProgressStep(1);

    setTimeout(() => {
      setProgressStep(2);
      setTimeout(() => {
        setProgressStep(3);
        setIsRunning(false);
      }, 700);
    }, 600);
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#242872] text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold text-[#FF9E9E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Financial Operations Simulator</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
              FinLedger AI: Autonomous Financial Close & Treasury
            </h2>
            <p className="text-xs sm:text-sm text-[#CFD3EE]">
              Experience how FinLedger AI automates ledger reconciliation, detects burn anomalies, and forecasts runway.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Scenario Selector Tabs */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 block">
              Choose an autonomous financial operation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => runSimulation('reconciliation')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedScenario === 'reconciliation'
                    ? 'border-[#242872] bg-[#242872]/5 ring-1 ring-[#242872]'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm text-neutral-900">
                  <DollarSign className="w-4 h-4 text-[#F06A6A]" />
                  <span>Month-End Close</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Multi-entity ledger matching & auto journal entries</p>
              </button>

              <button
                type="button"
                onClick={() => runSimulation('runway')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedScenario === 'runway'
                    ? 'border-[#242872] bg-[#242872]/5 ring-1 ring-[#242872]'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm text-neutral-900">
                  <TrendingUp className="w-4 h-4 text-[#F06A6A]" />
                  <span>Runway & Burn Stress Test</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Predictive liquidity forecasting across 24 months</p>
              </button>

              <button
                type="button"
                onClick={() => runSimulation('board')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedScenario === 'board'
                    ? 'border-[#242872] bg-[#242872]/5 ring-1 ring-[#242872]'
                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm text-neutral-900">
                  <PieChart className="w-4 h-4 text-[#F06A6A]" />
                  <span>CFO Board Deck Brief</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">One-click GAAP P&L variance narrative & margins</p>
              </button>
            </div>
          </div>

          {/* Execution Pipeline Indicator */}
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-neutral-700 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-amber-500 animate-ping' : 'bg-emerald-500'}`} />
                {isRunning ? 'FinLedger AI is reconciling banking feeds & ERP...' : 'Financial calculation complete'}
              </span>
              <button
                type="button"
                onClick={() => runSimulation(selectedScenario)}
                disabled={isRunning}
                className="text-xs font-semibold text-[#242872] hover:text-[#181B52] flex items-center gap-1 disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Re-run calculation</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className={`p-2 rounded-lg border transition-colors ${progressStep >= 1 ? 'bg-white border-neutral-300 text-neutral-900 font-medium' : 'bg-neutral-100 text-neutral-400 border-transparent'}`}>
                1. Ingesting bank feeds
              </div>
              <div className={`p-2 rounded-lg border transition-colors ${progressStep >= 2 ? 'bg-white border-neutral-300 text-neutral-900 font-medium' : 'bg-neutral-100 text-neutral-400 border-transparent'}`}>
                2. Reconciling GAAP accounts
              </div>
              <div className={`p-2 rounded-lg border transition-colors ${progressStep >= 3 ? 'bg-white border-neutral-300 text-neutral-900 font-medium' : 'bg-neutral-100 text-neutral-400 border-transparent'}`}>
                3. Posting balanced entries
              </div>
            </div>
          </div>

          {/* Interactive Result Card */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-neutral-900">
                {selectedScenario === 'reconciliation' && 'Live General Ledger Reconciliation (Q4 Close)'}
                {selectedScenario === 'runway' && 'Rolling Liquidity & Capital Runway Scenario'}
                {selectedScenario === 'board' && 'CFO Board P&L Executive Summary'}
              </h3>
              <span className="text-xs text-neutral-500">Live Enterprise Preview</span>
            </div>

            {selectedScenario === 'reconciliation' && (
              <div className="space-y-2 border border-neutral-200 rounded-xl p-3 bg-white">
                {[
                  { id: 't1', text: 'Auto-matched 3,420 Stripe merchant settlements against Chase Checking #4092', tag: '$14.2M Reconciled', time: '100% Match' },
                  { id: 't2', text: 'Detected $8,200 duplicate software vendor invoice; blocked payment & flagged for Priya', tag: 'Fraud Shield', time: 'Saved $8,200' },
                  { id: 't3', text: 'Posted intercompany tax transfer between US Parent and UK Subsidiary in NetSuite', tag: 'Automated Post', time: 'Instant' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleTask(item.id)}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-50 cursor-pointer border border-transparent hover:border-neutral-200 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${completedTasks[item.id] ? 'bg-[#242872] border-[#242872] text-white' : 'border-neutral-300 bg-white'}`}>
                        {completedTasks[item.id] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`text-xs sm:text-sm ${completedTasks[item.id] ? 'line-through text-neutral-400' : 'text-neutral-800'}`}>
                        {item.text}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">{item.tag}</span>
                      <span className="text-[11px] text-emerald-600 font-semibold">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedScenario === 'runway' && (
              <div className="space-y-2 border border-neutral-200 rounded-xl p-3 bg-white">
                {[
                  { id: 'r1', text: 'Total Liquid Cash Reserves: $24.8M across 4 operating & yield vault accounts', tag: '5.15% APY', time: '+$106k/mo yield' },
                  { id: 'r2', text: 'Net Monthly Burn: $412k (decreased by 14% via automated spend policy controls)', tag: 'Burn Optimized', time: '28.4 Mo Runway' },
                  { id: 'r3', text: 'Stress Test: Survived 20% revenue contraction scenario with 21.6 months remaining', tag: 'Monte Carlo', time: '98% Safe' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleTask(item.id)}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-50 cursor-pointer border border-transparent hover:border-neutral-200 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${completedTasks[item.id] ? 'bg-[#242872] border-[#242872] text-white' : 'border-neutral-300 bg-white'}`}>
                        {completedTasks[item.id] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`text-xs sm:text-sm ${completedTasks[item.id] ? 'line-through text-neutral-400' : 'text-neutral-800'}`}>
                        {item.text}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">{item.tag}</span>
                      <span className="text-[11px] text-emerald-600 font-semibold">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedScenario === 'board' && (
              <div className="border border-neutral-200 rounded-xl p-4 bg-white space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-neutral-100">
                  <span className="font-semibold text-neutral-900">Q4 Executive Financial Memorandum (GAAP Validated)</span>
                  <span className="text-neutral-500">Generated in 1.4s</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  &ldquo;In Q4, Net Gross Margins expanded to 79.4% (+210 bps YoY). Operational cash flow turned positive 2 months ahead of target due to automated vendor payment terms renegotiation and automated invoice matching. Operating reserves of $24.8M remain fully protected in diversified US Treasury bills yielding 5.15% APY.&rdquo;
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Reviewed & Certified by Zoe Washington (CFO) and Maya Lin (Head of FP&A)</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-neutral-50 p-4 sm:p-5 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 text-center sm:text-left">
            Connect your bank accounts and ERP in minutes with bank-level encryption.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onGetStarted();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#101113] hover:bg-neutral-900 rounded-lg transition-transform active:scale-95 shadow-sm inline-flex items-center justify-center gap-1.5"
            >
              <span>Get started with FinLedger</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
