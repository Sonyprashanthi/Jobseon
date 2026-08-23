import Link from "next/link";

const categories = [
  {
    icon: "💻",
    title: "Software Engineer",
    jobs: "2,345 Jobs",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "📊",
    title: "Data Scientist",
    jobs: "1,827 Jobs",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: "📦",
    title: "Product Manager",
    jobs: "943 Jobs",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: "⚙️",
    title: "DevOps Engineer",
    jobs: "784 Jobs",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: "🎨",
    title: "UI/UX Designer",
    jobs: "635 Jobs",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: "🔐",
    title: "Cyber Security",
    jobs: "542 Jobs",
    color: "bg-red-100 text-red-600",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Explore Careers
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Featured Categories
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Find opportunities across the most in-demand careers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${category.color}`}
              >
                {category.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {category.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {category.jobs} Available
              </p>

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