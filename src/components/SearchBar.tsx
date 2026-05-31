export default function SearchBar() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <input
        type="text"
        placeholder="Job Title, Keywords"
        className="w-72 rounded-lg border border-gray-300 px-4 py-3 shadow-sm"
      />

      <input
        type="text"
        placeholder="Location"
        className="w-72 rounded-lg border border-gray-300 px-4 py-3 shadow-sm"
      />

      <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
        Search Jobs
      </button>
    </div>
  );
}