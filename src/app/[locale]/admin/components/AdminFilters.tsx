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
};

export default function AdminFilters({
  country,
  setCountry,
  city,
  setCity,
  limit,
  setLimit,
  onApply,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap items-end gap-3">
      <div className="flex flex-col">
        <label className="text-xs text-[#9aa4af] mb-1">Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="rounded bg-[#11161a] border border-[#1b2730] px-3 py-2 text-sm outline-none"
        >
          <option value="">All countries</option>
          {Object.entries(countryNames).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-xs text-[#9aa4af] mb-1">City</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g. Warsaw"
          className="rounded bg-[#11161a] border border-[#1b2730] px-3 py-2 text-sm outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs text-[#9aa4af] mb-1">Limit</label>
        <input
          type="number"
          min={1}
          max={200}
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          className="w-24 rounded bg-[#11161a] border border-[#1b2730] px-3 py-2 text-sm outline-none"
        />
      </div>

      <button
        onClick={onApply}
        className="rounded bg-[#1f6feb] px-4 py-2 text-sm font-medium hover:bg-[#1a5ec7]"
      >
        Apply
      </button>
    </div>
  );
}
