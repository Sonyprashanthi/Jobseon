"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (type: string) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    const currentType = params.get("type");

    if (currentType === type) {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Filters
      </h2>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              searchParams.get("type") === "Remote"
            }
            onChange={() => handleFilter("Remote")}
          />
          Remote
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              searchParams.get("type") === "Full Time"
            }
            onChange={() => handleFilter("Full Time")}
          />
          Full Time
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              searchParams.get("type") === "Internship"
            }
            onChange={() => handleFilter("Internship")}
          />
          Internship
        </label>
      </div>
    </div>
  );
}