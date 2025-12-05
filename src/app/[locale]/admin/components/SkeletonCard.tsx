"use client";

export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-700/50 bg-gray-800/50 overflow-hidden backdrop-blur-sm">
      {/* Image skeleton */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />

      {/* Content skeleton */}
      <div className="p-5 space-y-4">
        {/* Title and author */}
        <div className="space-y-3">
          <div className="h-6 w-3/4 bg-gray-700/50 rounded-lg animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-700/50 rounded-lg animate-pulse" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-700/50 rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-gray-700/50 rounded animate-pulse" />
          <div className="h-3 w-4/6 bg-gray-700/50 rounded animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-10 bg-gray-700/50 rounded-xl animate-pulse" />
          <div className="h-10 bg-gray-700/50 rounded-xl animate-pulse" />
          <div className="h-10 bg-gray-700/50 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
