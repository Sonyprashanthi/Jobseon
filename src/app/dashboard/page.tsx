import Sidebar from "@/components/Sidebar";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentApplications from "@/components/dashboard/RecentApplications";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl space-y-8 p-8">

          {/* Hero Banner */}
          <DashboardHeader />

          {/* Statistics */}
          <StatsCards />

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Left Side */}
            <div className="lg:col-span-2">
              <RecentApplications />
            </div>

            {/* Right Side */}
            <div className="space-y-8">

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-3xl font-bold">
                  Quick Actions
                </h2>

                <div className="space-y-4">

                  <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
                    🔍 Search Jobs
                  </button>

                  <button className="w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
                    ❤️ Saved Jobs
                  </button>

                  <button className="w-full rounded-xl bg-purple-600 py-4 text-lg font-semibold text-white transition hover:bg-purple-700">
                    👤 Edit Profile
                  </button>

                  <button className="w-full rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600">
                    📄 My Applications
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}