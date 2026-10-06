import React, { useState, useEffect } from 'react';
import { FinancialBrandLogo } from './Logos';
import { Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
  onOpenContactSales: () => void;
  onOpenLogIn: () => void;
  onOpenSeeInAction: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGetStarted,
  onOpenContactSales,
  onOpenLogIn,
  onOpenSeeInAction,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLang, setActiveLang] = useState('English (US)');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navDropdowns: Record<string, { label: string; items: { title: string; desc: string }[] }> = {
    platform: {
      label: 'Platform',
      items: [
        { title: 'Autonomous General Ledger', desc: 'Continuous multi-entity chart of accounts reconciliation' },
        { title: 'Runway & Cash Forecasting', desc: 'Predictive Monte Carlo models for real-time liquidity' },
        { title: 'Treasury & Smart Sweeps', desc: 'Automate yield across insured bank operating accounts' },
        { title: 'Corporate Spend Management', desc: 'Real-time card controls, automated receipts & approvals' },
      ],
    },
    solutions: {
      label: 'Solutions',
      items: [
        { title: 'High-Growth Tech & SaaS', desc: 'SaaS metrics, revenue recognition, and burn tracking' },
        { title: 'Mid-Market to Enterprise', desc: 'Global multi-currency consolidation with NetSuite & SAP' },
        { title: 'Cross-Border Operations', desc: 'Automated FX hedging, VAT/GST filing, and tax compliance' },
        { title: 'FP&A & Strategic Finance', desc: 'Real-time scenario testing for board and investor packs' },
      ],
    },
    treasury: {
      label: 'Treasury',
      items: [
        { title: 'Yield & Liquidity Vaults', desc: 'Earn up to 5.15% APY on operational treasury reserves' },
        { title: 'Instant Global Rail Payments', desc: 'Same-day ACH, FedNow, RTP, and international wires' },
        { title: 'Audit Sentinel & Fraud Guard', desc: 'Autonomous anomaly detection across all disbursements' },
        { title: 'ERP Two-Way Integration', desc: 'Bi-directional sync with NetSuite, Xero, and QuickBooks' },
      ],
    },
  };

  const languages = [
    'English (US)',
    'English (UK)',
    'Español',
    'Français',
    'Deutsch',
    '日本語',
    'Português',
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-colors">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Left Zone: Brand Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center focus-visible:outline-2 focus-visible:outline-[#242872] rounded-md" aria-label="FinLedger Home">
              <FinancialBrandLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14.5px] font-medium text-[#292A2E]" aria-label="Primary Navigation">
              {/* Platform Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('platform')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#101113] hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-[#242872]"
                  onClick={() => setActiveDropdown(activeDropdown === 'platform' ? null : 'platform')}
                  aria-expanded={activeDropdown === 'platform'}
                >
                  <span>Platform</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'platform' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-500'}`} />
                </button>

                {activeDropdown === 'platform' && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-xl shadow-xl border border-neutral-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      {navDropdowns.platform.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#platform"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            onOpenSeeInAction();
                          }}
                          className="block p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        >
                          <p className="text-sm font-semibold text-[#101113] group-hover:text-[#242872]">{item.title}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#101113] hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-[#242872]"
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  aria-expanded={activeDropdown === 'solutions'}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-500'}`} />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-xl shadow-xl border border-neutral-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      {navDropdowns.solutions.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#solutions"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            onOpenSeeInAction();
                          }}
                          className="block p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        >
                          <p className="text-sm font-semibold text-[#101113] group-hover:text-[#242872]">{item.title}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Treasury Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('treasury')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-[#101113] hover:bg-neutral-50 transition-colors focus-visible:outline-2 focus-visible:outline-[#242872]"
                  onClick={() => setActiveDropdown(activeDropdown === 'treasury' ? null : 'treasury')}
                  aria-expanded={activeDropdown === 'treasury'}
                >
                  <span>Treasury</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'treasury' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-500'}`} />
                </button>

                {activeDropdown === 'treasury' && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-xl shadow-xl border border-neutral-100 p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      {navDropdowns.treasury.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#treasury"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            onOpenSeeInAction();
                          }}
                          className="block p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        >
                          <p className="text-sm font-semibold text-[#101113] group-hover:text-[#242872]">{item.title}</p>
                          <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Link */}
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenSeeInAction();
                }}
                className="px-3 py-2 rounded-md hover:text-[#101113] hover:bg-neutral-50 transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Right Zone: Secondary Actions & CTAs */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-[#292A2E]">
            {/* Globe Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#242872]"
                aria-label={`Select language (current: ${activeLang})`}
              >
                <Globe className="w-4.5 h-4.5" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-100 p-1.5 z-50 animate-in fade-in duration-100">
                  <div className="px-2 py-1 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Region & Currency
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setActiveLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${activeLang === lang ? 'bg-neutral-100 font-semibold text-[#101113]' : 'text-neutral-700 hover:bg-neutral-50'}`}
                    >
                      <span>{lang}</span>
                      {activeLang === lang && <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Subtle Divider */}
            <div className="h-5 w-px bg-neutral-200" aria-hidden="true" />

            {/* Contact sales */}
            <button
              type="button"
              onClick={onOpenContactSales}
              className="hover:text-[#101113] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-50 whitespace-nowrap"
            >
              Contact sales
            </button>

            {/* Log In */}
            <button
              type="button"
              onClick={onOpenLogIn}
              className="hover:text-[#101113] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-50 whitespace-nowrap"
            >
              Log In
            </button>

            {/* Get started - Crisp Black Button */}
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="bg-[#101113] hover:bg-[#202225] text-white px-4.5 py-2.5 rounded-md font-medium text-sm transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap"
            >
              Get started
            </button>
          </div>

          {/* Mobile Right Controls: Fast CTA + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="bg-[#101113] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium px-3.5 py-2 rounded-md transition-transform active:scale-95 shadow-sm"
            >
              Get started
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#242872]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/98 backdrop-blur-xl z-50 flex flex-col justify-between overflow-y-auto p-6 animate-in slide-in-from-right-4 duration-200">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 px-3">
                Financial Operations Suite
              </div>

              {/* Mobile Platform Accordion */}
              <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/50">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'm-platform' ? null : 'm-platform')}
                  className="w-full flex items-center justify-between p-3.5 text-left text-base font-semibold text-neutral-900"
                >
                  <span>Platform & FinAI</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-platform' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-400'}`} />
                </button>
                {activeDropdown === 'm-platform' && (
                  <div className="px-3.5 pb-3.5 space-y-2 border-t border-neutral-100/80 pt-2 bg-white">
                    {navDropdowns.platform.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenSeeInAction();
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/50">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'm-solutions' ? null : 'm-solutions')}
                  className="w-full flex items-center justify-between p-3.5 text-left text-base font-semibold text-neutral-900"
                >
                  <span>Solutions by Scale</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-solutions' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-400'}`} />
                </button>
                {activeDropdown === 'm-solutions' && (
                  <div className="px-3.5 pb-3.5 space-y-2 border-t border-neutral-100/80 pt-2 bg-white">
                    {navDropdowns.solutions.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenSeeInAction();
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Treasury Accordion */}
              <div className="border border-neutral-100 rounded-xl overflow-hidden bg-neutral-50/50">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'm-treasury' ? null : 'm-treasury')}
                  className="w-full flex items-center justify-between p-3.5 text-left text-base font-semibold text-neutral-900"
                >
                  <span>Treasury & Yield</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'm-treasury' ? 'rotate-180 text-[#F06A6A]' : 'text-neutral-400'}`} />
                </button>
                {activeDropdown === 'm-treasury' && (
                  <div className="px-3.5 pb-3.5 space-y-2 border-t border-neutral-100/80 pt-2 bg-white">
                    {navDropdowns.treasury.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenSeeInAction();
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing Direct Link */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeeInAction();
                }}
                className="w-full flex items-center justify-between p-3.5 text-left text-base font-semibold text-neutral-900 border border-neutral-100 rounded-xl bg-neutral-50/50"
              >
                <span>Pricing Plans</span>
                <ArrowRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-2">
                <Globe className="w-3.5 h-3.5" />
                <span>Selected Currency / Language: {activeLang}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languages.slice(0, 4).map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLang(l)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${activeLang === l ? 'bg-[#242872] text-white font-medium' : 'bg-neutral-100 text-neutral-700'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-neutral-200 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full bg-[#101113] hover:bg-neutral-900 text-white font-medium py-3.5 rounded-lg text-base shadow-sm transition-all active:scale-[0.98]"
            >
              Get started
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactSales();
                }}
                className="w-full border border-neutral-300 py-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                Contact sales
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogIn();
                }}
                className="w-full border border-neutral-300 py-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
