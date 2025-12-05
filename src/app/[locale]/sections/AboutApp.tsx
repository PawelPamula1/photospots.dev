"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const AboutApp = () => {
  const t = useTranslations("AboutApp");

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      {/* Map pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/about/background.png"
          alt="Map pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-outfit font-medium tracking-wide">
                ✨ About the App
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-5xl lg:text-7xl font-fraunces font-bold mb-4">
                {t("title")}
              </h2>
              <p className="text-2xl lg:text-3xl font-outfit font-light text-white/80">
                {t("subtitle")}
              </p>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-6 text-lg font-outfit leading-relaxed text-white/90">
              <p className="border-l-4 border-purple-500 pl-6">{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>

            {/* CTA callout */}
            <div className="p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="font-outfit font-medium leading-relaxed">{t("cta")}</p>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative animate-fade-in-right">
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-full blur-3xl scale-75" />

            {/* Phone mockup */}
            <div className="relative h-[600px] lg:h-[700px] w-full">
              <Image
                src="/about/full-map.png"
                alt="PhotoSpots App Interface"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
