import React from 'react';
import { TeammateAvatarsCluster } from './TeammateAvatars';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onSeeInAction: () => void;
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeInAction, onGetStarted }) => {
  return (
    <section className="relative bg-[#242872] text-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Subtle background ambient mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(216, 237, 254, 0.12) 0%, transparent 50%), radial-gradient(circle at 15% 80%, rgba(240, 106, 106, 0.08) 0%, transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Financial Hero Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#B4B8E7]">
                FINANCIAL MANAGEMENT
              </span>
            </div>

            {/* Main Headline for Financial Management System matching exact cadence */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[62px] font-bold tracking-[-0.03em] leading-[1.08] text-white">
              Finance is no longer<br />
              just spreadsheets—<br />
              it’s a teammate
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg md:text-[19px] leading-relaxed text-[#CFD3EE] font-normal max-w-xl">
              Automate reconciliations, forecast cash runways with predictive accuracy, and adapt capital allocation to your organization’s evolving needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              {/* See it in action button */}
              <button
                type="button"
                onClick={onSeeInAction}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-3.5 rounded-full bg-[#E0ECFD] hover:bg-[#CFE2FD] text-[#1C2268] font-semibold text-base transition-all duration-150 active:scale-95 shadow-sm group"
              >
                <span>See it in action</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-150 group-hover:translate-x-0.5 text-[#1C2268]" />
              </button>

              {/* Get started button */}
              <button
                type="button"
                onClick={onGetStarted}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-3.5 rounded-full border border-white/50 hover:border-white hover:bg-white/10 text-white font-medium text-base transition-all duration-150 active:scale-95"
              >
                Get started
              </button>
            </div>

            {/* Mobile tip indicator */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#A9ADDC] sm:hidden">
              <Sparkles className="w-3.5 h-3.5 text-[#F06A6A]" />
              <span>Tap finance leaders to inspect automated roles</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Pastel Sky Blue */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center">
            <div className="w-full relative group">
              <div className="w-full bg-[#D8EDFE] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-4 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-indigo-950/30 transition-all duration-300 flex flex-col items-center justify-center min-h-[260px] sm:min-h-[340px] md:min-h-[380px]">
                {/* Visual Avatar Cluster */}
                <TeammateAvatarsCluster onSelectSparkle={onSeeInAction} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
