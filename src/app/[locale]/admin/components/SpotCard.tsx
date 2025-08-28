"use client";

import Image from "next/image";
import * as React from "react";
import type { Spot } from "../useAdminHooks";

type Props = {
  spot: Spot;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
};

export default function SpotCard({ spot, onApprove, onReject }: Props) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;

  return (
    <div className="rounded-xl border border-[#22303a] bg-[#0f151a] overflow-hidden shadow-sm">
      <div className="relative aspect-[16/9] bg-[#0b0f12]">
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{spot.name}</h3>
          <span className="text-xs text-[#9aa4af]">
            {spot.city}, {spot.country}
          </span>
        </div>

        <p className="text-sm text-[#9aa4af]">
          Added by{" "}
          <span className="text-[#e6edf3] font-medium">
            {spot.author?.username ? `@${spot.author.username}` : "—"}
          </span>
        </p>

        <p className="text-sm leading-6 text-[#c9d1d9] line-clamp-3">
          {spot.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-[#1b2730] bg-[#111a21] px-3 py-2 text-sm font-medium text-white hover:bg-[#15212a] transition"
            title="Open in Google Maps"
          >
            Show on Google Maps
          </a>

          <button
            onClick={() => onApprove(spot.id)}
            className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(spot.id)}
            className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700 transition"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
