"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "default";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <select
      value={currentSort}
      onChange={(e) => handleSort(e.target.value)}
      className="rounded-lg border px-4 py-3"
    >
      <option value="default">Default</option>
      <option value="salary-high">Salary: High to Low</option>
      <option value="salary-low">Salary: Low to High</option>
      <option value="title-az">Job Title: A-Z</option>
      <option value="title-za">Job Title: Z-A</option>
    </select>
  );
}