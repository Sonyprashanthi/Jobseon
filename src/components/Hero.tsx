"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    router.push(
      `/jobs?keyword=${keyword}&location=${location}`
    );
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-7xl font-extrabold text-blue-600">
          Find Your Dream Job
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-2xl text-gray-600">
          Search jobs from LinkedIn, Indeed, Glassdoor and more
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Job title, keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-[340px] h-14 rounded-xl border border-gray-300 bg-white px-5 text-lg shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-[340px] h-14 rounded-xl border border-gray-300 bg-white px-5 text-lg shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="h-14 rounded-xl bg-blue-600 px-12 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
}