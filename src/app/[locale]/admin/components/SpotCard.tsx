"use client";

import Image from "next/image";
import { useState } from "react";
import type { Spot } from "../useAdminHooks";

type Props = {
  spot: Spot;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  selected?: boolean;
  onSelect?: () => void;
};

export default function SpotCard({ spot, onApprove, onReject, selected, onSelect }: Props) {
  const [imageExpanded, setImageExpanded] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;

  const handleApprove = async () => {
    setIsApproving(true);
    await onApprove(spot.id);
  };

  const handleReject = async () => {
    setIsRejecting(true);
    await onReject(spot.id);
  };

  return (
    <>
      {/* Main Card */}
      <div
        className={`group relative rounded-2xl border bg-gray-800/50 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 ${
          selected ? "border-purple-500 ring-2 ring-purple-500/50" : "border-gray-700/50 hover:border-purple-500/50"
        }`}
        onClick={onSelect}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
          <Image
            src={spot.image}
            alt={spot.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Expand button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setImageExpanded(true);
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </button>

          {/* Location badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg text-xs font-outfit text-white opacity-0 group-hover:opacity-100 transition-opacity">
            📍 {spot.city}, {spot.country}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-xl font-fraunces font-bold text-white mb-2 line-clamp-1">
              {spot.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 font-outfit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {spot.author?.username ? `@${spot.author.username}` : "Anonymous"}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-300 font-outfit">
            {spot.description}
          </p>

          {/* Photo Tips */}
          {spot.photo_tips && (
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-xs text-purple-300 font-outfit">
                💡 {spot.photo_tips}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {/* Maps Link */}
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-700/50 hover:bg-gray-700 border border-gray-600/50 rounded-xl text-xs font-outfit font-medium text-gray-300 hover:text-white transition-all"
              title="View on Google Maps"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Map
            </a>

            {/* Approve */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleApprove();
              }}
              disabled={isApproving}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-600 hover:bg-green-700 rounded-xl text-xs font-outfit font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isApproving ? (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Approve
                </>
              )}
            </button>

            {/* Reject */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleReject();
              }}
              disabled={isRejecting}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl text-xs font-outfit font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRejecting ? (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Reject
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {imageExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setImageExpanded(false)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            onClick={() => setImageExpanded(false)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-6xl w-full h-full">
            <Image
              src={spot.image}
              alt={spot.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
