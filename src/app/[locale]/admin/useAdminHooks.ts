// hooks/useAdminHooks.ts
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type Author = {
  id: string;
  username: string;
  avatar_url?: string | null;
};

export type Spot = {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  description: string;
  latitude: number;
  longitude: number;
  photo_tips?: string | null;
  accepted: boolean;
  created_at: string;
  author_id: string | null;
  author?: Author | null;
};

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export function useAdminHooks() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [spots, setSpots] = useState<Spot[]>([]);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [limit, setLimit] = useState(60);

  const fetchPending = useCallback(async () => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    params.set("limit", String(limit));
    if (country.trim()) params.set("country", country.trim());
    if (city.trim()) params.set("city", city.trim());

    try {
      const res = await fetch(`${API}/api/moderation/pending?${params}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as Spot[];
      setSpots(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load pending spots");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  const approveSpot = useCallback(async (id: string) => {
    await fetch(`${API}/api/moderation/accept/${id}`, { method: "PUT" });
    setSpots((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const rejectSpot = useCallback(async (id: string) => {
    await fetch(`${API}/api/moderation/reject/${id}`, { method: "DELETE" });
    setSpots((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const buildGoogleMapsLink = useCallback(
    (lat: number, lon: number) =>
      `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
    []
  );

  const countText = useMemo(
    () =>
      spots.length === 1 ? "1 pending spot" : `${spots.length} pending spots`,
    [spots.length]
  );

  return {
    loading,
    error,
    spots,
    country,
    setCountry,
    city,
    setCity,
    limit,
    setLimit,
    fetchPending,
    approveSpot,
    rejectSpot,
    buildGoogleMapsLink,
    countText,
  };
}
