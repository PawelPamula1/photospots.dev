"use client";

import { countryNames } from "@/lib/countryNames";

type Props = {
  country: string;
  setCountry: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  limit: number;
  setLimit: (v: number) => void;
  onApply: () => void;
  loading: boolean;
};

export default function AdminFilters({
  country,
  setCountry,
  city,
  setCity,
  limit,
  setLimit,
  onApply,
  loading,
}: Props) {
  return (
    <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
        <h3 className="text-lg font-fraunces font-bold text-white">
          Filters
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Country Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-400 font-outfit mb-2">
            Country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-xl bg-gray-900/50 border border-gray-700 px-4 py-3 text-sm text-white font-outfit outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          >
            <option value="">All countries</option>
            {Object.entries(countryNames).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-400 font-outfit mb-2">
            City
          </label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Warsaw"
            className="rounded-xl bg-gray-900/50 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 font-outfit outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        {/* Limit Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-400 font-outfit mb-2">
            Limit
          </label>
          <input
            type="number"
            min={1}
            max={200}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="rounded-xl bg-gray-900/50 border border-gray-700 px-4 py-3 text-sm text-white font-outfit outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        {/* Apply Button */}
        <div className="flex flex-col justify-end">
          <button
            onClick={onApply}
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-outfit font-medium text-white hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Apply Filters
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
