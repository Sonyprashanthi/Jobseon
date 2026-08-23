import Navbar from "../../components/Navbar";
import FilterSidebar from "../../components/FilterSidebar";
import JobCard from "../../components/JobCard";
import SortDropdown from "../../components/SortDropdown";
import { supabase } from "@/lib/supabase/client";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description?: string;
};

type JobsPageProps = {
  searchParams: Promise<{
    keyword?: string;
    location?: string;
    type?: string;
    sort?: string;
  }>;
};

export default async function JobsPage({
  searchParams,
}: JobsPageProps) {
  const params = await searchParams;

  const keyword =
    params.keyword?.trim().toLowerCase() || "";

  const location =
    params.location?.trim().toLowerCase() || "";

  const type =
    params.type?.trim().toLowerCase() || "";

  const sort = params.sort || "";

  // Get jobs from Supabase
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("*");

  if (error) {
    console.error(
      "Error fetching jobs:",
      error
    );
  }

  let allJobs: Job[] = jobs || [];

  // ----------------------------------------
  // Normalize search text
  // ----------------------------------------
  //
  // Example:
  //
  // "New York"  -> "newyork"
  // "new york"  -> "newyork"
  // "NEW YORK"  -> "newyork"
  // "new-york"  -> "newyork"
  //
  const normalize = (value: string) => {
    return value
      .toLowerCase()
      .replace(/[\s\-_]/g, "");
  };

  const normalizedKeyword =
    normalize(keyword);

  const normalizedLocation =
    normalize(location);

  // ----------------------------------------
  // Keyword search
  // ----------------------------------------

  if (normalizedKeyword) {
    allJobs = allJobs.filter((job) => {
      const title = normalize(
        job.title || ""
      );

      const company = normalize(
        job.company || ""
      );

      const description = normalize(
        job.description || ""
      );

      return (
        title.includes(normalizedKeyword) ||
        company.includes(normalizedKeyword) ||
        description.includes(normalizedKeyword)
      );
    });
  }

  // ----------------------------------------
  // Location search
  // ----------------------------------------

  if (normalizedLocation) {
    allJobs = allJobs.filter((job) => {
      const jobLocation = normalize(
        job.location || ""
      );

      return jobLocation.includes(
        normalizedLocation
      );
    });
  }

  // ----------------------------------------
  // Job type filter
  // ----------------------------------------

  if (type) {
    allJobs = allJobs.filter(
      (job) =>
        normalize(job.type || "") ===
        normalize(type)
    );
  }

  // ----------------------------------------
  // Sorting
  // ----------------------------------------

  if (sort === "title-az") {
    allJobs.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sort === "title-za") {
    allJobs.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Job Search Results
          </h1>

          <SortDropdown />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSidebar />

          <div className="lg:col-span-3 space-y-6">
            {allJobs.length === 0 ? (
              <div className="rounded-lg border bg-white p-10 text-center shadow">
                <h2 className="text-2xl font-bold">
                  No Jobs Found
                </h2>

                <p className="mt-3 text-gray-600">
                  Try changing your search or
                  filters.
                </p>
              </div>
            ) : (
              allJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={Number(job.id)}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}