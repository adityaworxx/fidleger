import React, { useState } from 'react';

interface FinanceTeammateProps {
  id: string;
  name: string;
  role: string;
  desc: string;
}

export const TeammateAvatarsCluster: React.FC<{
  onSelectSparkle?: () => void;
}> = ({ onSelectSparkle }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const teammates: FinanceTeammateProps[] = [
    {
      id: 'maya',
      name: 'Maya Lin',
      role: 'Head of FP&A',
      desc: 'Collaborates with AI to run 10-year rolling cash runways and dynamic scenario stress tests.',
    },
    {
      id: 'carlos',
      name: 'Carlos Mendez',
      role: 'VP of Treasury',
      desc: 'Maximizes yield across global operating accounts with automated liquidity sweep rules.',
    },
    {
      id: 'priya',
      name: 'Priya Sharma',
      role: 'Corporate Controller',
      desc: 'Closes monthly books in under 4 hours via automated multi-entity ERP reconciliation.',
    },
    {
      id: 'zoe',
      name: 'Zoe Washington',
      role: 'Chief Financial Officer',
      desc: 'Translates real-time burn and margin telemetry into strategic board growth presentations.',
    },
  ];

  return (
    <div className="relative flex items-center justify-center py-6 sm:py-8 px-2 select-none">
      {/* Cluster of avatars overlapping */}
      <div className="flex items-center justify-center -space-x-3 sm:-space-x-5 md:-space-x-6 relative">
        {/* Teammate 1 - Maya (FP&A) */}
        <div
          className="group relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-30 active:scale-95"
          onClick={() => setActiveTooltip(activeTooltip === 'maya' ? null : 'maya')}
          onMouseEnter={() => setActiveTooltip('maya')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Maya Lin — Head of FP&A"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white/90 shadow-md transition-shadow group-hover:shadow-lg">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg-maya" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9D6DF" />
                  <stop offset="100%" stopColor="#9CA3AF" />
                </linearGradient>
                <linearGradient id="skin-maya" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F8D3B7" />
                  <stop offset="100%" stopColor="#E6B894" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#bg-maya)" />
              <path d="M15 100 C15 75 32 68 50 68 C68 68 85 75 85 100 Z" fill="#1C1D21" />
              <rect x="43" y="52" width="14" height="20" rx="3" fill="#E6B894" />
              <ellipse cx="50" cy="46" rx="21" ry="25" fill="url(#skin-maya)" />
              <path d="M22 45 C20 70 24 88 32 94 C34 92 32 75 32 65 C28 55 24 48 22 45 Z" fill="#18181B" />
              <path d="M78 45 C80 70 76 88 68 94 C66 92 68 75 68 65 C72 55 76 48 78 45 Z" fill="#18181B" />
              <path d="M22 44 C22 25 35 18 50 18 C65 18 78 25 78 44 C78 46 72 32 50 32 C28 32 22 46 22 44 Z" fill="#18181B" />
              <path d="M30 33 C38 34 46 39 49 46 C45 42 38 38 30 38 Z" fill="#18181B" />
              <path d="M70 33 C62 34 54 39 51 46 C55 42 62 38 70 38 Z" fill="#18181B" />
              <ellipse cx="40" cy="44" rx="2.4" ry="2.2" fill="#262626" />
              <ellipse cx="60" cy="44" rx="2.4" ry="2.2" fill="#262626" />
              <path d="M36 39 Q40 37 44 39" stroke="#262626" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M56 39 Q60 37 64 39" stroke="#262626" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M42 56 Q50 62 58 56" stroke="#C45A5A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M44 56 Q50 60 56 56" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Teammate 2 - Carlos (Treasury) */}
        <div
          className="group relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-30 active:scale-95"
          onClick={() => setActiveTooltip(activeTooltip === 'carlos' ? null : 'carlos')}
          onMouseEnter={() => setActiveTooltip('carlos')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Carlos Mendez — VP of Treasury"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white/90 shadow-md transition-shadow group-hover:shadow-lg">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg-carlos" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#DFE8EC" />
                  <stop offset="100%" stopColor="#B3C5D1" />
                </linearGradient>
                <linearGradient id="skin-carlos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FDDFCB" />
                  <stop offset="100%" stopColor="#EAB79B" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#bg-carlos)" />
              <path d="M12 100 C14 74 32 66 50 66 C68 66 86 74 88 100 Z" fill="#9D6B48" />
              <path d="M44 68 L50 82 L56 68 Z" fill="#FFFFFF" />
              <rect x="42" y="52" width="16" height="20" rx="4" fill="#EAB79B" />
              <ellipse cx="50" cy="44" rx="22" ry="26" fill="url(#skin-carlos)" />
              <path d="M24 40 C22 20 38 15 50 15 C62 15 78 20 76 40 C72 26 62 21 50 21 C38 21 28 26 24 40 Z" fill="#4B3322" />
              <path d="M26 36 C24 44 26 52 30 54 C28 48 26 42 26 36 Z" fill="#4B3322" />
              <path d="M74 36 C76 44 74 52 70 54 C72 48 74 42 74 36 Z" fill="#4B3322" />
              <path d="M34 46 C34 65 42 71 50 71 C58 71 66 65 66 46 C62 56 58 63 50 63 C42 63 38 56 34 46 Z" fill="#4B3322" />
              <path d="M42 53 Q50 50 58 53 Q50 56 42 53 Z" fill="#4B3322" />
              <ellipse cx="41" cy="41" rx="2.5" ry="2.4" fill="#2E1F14" />
              <ellipse cx="59" cy="41" rx="2.5" ry="2.4" fill="#2E1F14" />
              <path d="M37 36 Q41 34 45 36" stroke="#3F2B1D" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M55 36 Q59 34 63 36" stroke="#3F2B1D" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M44 57 Q50 61 56 57" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Centerpiece: FINLEDGER AI FINANCIAL ENGINE */}
        <div
          className="relative z-20 cursor-pointer group active:scale-95 transition-transform duration-300"
          onClick={() => {
            if (onSelectSparkle) onSelectSparkle();
            setActiveTooltip(activeTooltip === 'ai' ? null : 'ai');
          }}
          onMouseEnter={() => setActiveTooltip('ai')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="FinLedger AI — Autonomous Financial Engine"
        >
          {/* Outer glowing halo matching coral/rose glow */}
          <div className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-[#FF7E7E]/30 blur-md sm:blur-lg animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#FF9E9E]/40 via-[#FF6E7F]/30 to-[#FFB7B2]/40" />

          {/* Crisp White Elevated Circle */}
          <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-xl shadow-red-900/10 border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
            {/* Signature Financial Sparkle & Balance Mark */}
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#F06A6A] transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 6 C32.5 19 37 23.5 50 24 C37 24.5 32.5 29 32 42 C31.5 29 27 24.5 14 24 C27 23.5 31.5 19 32 6 Z"
                fill="#F06A6A"
              />
              <path
                d="M48 11 C48.3 16 50 17.7 55 18 C50 18.3 48.3 20 48 25 C47.7 20 46 18.3 41 18 C46 17.7 47.7 16 48 11 Z"
                fill="#F89292"
              />
              <path
                d="M20 34 C20.2 38.5 22 40.2 26.5 40.5 C22 40.8 20.2 42.5 20 47 C19.8 42.5 18 40.8 13.5 40.5 C18 40.2 19.8 38.5 20 34 Z"
                fill="#FAA4A4"
              />
            </svg>
          </div>
        </div>

        {/* Teammate 3 - Priya (Controller) */}
        <div
          className="group relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-30 active:scale-95"
          onClick={() => setActiveTooltip(activeTooltip === 'priya' ? null : 'priya')}
          onMouseEnter={() => setActiveTooltip('priya')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Priya Sharma — Corporate Controller"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white/90 shadow-md transition-shadow group-hover:shadow-lg">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg-priya" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4E4EC" />
                  <stop offset="100%" stopColor="#9BB5C4" />
                </linearGradient>
                <linearGradient id="skin-priya" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D99B77" />
                  <stop offset="100%" stopColor="#BF7D57" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#bg-priya)" />
              <path d="M12 100 C15 76 32 68 50 68 C68 68 85 76 88 100 Z" fill="#243746" />
              <rect x="43" y="52" width="14" height="20" rx="3" fill="#BF7D57" />
              <ellipse cx="50" cy="45" rx="20" ry="25" fill="url(#skin-priya)" />
              <path d="M22 45 C18 68 22 88 30 96 C32 94 30 78 30 65 C26 55 22 48 22 45 Z" fill="#1A1513" />
              <path d="M78 45 C82 68 78 88 70 96 C68 94 70 78 70 65 C74 55 78 48 78 45 Z" fill="#1A1513" />
              <path d="M20 40 C20 22 34 16 50 16 C66 16 80 22 80 40 C78 28 65 24 50 24 C35 24 22 28 20 40 Z" fill="#1A1513" />
              <path d="M24 38 C35 32 46 36 50 44 C44 38 34 36 24 38 Z" fill="#1A1513" />
              <path d="M76 38 C65 32 54 36 50 44 C56 38 66 36 76 38 Z" fill="#1A1513" />
              <ellipse cx="41" cy="43" rx="2.5" ry="2.3" fill="#1A1513" />
              <ellipse cx="59" cy="43" rx="2.5" ry="2.3" fill="#1A1513" />
              <path d="M37 38 Q41 36 45 38" stroke="#1A1513" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M55 38 Q59 36 63 38" stroke="#1A1513" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M43 55 Q50 61 57 55" stroke="#C45353" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M44 55 Q50 59 56 55" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Teammate 4 - Zoe (CFO) */}
        <div
          className="group relative z-10 cursor-pointer transition-transform duration-200 hover:scale-105 hover:z-30 active:scale-95"
          onClick={() => setActiveTooltip(activeTooltip === 'zoe' ? null : 'zoe')}
          onMouseEnter={() => setActiveTooltip('zoe')}
          onMouseLeave={() => setActiveTooltip(null)}
          title="Zoe Washington — Chief Financial Officer"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white/90 shadow-md transition-shadow group-hover:shadow-lg">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg-zoe" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E2E5E8" />
                  <stop offset="100%" stopColor="#B4BDC5" />
                </linearGradient>
                <linearGradient id="skin-zoe" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9C623C" />
                  <stop offset="100%" stopColor="#7E4A28" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#bg-zoe)" />
              <path d="M12 100 C15 76 32 68 50 68 C68 68 85 76 88 100 Z" fill="#C5A880" />
              <path d="M36 78 L50 96 L64 78 Z" fill="#FFFFFF" />
              <rect x="42" y="52" width="16" height="20" rx="3" fill="#7E4A28" />
              <ellipse cx="50" cy="46" rx="21" ry="24" fill="url(#skin-zoe)" />
              <circle cx="34" cy="28" r="10" fill="#201712" />
              <circle cx="50" cy="22" r="11" fill="#201712" />
              <circle cx="66" cy="28" r="10" fill="#201712" />
              <circle cx="26" cy="38" r="9" fill="#201712" />
              <circle cx="74" cy="38" r="9" fill="#201712" />
              <circle cx="28" cy="48" r="8" fill="#201712" />
              <circle cx="72" cy="48" r="8" fill="#201712" />
              <path d="M30 38 C36 34 44 33 50 33 C56 33 64 34 70 38 C65 31 57 28 50 28 C43 28 35 31 30 38 Z" fill="#201712" />
              <ellipse cx="40" cy="45" rx="2.5" ry="2.4" fill="#201712" />
              <ellipse cx="60" cy="45" rx="2.5" ry="2.4" fill="#201712" />
              <path d="M36 40 Q40 38 44 40" stroke="#201712" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M56 40 Q60 38 64 40" stroke="#201712" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M42 57 Q50 63 58 57" stroke="#9A3838" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M43 57 Q50 62 57 57" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Info Tooltip */}
      {activeTooltip && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -bottom-14 sm:-bottom-12 left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-neutral-900/95 backdrop-blur-md text-white text-xs rounded-xl px-4 py-2.5 shadow-xl border border-white/10 text-center animate-in fade-in zoom-in-95 duration-200 z-40 pointer-events-none"
        >
          {activeTooltip === 'ai' ? (
            <div>
              <p className="font-semibold text-[#FF8585] flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8585] animate-ping" />
                FinLedger AI Financial Copilot
              </p>
              <p className="text-neutral-300 text-[11px] mt-0.5">
                Real-time autonomous ledger reconciliation, burn anomaly detection, and predictive treasury optimization.
              </p>
            </div>
          ) : (
            (() => {
              const tm = teammates.find((t) => t.id === activeTooltip);
              if (!tm) return null;
              return (
                <div>
                  <p className="font-semibold text-white">{tm.name} <span className="font-normal text-neutral-400">· {tm.role}</span></p>
                  <p className="text-neutral-300 text-[11px] mt-0.5">{tm.desc}</p>
                </div>
              );
            })()
          )}
        </div>
      )}
    </div>
  );
};
