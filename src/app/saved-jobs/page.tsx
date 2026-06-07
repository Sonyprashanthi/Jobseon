"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";
import { jobs } from "../../data/jobs";

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    setSavedJobs(saved);
  }, []);

  const savedJobList = jobs.filter((job) =>
    savedJobs.includes(job.id)
  );

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="mb-6 text-4xl font-bold">
          Saved Jobs
        </h1>

        {savedJobList.length === 0 ? (
          <p>No saved jobs yet.</p>
        ) : (
          <div className="grid gap-6">
            {savedJobList.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}