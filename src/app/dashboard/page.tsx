import Sidebar from "../../components/Sidebar";

export default function DashboardPage() {
  return (
    <>
     <div className="flex bg-slate-100">
  <Sidebar />

  <main className="flex-1 p-10">

      <div className="bg-red-500 text-white p-6 text-3xl font-bold">
        Tailwind Test
      </div>

      <div className="min-h-screen bg-slate-100 py-12 px-8">
        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <h1 className="text-5xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Here's an overview of your Jobseon account.
          </p>

          {/* Statistics */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
              <p className="text-lg text-gray-500">📄 Applied Jobs</p>
              <h2 className="mt-4 text-5xl font-bold text-blue-600">8</h2>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
              <p className="text-lg text-gray-500">❤️ Saved Jobs</p>
              <h2 className="mt-4 text-5xl font-bold text-green-600">12</h2>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
              <p className="text-lg text-gray-500">🎯 Interviews</p>
              <h2 className="mt-4 text-5xl font-bold text-purple-600">2</h2>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6">
              <p className="text-lg text-gray-500">📈 Profile Completion</p>
              <h2 className="mt-4 text-5xl font-bold text-orange-500">90%</h2>
            </div>
          </div>

          {/* Main Content */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {/* Recent Applications */}

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8">

              <h2 className="mb-6 text-3xl font-bold">
                Recent Applications
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                  <div>
                    <h3 className="text-xl font-semibold">Google</h3>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                    Applied
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                  <div>
                    <h3 className="text-xl font-semibold">Amazon</h3>
                    <p className="text-gray-500">Backend Developer</p>
                  </div>

                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                    Interview
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">Microsoft</h3>
                    <p className="text-gray-500">Data Engineer</p>
                  </div>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    Under Review
                  </span>
                </div>

              </div>

            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8">

              <h2 className="mb-6 text-3xl font-bold">
                Quick Actions
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >

                <button
                  style={{
                    background: "#2563eb",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  🔍 Search Jobs
                </button>

                <button
                  style={{
                    background: "#16a34a",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  ❤️ Saved Jobs
                </button>

                <button
                  style={{
                    background: "#9333ea",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  👤 Edit Profile
                </button>

                <button
                  style={{
                    background: "#f97316",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  📄 My Applications
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
      </main>
      </div>
      
      </>
  );
}