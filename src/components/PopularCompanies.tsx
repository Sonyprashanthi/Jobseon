import Link from "next/link";

const companies = [
  {
    logo: "🟦",
    name: "Google",
    rating: "4.8",
    jobs: "235 Jobs",
    location: "California",
  },
  {
    logo: "🟪",
    name: "Microsoft",
    rating: "4.7",
    jobs: "182 Jobs",
    location: "Washington",
  },
  {
    logo: "🟨",
    name: "Amazon",
    rating: "4.6",
    jobs: "315 Jobs",
    location: "Seattle",
  },
  {
    logo: "🔵",
    name: "Meta",
    rating: "4.8",
    jobs: "120 Jobs",
    location: "California",
  },
  {
    logo: "🍎",
    name: "Apple",
    rating: "4.9",
    jobs: "145 Jobs",
    location: "Cupertino",
  },
  {
    logo: "🎬",
    name: "Netflix",
    rating: "4.7",
    jobs: "58 Jobs",
    location: "Los Gatos",
  },
];

export default function PopularCompanies() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Top Employers
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Popular Companies
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Explore companies hiring talented professionals.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {companies.map((company) => (

            <div
              key={company.name}
              className="group rounded-3xl bg-white p-8 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                    {company.logo}
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {company.name}
                    </h3>

                    <p className="text-gray-500">
                      {company.location}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                  ⭐ {company.rating}
                </span>

              </div>

              <div className="mt-8">

                <p className="text-gray-600">
                  <span className="font-bold text-blue-600">
                    {company.jobs}
                  </span>{" "}
                  currently open
                </p>

              </div>

              <Link
                href="/jobs"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 group-hover:gap-3 transition-all"
              >
                View Jobs →
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}