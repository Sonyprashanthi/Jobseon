"use client";

import { useEffect, useState } from "react";

type SaveJobButtonProps = {
  jobId: number;
};

export default function SaveJobButton({
  jobId,
}: SaveJobButtonProps) {
  const [saved, setSaved] = useState(false);

  // Get saved job IDs safely
  const getSavedJobs = (): number[] => {
    try {
      const stored = localStorage.getItem("savedJobs");

      if (!stored) {
        return [];
      }

      const parsed = JSON.parse(stored);

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.map(Number).filter((id) => !isNaN(id));
    } catch (error) {
      console.error("Error reading saved jobs:", error);
      return [];
    }
  };

  // Check whether this job is already saved
  const checkSavedStatus = () => {
    const savedJobs = getSavedJobs();

    setSaved(savedJobs.includes(Number(jobId)));
  };

  useEffect(() => {
    // Check when component loads
    checkSavedStatus();

    // Keep button synchronized when saved jobs change
    const handleSavedJobsChanged = () => {
      checkSavedStatus();
    };

    window.addEventListener(
      "savedJobsChanged",
      handleSavedJobsChanged
    );

    return () => {
      window.removeEventListener(
        "savedJobsChanged",
        handleSavedJobsChanged
      );
    };
  }, [jobId]);

  const handleSave = () => {
    // Always get the latest value from localStorage
    const savedJobs = getSavedJobs();

    const jobIdNumber = Number(jobId);

    if (savedJobs.includes(jobIdNumber)) {
      // REMOVE JOB
      const updatedJobs = savedJobs.filter(
        (id) => id !== jobIdNumber
      );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updatedJobs)
      );

      setSaved(false);
    } else {
      // SAVE JOB
      const updatedJobs = [
        ...savedJobs,
        jobIdNumber,
      ];

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updatedJobs)
      );

      setSaved(true);
    }

    // Tell the rest of the application that saved jobs changed
    window.dispatchEvent(
      new Event("savedJobsChanged")
    );
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="rounded-lg border px-4 py-2"
    >
      {saved ? "❤️ Saved" : "🤍 Save Job"}
    </button>
  );
}