export default function FeaturedCategories() {
  const categories = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "UI/UX Designer",
    "Cyber Security",
  ];

  return (
    <section className="mt-24">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Featured Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-lg border bg-white px-6 py-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}