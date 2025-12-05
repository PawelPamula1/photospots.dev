"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "../components/AdminHeader";
import AdminNav from "../components/AdminNav";
import ReportCard from "../components/ReportCard";
import SkeletonCard from "../components/SkeletonCard";
import StatsBar from "../components/StatsBar";
import { useReportsHooks } from "../useReportsHooks";

export default function ReportsPage() {
  const router = useRouter();
  const {
    reports,
    loading,
    error,
    limit,
    setLimit,
    fetchReports,
    dismissReport,
    deleteReportedSpot,
    countText,
  } = useReportsHooks();

  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // R for refresh
      if (e.key === "r" && !e.metaKey && !e.ctrlKey) {
        fetchReports();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [fetchReports]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <AdminHeader onLogout={handleLogout} />

        {/* Main content */}
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 py-8">
          {/* Stats bar */}
          <StatsBar totalPending={reports.length} loading={loading} />

          {/* Navigation */}
          <AdminNav />

          {/* Filters */}
          <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-400"
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
              </div>
              <h3 className="text-lg font-fraunces font-bold text-white">
                Report Settings
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="rounded-xl bg-gray-900/50 border border-gray-700 px-4 py-3 text-sm text-white font-outfit outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                />
              </div>

              {/* Apply Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={fetchReports}
                  disabled={loading}
                  className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 text-sm font-outfit font-medium text-white hover:from-red-700 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
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
                      Loading...
                    </>
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Refresh Reports
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400 font-outfit">
                {countText}
              </div>
              {!loading && reports.length > 0 && (
                <div className="text-xs text-gray-500 font-outfit">
                  Press{" "}
                  <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-300">
                    R
                  </kbd>{" "}
                  to refresh
                </div>
              )}
            </div>
            <button
              onClick={fetchReports}
              disabled={loading}
              className="text-sm text-red-400 hover:text-red-300 transition-colors font-outfit disabled:opacity-50"
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
          {!loading && !error && reports.length === 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-fraunces font-bold text-gray-400 mb-2">
                No Reports!
              </h3>
              <p className="text-gray-500 font-outfit">
                No spot reports at the moment
              </p>
            </div>
          )}

          {/* Reports grid */}
          {!loading && !error && reports.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {reports.map((report, index) => (
                <div
                  key={report.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ReportCard
                    report={report}
                    onDismiss={dismissReport}
                    onDeleteSpot={deleteReportedSpot}
                    selected={selectedReport === report.id}
                    onSelect={() => setSelectedReport(report.id)}
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
