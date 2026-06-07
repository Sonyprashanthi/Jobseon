"use client";

import { useEffect, useState } from "react";

export default function SaveJobButton({
  jobId,
}: {
  jobId: number;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    setSaved(savedJobs.includes(jobId));
  }, [jobId]);

  const handleSave = () => {
    const savedJobs = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    if (savedJobs.includes(jobId)) {
      const updated = savedJobs.filter(
        (id: number) => id !== jobId
      );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updated)
      );

      setSaved(false);
    } else {
      savedJobs.push(jobId);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(savedJobs)
      );

      setSaved(true);
    }
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-lg border px-4 py-2"
    >
      {saved ? "❤️ Saved" : "🤍 Save Job"}
    </button>
  );
}