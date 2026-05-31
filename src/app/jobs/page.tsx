import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";
import { jobs } from "../../data/jobs";

export default function JobsPage() {
  return (
    <>
      <Navbar />

      <div className="flex p-8 gap-8">

        <aside className="w-64 rounded-lg border bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">
            Filters
          </h2>

          <div className="space-y-3">
            <label className="block">
              <input type="checkbox" />
              <span className="ml-2">Remote</span>
            </label>

            <label className="block">
              <input type="checkbox" />
              <span className="ml-2">Full Time</span>
            </label>

            <label className="block">
              <input type="checkbox" />
              <span className="ml-2">Internship</span>
            </label>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
  <h1 className="text-4xl font-bold">
    Job Search Results
  </h1>

  <select className="border rounded-lg px-4 py-2">
    <option>Sort By</option>
    <option>Most Recent</option>
    <option>Salary</option>
    <option>Relevance</option>
  </select>
</div>

          <div className="grid gap-6">
            <div className="grid gap-6">
  {jobs.map((job) => (
    <JobCard
      key={job.id}
      title={job.title}
      company={job.company}
      location={job.location}
      salary={job.salary}
    />
  ))}
</div>
          </div>
        </main>

      </div>
    </>
  );
}