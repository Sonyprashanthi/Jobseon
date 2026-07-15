const categories = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "DevOps Engineer",
  "UI/UX Designer",
  "Cyber Security",
];

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-5xl font-bold text-center">
        Featured Categories
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <button
            key={category}
            className="px-8 py-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}