import React from 'react';

// Financial Platform Logo: Sleek modern geometric mark with dual interlocking capital arcs + bold typography
export const FinancialBrandLogo: React.FC<{
  className?: string;
  textClassName?: string;
  iconSize?: number;
}> = ({
  className = "flex items-center gap-2.5",
  textClassName = "text-[#101113] font-bold text-2xl tracking-tight",
  iconSize = 28,
}) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Precision Financial Hexagon / Vault Mark in signature coral accent */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
        aria-label="FinLedger Logo"
      >
        {/* Dynamic financial nodes representing liquidity, ledger, and treasury */}
        <circle cx="16" cy="8.5" r="5" fill="#F06A6A" />
        <circle cx="8" cy="22.5" r="5" fill="#F06A6A" />
        <circle cx="24" cy="22.5" r="5" fill="#F06A6A" />
        {/* Subtle connecting financial balance bridge */}
        <path d="M12 18L20 18" stroke="#F06A6A" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
      <span className={textClassName}>
        Fin<span className="font-light">Ledger</span>
      </span>
    </div>
  );
};

// Customer Financial & Enterprise Partner Logos: Stripe, Brex, Ramp, Plaid, Carta
export const StripeLogo: React.FC<{ className?: string }> = ({ className = "h-7 text-neutral-800" }) => (
  <div className={`flex items-center text-center justify-center ${className}`}>
    <span className="font-bold text-2xl tracking-[-0.04em] text-[#101113]" style={{ fontFamily: 'var(--font-sans)' }}>
      stripe
    </span>
  </div>
);

export const BrexLogo: React.FC<{ className?: string }> = ({ className = "h-7 text-neutral-800" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#101113" />
      <path d="M7 6H13C15.2 6 17 7.8 17 10C17 11.2 16.4 12.2 15.4 12.8C16.8 13.5 17.8 14.8 17.8 16.5C17.8 18.9 15.8 20.8 13.4 20.8H7V6Z" fill="white" />
    </svg>
    <span className="font-bold tracking-tight text-xl text-[#101113]">BREX</span>
  </div>
);

export const RampLogo: React.FC<{ className?: string }> = ({ className = "h-7 text-neutral-800" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M4 19L20 5M20 5H10M20 5V15" stroke="#101113" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="font-bold tracking-tight text-xl text-[#101113]">RAMP</span>
  </div>
);

export const PlaidLogo: React.FC<{ className?: string }> = ({ className = "h-7 text-neutral-800" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#101113" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#101113" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#101113" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#101113" />
    </svg>
    <span className="font-serif tracking-widest text-lg font-bold uppercase text-[#101113]">PLAID</span>
  </div>
);

export const CartaLogo: React.FC<{ className?: string }> = ({ className = "h-7 text-neutral-800" }) => (
  <div className={`relative inline-flex items-center justify-center px-1 py-0.5 ${className}`}>
    <span className="tracking-[0.12em] text-xl font-bold uppercase text-[#101113]" style={{ fontFamily: 'var(--font-sans)' }}>
      carta
    </span>
  </div>
);
