"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  // Extract locale from pathname
  const locale = pathname.split("/")[1];

  const isPending = pathname.includes("/admin") && !pathname.includes("/reports");
  const isReports = pathname.includes("/reports");

  return (
    <div className="mt-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-2 backdrop-blur-sm">
      <nav className="flex gap-2">
        <Link
          href={`/${locale}/admin`}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-outfit font-medium transition-all ${
            isPending
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Pending Spots
        </Link>

        <Link
          href={`/${locale}/admin/reports`}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-outfit font-medium transition-all ${
            isReports
              ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
              : "text-gray-400 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          <svg
            className="w-5 h-5"
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
          Spot Reports
        </Link>
      </nav>
    </div>
  );
}
