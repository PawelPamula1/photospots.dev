// hooks/useReportsHooks.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Spot, Author } from "./useAdminHooks";

export type SpotReport = {
  id: string;
  reason: string;
  created_at: string;
  spot_id: string;
  reporter_id: string;
  spot: Spot;
  reporter: Author;
};

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export function useReportsHooks() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reports, setReports] = useState<SpotReport[]>([]);
  const [limit, setLimit] = useState(60);

  const fetchReports = useCallback(async () => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    params.set("limit", String(limit));

    try {
      const res = await fetch(`${API}/api/moderation/reports?${params}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as SpotReport[];
      setReports(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load reports");
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const dismissReport = useCallback(async (reportId: string) => {
    await fetch(`${API}/api/moderation/reports/${reportId}`, {
      method: "DELETE",
    });
    setReports((prev) => prev.filter((r) => r.id !== reportId));
  }, []);

  const deleteReportedSpot = useCallback(
    async (reportId: string, spotId: string) => {
      await fetch(`${API}/api/moderation/reports/${reportId}/spot/${spotId}`, {
        method: "DELETE",
      });
      setReports((prev) => prev.filter((r) => r.id !== reportId));
    },
    []
  );

  const countText = useMemo(
    () => (reports.length === 1 ? "1 report" : `${reports.length} reports`),
    [reports.length]
  );

  return {
    loading,
    error,
    reports,
    limit,
    setLimit,
    fetchReports,
    dismissReport,
    deleteReportedSpot,
    countText,
  };
}
