// app/admin/page.tsx
"use client";

import AdminHeader from "./components/AdminHeader";
import AdminFilters from "./components/AdminFilters";
import SpotCard from "./components/SpotCard";
import SkeletonCard from "./components/SkeletonCard";
import { useAdminHooks } from "./useAdminHooks";

export default function AdminPage() {
  const {
    spots,
    loading,
    error,
    country,
    setCountry,
    city,
    setCity,
    limit,
    setLimit,
    fetchPending,
    countText,
    approveSpot, // ⬅️ NOWE
    rejectSpot, // ⬅️ NOWE
  } = useAdminHooks();

  return (
    <main className="min-h-screen bg-[#0b0f12] text-[#e6edf3]">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <AdminHeader />

        <AdminFilters
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          limit={limit}
          setLimit={setLimit}
          onApply={fetchPending}
        />

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-[#9aa4af]">{countText}</div>
          <button
            onClick={fetchPending}
            className="text-sm text-[#7cc4ff] hover:underline"
          >
            Refresh
          </button>
        </div>

        {error && <p className="mt-6 text-red-400">Error: {error}</p>}

        {/* Loading skeleton */}
        {loading && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <>
            {spots.length === 0 ? (
              <p className="mt-8 text-[#9aa4af]">No new spots for now</p>
            ) : (
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {spots.map((s) => (
                  <SpotCard
                    key={s.id}
                    spot={s}
                    onApprove={approveSpot} // ⬅️ przekazujemy handler
                    onReject={rejectSpot} // ⬅️ przekazujemy handler
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </main>
  );
}
