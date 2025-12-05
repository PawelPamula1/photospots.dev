"use client";

import React from "react";
import { useTranslations } from "next-intl";
import DownloadButtons from "../components/DownloadButtons";

const JoinCTA = () => {
  const t = useTranslations("JoinCTA");

  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 lg:py-32 px-6 text-white overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-outfit font-medium tracking-wide">
            🚀 Ready to Explore?
          </span>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl lg:text-7xl font-fraunces font-bold leading-tight mb-8 animate-fade-in-up delay-100">
          {t("title")}
        </h2>

        {/* Subheadline */}
        <p className="text-xl lg:text-3xl font-outfit font-light text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          {t("subtitle")}
        </p>

        {/* Download buttons */}
        <div className="animate-fade-in-up delay-300">
          <DownloadButtons />
        </div>

        {/* Social proof or additional text */}
        <div className="mt-16 animate-fade-in-up delay-400">
          <div className="flex items-center justify-center gap-8 text-white/60 text-sm font-outfit">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by travelers worldwide</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Free to use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
