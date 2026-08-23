const testimonials = [
  {
    name: "John Smith",
    role: "Software Engineer",
    image: "👨‍💻",
    review:
      "Jobseon helped me land my dream job within two weeks. The experience was amazing!",
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer",
    image: "👩‍🎨",
    review:
      "The job recommendations were exactly what I was looking for. Highly recommended!",
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    image: "👨‍🔬",
    review:
      "A beautiful platform with verified companies and excellent opportunities.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-5xl font-extrabold">
            What Our Users Say
          </h2>

        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {testimonials.map((user) => (

            <div
              key={user.name}
              className="rounded-3xl border bg-white p-8 shadow-lg hover:shadow-2xl transition"
            >

              <div className="text-6xl">
                {user.image}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {user.name}
              </h3>

              <p className="text-blue-600">
                {user.role}
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                "{user.review}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}