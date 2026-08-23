"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";
import { supabase } from "@/lib/supabase/client";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

export default function SavedJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const getSavedJobIds = (): number[] => {
    try {
      const stored = localStorage.getItem("savedJobs");

      if (!stored) {
        return [];
      }

      const parsed = JSON.parse(stored);

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed
        .map(Number)
        .filter((id) => !isNaN(id));
    } catch (error) {
      console.error(
        "Error reading saved jobs:",
        error
      );

      return [];
    }
  };

  const loadSavedJobs = async () => {
    try {
      setLoading(true);

      // Get saved job IDs from localStorage
      const savedIds = getSavedJobIds();

      // If there are no saved jobs
      if (savedIds.length === 0) {
        setJobs([]);
        return;
      }

      // Get all jobs directly from Supabase
      const { data, error } = await supabase
        .from("jobs")
        .select("*");

      if (error) {
        console.error(
          "Error fetching jobs from Supabase:",
          error
        );

        setJobs([]);
        return;
      }

      // Only show jobs that are saved
      const savedJobs = (data || []).filter(
        (job) =>
          savedIds.includes(Number(job.id))
      );

      setJobs(savedJobs);
    } catch (error) {
      console.error(
        "Error loading saved jobs:",
        error
      );

      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load saved jobs when page opens
    loadSavedJobs();

    // Listen for save/unsave changes
    const handleSavedJobsChanged = () => {
      loadSavedJobs();
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
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="mb-8 text-4xl font-bold">
          Saved Jobs
        </h1>

        {/* Loading */}
        {loading && (
          <div className="rounded-lg border bg-white p-10 text-center shadow">
            <p className="text-gray-600">
              Loading saved jobs...
            </p>
          </div>
        )}

        {/* No saved jobs */}
        {!loading && jobs.length === 0 && (
          <div className="rounded-lg border bg-white p-10 text-center shadow">
            <h2 className="text-2xl font-bold">
              No Saved Jobs
            </h2>

            <p className="mt-3 text-gray-600">
              Jobs you save will appear here.
            </p>
          </div>
        )}

        {/* Saved jobs */}
        {!loading && jobs.length > 0 && (
          <div className="space-y-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={Number(job.id)}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}