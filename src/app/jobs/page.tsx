import SortDropdown from "../../components/SortDropdown";
import FilterSidebar from "../../components/FilterSidebar";
import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";
import { jobs } from "../../data/jobs";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{
  keyword?: string;
  location?: string;
  sort?: string;
  type?: string;
  }>;
}) {
  const params = await searchParams;

  const keyword = params.keyword?.toLowerCase() || "";
  const location = params.location?.toLowerCase() || "";
  const sort = params.sort || "";
  const type = params.type || "";

  const filteredJobs = jobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    const jobLocation = job.location
      .toLowerCase()
      .replace(/\s+/g, "");

    const searchLocation = location
      .toLowerCase()
      .replace(/\s+/g, "");

    const matchesKeyword =
  jobTitle.includes(keyword);

const matchesLocation =
  jobLocation.includes(searchLocation);

const matchesType =
  type === "" || job.type === type;

return (
  matchesKeyword &&
  matchesLocation &&
  matchesType
);
  });

  const sortedJobs = [...filteredJobs];

  if (sort === "salary-high") {
    sortedJobs.sort((a, b) => {
      const salaryA = parseInt(
        a.salary.replace(/[$,]/g, "").split("-")[1]
      );

      const salaryB = parseInt(
        b.salary.replace(/[$,]/g, "").split("-")[1]
      );

      return salaryB - salaryA;
    });
  }

  if (sort === "salary-low") {
    sortedJobs.sort((a, b) => {
      const salaryA = parseInt(
        a.salary.replace(/[$,]/g, "").split("-")[0]
      );

      const salaryB = parseInt(
        b.salary.replace(/[$,]/g, "").split("-")[0]
      );

      return salaryA - salaryB;
    });
  }

  return (
    <>
      <Navbar />

      <div className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Job Search Results
          </h1>

          <SortDropdown />
        </div>

        {sortedJobs.length === 0 ? (
          <div className="rounded-lg border bg-white p-8 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No Jobs Found
            </h2>

            <p className="mt-2 text-gray-600">
              Try a different keyword or location.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {sortedJobs.map((job) => (
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