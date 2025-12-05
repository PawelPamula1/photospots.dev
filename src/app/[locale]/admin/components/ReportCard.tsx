"use client";

import Image from "next/image";
import { useState } from "react";
import type { SpotReport } from "../useReportsHooks";

type Props = {
  report: SpotReport;
  onDismiss: (reportId: string) => void;
  onDeleteSpot: (reportId: string, spotId: string) => void;
  selected?: boolean;
  onSelect?: () => void;
};

export default function ReportCard({
  report,
  onDismiss,
  onDeleteSpot,
  selected,
  onSelect,
}: Props) {
  const [imageExpanded, setImageExpanded] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const spot = report.spot;
  const reporter = report.reporter;

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${spot.latitude},${spot.longitude}`;

  const handleDismiss = async () => {
    setIsDismissing(true);
    await onDismiss(report.id);
  };

  const handleDeleteSpot = async () => {
    setIsDeleting(true);
    await onDeleteSpot(report.id, spot.id);
  };

  return (
    <>
      {/* Main Card */}
      <div
        className={`group relative rounded-2xl border bg-gray-800/50 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 ${
          selected
            ? "border-red-500 ring-2 ring-red-500/50"
            : "border-gray-700/50 hover:border-red-500/50"
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
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </button>

          {/* Location badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg text-xs font-outfit text-white opacity-0 group-hover:opacity-100 transition-opacity">
            📍 {spot.city}, {spot.country}
          </div>

          {/* Report indicator badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500/80 backdrop-blur-md border border-red-400/30 rounded-lg text-xs font-outfit font-semibold text-white">
            🚨 Reported
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
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {spot.author?.username ? `@${spot.author.username}` : "Anonymous"}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-300 font-outfit line-clamp-3">
            {spot.description}
          </p>

          {/* Report Reason */}
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div className="flex-1">
                <p className="text-xs text-red-300 font-outfit font-medium mb-1">
                  Report Reason:
                </p>
                <p className="text-xs text-red-200 font-outfit line-clamp-2">
                  {report.reason}
                </p>
              </div>
            </div>
          </div>

          {/* Reporter Info */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-outfit">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Reported by: @{reporter.username || "Anonymous"}
          </div>

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
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Map
            </a>

            {/* Dismiss Report */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              disabled={isDismissing}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-outfit font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDismissing ? (
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Dismiss
                </>
              )}
            </button>

            {/* Delete Spot */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteSpot();
              }}
              disabled={isDeleting}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl text-xs font-outfit font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeleting ? (
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
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
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
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
