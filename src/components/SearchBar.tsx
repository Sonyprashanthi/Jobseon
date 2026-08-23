"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Job Title, Keywords"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full rounded-lg border p-4 md:w-80"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full rounded-lg border p-4 md:w-80"
      />

      <button
        type="button"
        onClick={handleSearch}
        className="rounded-lg bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
      >
        Search Jobs
      </button>
    </div>
  );
}