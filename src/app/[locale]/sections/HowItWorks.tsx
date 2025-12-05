"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const HowItWorks = () => {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      number: "01",
      title: t("step1.title"),
      description: t("step1.description"),
      image: "/howitworks/explore-spots.png",
      alt: t("step1.alt"),
      gradient: "from-purple-600 to-pink-600",
    },
    {
      number: "02",
      title: t("step2.title"),
      description: t("step2.description"),
      image: "/howitworks/full-map.png",
      alt: t("step2.alt"),
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      number: "03",
      title: t("step3.title"),
      description: t("step3.description"),
      image: "/howitworks/spot-screen.png",
      alt: t("step3.alt"),
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      number: "04",
      title: t("step4.title"),
      description: t("step4.description"),
      image: "/howitworks/add-spot.png",
      alt: t("step4.alt"),
      gradient: "from-pink-600 to-rose-600",
    },
    {
      number: "05",
      title: t("step5.title"),
      description: t("step5.description"),
      image: "/howitworks/saved-spots.png",
      alt: t("step5.alt"),
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-fraunces font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-20 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Phone mockup */}
              <div className="w-full lg:flex-1 relative">
                <div className="relative w-full max-w-xs lg:max-w-md mx-auto">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 rounded-3xl blur-3xl scale-90`}
                  />

                  {/* Phone image */}
                  <div className="relative w-full aspect-[9/16] lg:h-[600px] lg:aspect-auto">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      priority={index < 2}
                    />
                  </div>

                  {/* Decorative floating element */}
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? "-right-8" : "-left-8"
                    } top-1/4 w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-30 rounded-full blur-2xl`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:flex-1 space-y-4 lg:space-y-6">
                {/* Step number */}
                <div className={`inline-block text-8xl font-fraunces font-bold bg-gradient-to-r ${step.gradient} text-transparent bg-clip-text opacity-20`}>
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-5xl font-fraunces font-bold text-gray-900 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg lg:text-xl font-outfit leading-relaxed text-gray-700">
                  {step.description}
                </p>

                {/* Decorative line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${step.gradient} rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
