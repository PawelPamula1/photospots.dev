"use client";

export default function AdminHeader() {
  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Pending Spots
        </h1>
      </div>
    </header>
  );
}
