type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
};

export default function JobCard({
  title,
  company,
  location,
  salary,
}: JobCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-600">
        {company} • {location}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        {salary}
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
        View Details
      </button>
    </div>
  );
}