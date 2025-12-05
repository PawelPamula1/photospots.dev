"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { posthog } from "posthog-js";

const DownloadButtons = () => {
  const t = useTranslations("Download");

  const handleDownloadClick = (platform: "ios" | "android") => {
    posthog?.capture("app_download_click", {
      platform,
      source: "landing_page",
    });

    // TODO: Replace with actual App Store and Google Play URLs
    const urls = {
      ios: "https://apps.apple.com/app/photospots",
      android: "https://play.google.com/store/apps/details?id=com.photospots",
    };

    // Uncomment when URLs are ready
    // window.open(urls[platform], "_blank");
    console.log(`Download clicked: ${platform}`);
  };

  return (
    <div className="mt-4 md:mt-8 w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2">
        {/* iOS App Store Button */}
        <button
          onClick={() => handleDownloadClick("ios")}
          className="group relative w-full sm:w-auto overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
        >
          {/* Gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a84ff] via-[#5e5ce6] to-[#bf5af2] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative px-5 py-3 md:px-8 md:py-4 flex items-center justify-center sm:justify-start gap-3 md:gap-4">
            {/* Apple Icon */}
            <svg className="w-7 h-7 md:w-10 md:h-10 text-white drop-shadow-lg flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>

            <div className="text-left">
              <div className="text-[10px] md:text-xs text-white/90 font-light tracking-wide">
                {t("downloadOn")}
              </div>
              <div className="text-base md:text-xl font-semibold text-white tracking-tight">
                App Store
              </div>
            </div>
          </div>
        </button>

        {/* Android Google Play Button */}
        <button
          onClick={() => handleDownloadClick("android")}
          className="group relative w-full sm:w-auto overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 active:scale-95"
        >
          {/* Gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#01875f] via-[#34a853] to-[#fbbc04] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Animated glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative px-5 py-3 md:px-8 md:py-4 flex items-center justify-center sm:justify-start gap-3 md:gap-4">
            {/* Google Play Icon */}
            <svg className="w-7 h-7 md:w-10 md:h-10 text-white drop-shadow-lg flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>

            <div className="text-left">
              <div className="text-[10px] md:text-xs text-white/90 font-light tracking-wide">
                {t("getItOn")}
              </div>
              <div className="text-base md:text-xl font-semibold text-white tracking-tight">
                Google Play
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Subtle tagline with cinematic feel */}
      <div className="mt-3 md:mt-6 text-center">
        <p className="text-xs md:text-sm text-white/70 font-light tracking-wide">
          {t("availableNow")}
        </p>
      </div>
    </div>
  );
};

export default DownloadButtons;
