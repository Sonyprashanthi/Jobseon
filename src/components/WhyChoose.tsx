const features = [
  {
    icon: "⚡",
    title: "Fast Job Search",
    description:
      "Find thousands of jobs instantly using our intelligent search engine.",
  },
  {
    icon: "🛡️",
    title: "Verified Companies",
    description:
      "Every employer is verified to ensure safe and trusted hiring.",
  },
  {
    icon: "🎯",
    title: "Smart Recommendations",
    description:
      "Receive personalized job recommendations based on your profile.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    description:
      "Track your applications and discover opportunities to grow your career.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
            Why Choose Jobseon
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            We help job seekers and employers connect faster than ever.
          </p>

        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}