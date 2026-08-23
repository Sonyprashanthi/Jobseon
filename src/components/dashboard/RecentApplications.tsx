import Link from "next/link";

const applications = [
  {
    company: "Google",
    logo: "🟢",
    role: "Software Engineer",
    location: "Mountain View, CA",
    date: "Applied 2 days ago",
    status: "Applied",
    color: "bg-blue-100 text-blue-700",
  },
  {
    company: "Amazon",
    logo: "🟠",
    role: "Backend Developer",
    location: "Seattle, WA",
    date: "Applied 5 days ago",
    status: "Interview",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    company: "Microsoft",
    logo: "🔵",
    role: "Data Engineer",
    location: "Redmond, WA",
    date: "Applied 1 week ago",
    status: "Under Review",
    color: "bg-green-100 text-green-700",
  },
  {
    company: "Netflix",
    logo: "🔴",
    role: "Frontend Developer",
    location: "Los Gatos, CA",
    date: "Applied 2 weeks ago",
    status: "Rejected",
    color: "bg-red-100 text-red-700",
  },
];

export default function RecentApplications() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-slate-500">
            Track your latest job applications.
          </p>
        </div>

        <Link
          href="/applications"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          View All →
        </Link>

      </div>

      <div className="space-y-5">

        {applications.map((job) => (
          <div
            key={job.company}
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                {job.logo}
              </div>

              <div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {job.role}
                </h3>

                <p className="font-medium text-slate-700">
                  {job.company}
                </p>

                <p className="text-sm text-slate-500">
                  {job.location}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {job.date}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${job.color}`}
              >
                {job.status}
              </span>

              <Link
                href="/applications"
                className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
              >
                Details
              </Link>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}