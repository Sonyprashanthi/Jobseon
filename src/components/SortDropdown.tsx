"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    const value = event.target.value;

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={searchParams.get("sort") || ""}
      className="rounded-lg border p-3"
    >
      <option value="">Default</option>
      <option value="salary-high">
        Highest Salary
      </option>
      <option value="salary-low">
        Lowest Salary
      </option>
    </select>
  );
}