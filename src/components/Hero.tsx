import Image from "next/image";
import SearchBar from "./SearchBar";

const stats = [
  {
    icon: "💼",
    number: "10K+",
    title: "Active Jobs",
    subtitle: "New jobs every day",
  },
  {
    icon: "🏢",
    number: "2K+",
    title: "Top Companies",
    subtitle: "Leading employers hiring",
  },
  {
    icon: "👥",
    number: "50K+",
    title: "Job Seekers",
    subtitle: "Finding success daily",
  },
  {
    icon: "🚀",
    number: "98%",
    title: "Success Rate",
    subtitle: "Candidates get hired",
  },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium">
              ⭐ Find Opportunities, Build Your Future
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Find Your
              <br />
              <span className="text-blue-600">Dream Job</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 max-w-xl">
              Search thousands of jobs from LinkedIn, Indeed,
              Glassdoor and more. Your next opportunity is only
              a search away.
            </p>

            {/* Search */}
            <div className="mt-10">
              <SearchBar />
            </div>

            {/* Popular Searches */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="font-semibold text-gray-700">
                Popular Searches:
              </span>

              {[
                "Software Engineer",
                "Data Analyst",
                "UI/UX Designer",
                "Product Manager",
              ].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-blue-600 hover:underline"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end lg:pl-10">
            <Image
              src="/images/hero.png"
              alt="Job Search Illustration"
              width={420}
              height={360}
              priority
              className="max-w-[420px] w-full h-auto"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 bg-white rounded-3xl shadow-xl p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.title} className="text-center">
                <div className="text-4xl">{stat.icon}</div>

                <h2 className="mt-4 text-4xl font-bold text-blue-600">
                  {stat.number}
                </h2>

                <p className="mt-2 text-lg font-semibold text-gray-800">
                  {stat.title}
                </p>

                <p className="text-gray-500 mt-1">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
 
);
}