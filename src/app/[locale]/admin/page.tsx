"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "./components/AdminHeader";
import AdminNav from "./components/AdminNav";
import AdminFilters from "./components/AdminFilters";
import SpotCard from "./components/SpotCard";
import SkeletonCard from "./components/SkeletonCard";
import StatsBar from "./components/StatsBar";
import { useAdminHooks } from "./useAdminHooks";

export default function AdminPage() {
  const router = useRouter();
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
    approveSpot,
    rejectSpot,
  } = useAdminHooks();

  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // R for refresh
      if (e.key === "r" && !e.metaKey && !e.ctrlKey) {
        fetchPending();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [fetchPending]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative">
        {/* Header */}
        <AdminHeader onLogout={handleLogout} />

        {/* Main content */}
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 py-8">
          {/* Stats bar */}
          <StatsBar
            totalPending={spots.length}
            loading={loading}
          />

          {/* Navigation */}
          <AdminNav />

          {/* Filters */}
          <AdminFilters
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            limit={limit}
            setLimit={setLimit}
            onApply={fetchPending}
            loading={loading}
          />

          {/* Status bar */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400 font-outfit">
                {countText}
              </div>
              {!loading && spots.length > 0 && (
                <div className="text-xs text-gray-500 font-outfit">
                  Press <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-300">R</kbd> to refresh
                </div>
              )}
            </div>
            <button
              onClick={fetchPending}
              disabled={loading}
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-outfit disabled:opacity-50"
            >
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {/* Error state */}
          {error && (
            <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-red-400 font-outfit">Error: {error}</p>
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && spots.length === 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-full mb-6">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-fraunces font-bold text-gray-400 mb-2">
                All Caught Up!
              </h3>
              <p className="text-gray-500 font-outfit">
                No pending spots at the moment
              </p>
            </div>
          )}

          {/* Spots grid */}
          {!loading && !error && spots.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {spots.map((spot, index) => (
                <div
                  key={spot.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <SpotCard
                    spot={spot}
                    onApprove={approveSpot}
                    onReject={rejectSpot}
                    selected={selectedSpot === spot.id}
                    onSelect={() => setSelectedSpot(spot.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
