"use client";

interface StatsBarProps {
  totalPending: number;
  loading: boolean;
}

export default function StatsBar({ totalPending, loading }: StatsBarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Pending */}
      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm group hover:border-purple-500/40 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 font-outfit mb-2">
              Pending Review
            </p>
            {loading ? (
              <div className="h-10 w-20 bg-gray-800 animate-pulse rounded" />
            ) : (
              <p className="text-4xl font-fraunces font-bold text-white">
                {totalPending}
              </p>
            )}
          </div>
          <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 backdrop-blur-sm group hover:border-green-500/40 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 font-outfit mb-2">
              Today's Queue
            </p>
            {loading ? (
              <div className="h-10 w-20 bg-gray-800 animate-pulse rounded" />
            ) : (
              <p className="text-4xl font-fraunces font-bold text-white">
                {totalPending}
              </p>
            )}
          </div>
          <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-sm group hover:border-orange-500/40 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 font-outfit mb-2">
              Status
            </p>
            <p className="text-lg font-outfit font-semibold text-white">
              {loading ? "Loading..." : "Active"}
            </p>
          </div>
          <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className={`w-3 h-3 rounded-full ${loading ? 'bg-orange-400 animate-pulse' : 'bg-green-400'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
