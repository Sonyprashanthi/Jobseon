import Navbar from "@/components/Navbar";
import Link from "next/link";

const stats = [
  {
    title: "Applied Jobs",
    value: 12,
    icon: "📄",
    color: "bg-blue-100 text-blue-600",
    growth: "+3 this week",
  },
  {
    title: "Saved Jobs",
    value: 5,
    icon: "❤️",
    color: "bg-red-100 text-red-600",
    growth: "+2 today",
  },
  {
    title: "Interviews",
    value: 2,
    icon: "🎯",
    color: "bg-green-100 text-green-600",
    growth: "Tomorrow",
  },
  {
    title: "Profile Views",
    value: 24,
    icon: "👀",
    color: "bg-yellow-100 text-yellow-600",
    growth: "+18%",
  },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Welcome Banner */}

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              <div>

                <h1 className="text-4xl font-bold">
                  👋 Welcome Back
                </h1>

                <p className="mt-3 text-blue-100 text-lg">
                  Track your applications, discover new jobs,
                  and grow your career with Jobseon.
                </p>

                <div className="mt-6 flex gap-4">

                  <Link
                    href="/jobs"
                    className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100"
                  >
                    Browse Jobs
                  </Link>

                  <Link
                    href="/profile"
                    className="rounded-xl border border-white px-6 py-3 font-semibold hover:bg-white/10"
                  >
                    View Profile
                  </Link>

                </div>

              </div>

              <div className="mt-8 lg:mt-0 text-center">

                <h2 className="text-6xl font-bold">
                  12
                </h2>

                <p className="text-blue-100">
                  Applications Submitted
                </p>

              </div>

            </div>

          </div>

          {/* Top Bar */}

          <div className="mt-8 flex flex-col lg:flex-row justify-between gap-4">

            <input
              placeholder="🔍 Search dashboard..."
              className="w-full lg:w-96 rounded-xl border bg-white px-5 py-3 shadow"
            />

            <div className="flex items-center gap-4">

              <button className="h-12 w-12 rounded-xl bg-white shadow hover:shadow-lg">
                🔔
              </button>

              <button className="h-12 w-12 rounded-xl bg-white shadow hover:shadow-lg">
                ⚙️
              </button>

              <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow">
                K
              </div>

            </div>

          </div>

          {/* Statistics */}

          <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-lg border hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <h2 className="mt-5 text-5xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-2 text-gray-600">
                  {item.title}
                </p>

                <p className="mt-3 text-green-600 font-medium">
                  {item.growth}
                </p>

              </div>
            ))}

          </div>

          {/* Quick Actions */}

          <div className="mt-14">

            <h2 className="text-3xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <Link
                href="/jobs"
                className="rounded-2xl bg-white p-8 shadow-lg border hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="text-5xl">💼</div>

                <h3 className="mt-5 text-xl font-bold">
                  Browse Jobs
                </h3>

                <p className="mt-3 text-gray-600">
                  Discover the latest opportunities.
                </p>
              </Link>

              <Link
                href="/saved-jobs"
                className="rounded-2xl bg-white p-8 shadow-lg border hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="text-5xl">❤️</div>

                <h3 className="mt-5 text-xl font-bold">
                  Saved Jobs
                </h3>

                <p className="mt-3 text-gray-600">
                  Review your bookmarked jobs.
                </p>
              </Link>

              <Link
                href="/applications"
                className="rounded-2xl bg-white p-8 shadow-lg border hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="text-5xl">📄</div>

                <h3 className="mt-5 text-xl font-bold">
                  Applications
                </h3>

                <p className="mt-3 text-gray-600">
                  Track your application progress.
                </p>
              </Link>

              <Link
                href="/profile"
                className="rounded-2xl bg-white p-8 shadow-lg border hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="text-5xl">👤</div>

                <h3 className="mt-5 text-xl font-bold">
                  Profile
                </h3>

                <p className="mt-3 text-gray-600">
                  Keep your profile updated.
                </p>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}