import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

type JobDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { id } = await params;

  const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !job) {
    return (
      <>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold mb-4">
            Job Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            The job you are looking for does not exist.
          </p>

          <Link
            href="/jobs"
            className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Back to Jobs
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">
        <Link
          href="/jobs"
          className="text-blue-600 hover:underline"
        >
          ← Back to Jobs
        </Link>

        <div className="mt-6 rounded-lg border bg-white p-8 shadow-md">
          <h1 className="text-4xl font-bold">
            {job.title}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            {job.company} • {job.location}
          </p>

          <p className="mt-4 text-lg font-medium text-gray-700">
            {job.salary}
          </p>

          <div className="mt-4">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
              {job.type}
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">
              Job Description
            </h2>

            <p className="text-gray-700 leading-7">
              {job.description}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}