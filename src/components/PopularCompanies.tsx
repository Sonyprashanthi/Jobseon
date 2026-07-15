const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
];

export default function PopularCompanies() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900">
          Popular Companies
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {companies.map((company) => (
            <button
              key={company}
              className="w-40 rounded-2xl border border-gray-300 bg-white py-4 text-lg font-medium shadow-sm transition hover:shadow-md"
            >
              {company}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}