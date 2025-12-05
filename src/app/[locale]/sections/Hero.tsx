"use client";

import Image from "next/image";
import React from "react";
import DownloadButtons from "../components/DownloadButtons";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../components/LocaleSwitcher";

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image with overlay - Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/hero-mobile.png"
          alt="Paris view with Eiffel Tower - mobile"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Background image with overlay - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero-desktop.png"
          alt="Paris view with Eiffel Tower - desktop"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Top bar: logo + language switcher */}
      <div className="relative z-30 px-4 md:px-6 lg:px-12 py-4 md:py-6 flex justify-between items-center">
        <span className="text-white text-xl md:text-3xl font-fraunces font-bold tracking-tight">
          PhotoSpots
        </span>
        <LocaleSwitcher />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center items-center px-4 md:px-6 text-center text-white h-[calc(100vh-80px)] md:h-[calc(100vh-100px)]">
        {/* Eyebrow text */}
        <div className="animate-fade-in-up mb-3 md:mb-6">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-outfit font-medium tracking-wide">
            🌍 Available Now
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-fraunces font-bold leading-[1.1] max-w-5xl animate-fade-in-up delay-100 mb-3 md:mb-0">
          {t("title")}
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-2xl mt-3 md:mt-8 max-w-xl md:max-w-2xl font-outfit font-light leading-relaxed text-white/90 animate-fade-in-up delay-200">
          {t("description")}
        </p>

        {/* CTA Buttons with animation */}
        <div className="animate-fade-in-up delay-300 w-full">
          <DownloadButtons />
        </div>

        {/* Scroll indicator - hide on small mobile */}
        <div className="hidden sm:block absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
