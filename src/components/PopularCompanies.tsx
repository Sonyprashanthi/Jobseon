export default function PopularCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
  ];

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Popular Companies
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((company) => (
          <div
            key={company}
            className="rounded-lg border bg-white px-6 py-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}