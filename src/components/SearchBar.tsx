"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    router.push(
  `/jobs?keyword=${keyword}&location=${location}`
);
};

  return (
    <div className="mt-8 flex gap-4">
      <input
        type="text"
        placeholder="Job Title, Keywords"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-80 rounded-lg border p-4"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-80 rounded-lg border p-4"
      />

      <button
        onClick={handleSearch}
        className="rounded-lg bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
      >
        Search Jobs
      </button>
    </div>
  );
}