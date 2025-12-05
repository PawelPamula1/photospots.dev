"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const Problem = () => {
  const t = useTranslations("Problem");

  return (
    <section className="bg-white px-6 lg:px-20 py-24 lg:py-32">
      {/* Headline */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-24">
        <h2 className="text-4xl lg:text-6xl font-fraunces font-bold leading-tight text-center text-gray-900 max-w-4xl mx-auto">
          {t("headline1")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {t("headline2")}
          </span>
        </h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Mobile layout */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          <div className="relative h-64 rounded-2xl overflow-hidden group animate-scale-in">
            <Image
              src="/problem/sagrada.jpg"
              alt="Travel photo 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group animate-scale-in delay-100">
            <Image
              src="/problem/photo2.png"
              alt="Travel photo 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="col-span-2 relative h-72 rounded-2xl overflow-hidden group animate-scale-in delay-200">
            <Image
              src="/problem/photo3.png"
              alt="Travel photo 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group animate-scale-in delay-300">
            <Image
              src="/problem/hollywood.jpg"
              alt="Travel photo 4"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group animate-scale-in delay-400">
            <Image
              src="/problem/canary_wharf.jpg"
              alt="Travel photo 5"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-6 h-[800px]">
          {/* Large left image */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group animate-scale-in shadow-2xl">
            <Image
              src="/problem/photo3.png"
              alt="Travel photo 3"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Top right tall */}
          <div className="col-span-2 row-span-3 relative rounded-3xl overflow-hidden group animate-scale-in delay-100 shadow-2xl">
            <Image
              src="/problem/sagrada.jpg"
              alt="Travel photo 1"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom left small */}
          <div className="relative rounded-3xl overflow-hidden group animate-scale-in delay-200 shadow-2xl">
            <Image
              src="/problem/hollywood.jpg"
              alt="Travel photo 4"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Bottom middle small */}
          <div className="relative rounded-3xl overflow-hidden group animate-scale-in delay-300 shadow-2xl">
            <Image
              src="/problem/photo2.png"
              alt="Travel photo 2"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg lg:text-2xl font-outfit leading-relaxed text-gray-700">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

export default Problem;
