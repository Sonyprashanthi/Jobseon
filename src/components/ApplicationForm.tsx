"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border bg-green-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-green-700">
          Application Submitted Successfully!
        </h2>

        <p className="mt-2 text-green-600">
          Thank you for applying.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border bg-white p-8 shadow"
    >
      <div className="flex flex-col">
        <label>Full Name</label>
        <input
          type="text"
          className="rounded-lg border p-3"
          required
        />
      </div>

      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          className="rounded-lg border p-3"
          required
        />
      </div>

      <div className="flex flex-col">
        <label>Phone Number</label>
        <input
          type="text"
          className="rounded-lg border p-3"
          required
        />
      </div>

      <div className="flex flex-col">
        <label>Upload Resume</label>
        <input
          type="file"
          className="rounded-lg border p-3"
          required
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Submit Application
      </button>
    </form>
  );
}