import Link from "next/link";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "Google",
    location: "New York, NY",
    salary: "$120k - $150k",
    type: "Full Time",
    experience: "3-5 Years",
    logo: "🟦",
  },
  {
    title: "Backend Python Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$110k - $145k",
    type: "Remote",
    experience: "2-4 Years",
    logo: "🟨",
  },
  {
    title: "UI/UX Designer",
    company: "Apple",
    location: "California",
    salary: "$95k - $130k",
    type: "Hybrid",
    experience: "2+ Years",
    logo: "🍎",
  },
  {
    title: "DevOps Engineer",
    company: "Microsoft",
    location: "Washington",
    salary: "$130k - $170k",
    type: "Full Time",
    experience: "4+ Years",
    logo: "🟪",
  },
  {
    title: "Data Scientist",
    company: "Meta",
    location: "Remote",
    salary: "$125k - $165k",
    type: "Remote",
    experience: "3+ Years",
    logo: "🔵",
  },
  {
    title: "Product Manager",
    company: "Netflix",
    location: "Los Angeles",
    salary: "$140k - $180k",
    type: "Full Time",
    experience: "5+ Years",
    logo: "🎬",
  },
];

export default function LatestJobs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Latest Jobs
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Featured Job Openings
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Find your next career opportunity.
          </p>

        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {jobs.map((job) => (

            <div
              key={job.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
                    {job.logo}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {job.title}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {job.company}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700 font-semibold">
                  {job.type}
                </span>

              </div>

              <div className="mt-8 space-y-3 text-gray-600">

                <p>📍 {job.location}</p>

                <p>💰 {job.salary}</p>

                <p>💼 {job.experience}</p>

              </div>

              <div className="mt-8 flex justify-between items-center">

                <Link
                  href="/jobs"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>

                <button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
                  Apply
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}