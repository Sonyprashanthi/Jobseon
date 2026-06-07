import Navbar from "../../../components/Navbar";
import { jobs } from "../../../data/jobs";
import Link from "next/link";

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = jobs.find(
    (job) => job.id === Number(id)
  );

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">
            Job Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold">
          {job.title}
        </h1>

        <p className="mt-2 text-gray-600">
          {job.company} • {job.location}
        </p>

        <p className="mt-4 text-lg">
          Salary: {job.salary}
        </p>

        <p className="mt-2 text-lg">
          Type: {job.type}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">
            Job Description
          </h2>

          <p className="mt-3 text-gray-700">
            {job.description}
          </p>
        </div>

        <Link
  href={`/jobs/${job.id}/apply`}
  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
>
  Apply Now
</Link>
      </div>
    </>
  );
}