import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-xl">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

        <div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            🚀 Jobseon Dashboard
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Track your job applications, save opportunities,
            and manage your career all in one place.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/jobs"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Browse Jobs
            </Link>

            <Link
              href="/profile"
              className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Edit Profile
            </Link>

          </div>

        </div>

        <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur">

          <h2 className="text-6xl font-bold">
            12
          </h2>

          <p className="mt-3 text-blue-100">
            Applications Submitted
          </p>

        </div>

      </div>

    </div>
  );
}