"use client";

export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg border border-[#1b2730] bg-[#0f1419] overflow-hidden">
      <div className="h-40 w-full bg-[#11161a]" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-2/3 bg-[#11161a] rounded" />
        <div className="h-3 w-1/3 bg-[#11161a] rounded" />
        <div className="h-3 w-full bg-[#11161a] rounded" />
        <div className="h-3 w-4/5 bg-[#11161a] rounded" />
      </div>
    </div>
  );
}
