const stats = [
  {
    title: "Applied Jobs",
    value: "12",
    icon: "📄",
    color: "bg-blue-100 text-blue-600",
    growth: "+3 this week",
  },
  {
    title: "Saved Jobs",
    value: "5",
    icon: "❤️",
    color: "bg-red-100 text-red-600",
    growth: "+2 today",
  },
  {
    title: "Interviews",
    value: "2",
    icon: "🎯",
    color: "bg-green-100 text-green-600",
    growth: "Next Tomorrow",
  },
  {
    title: "Profile Views",
    value: "24",
    icon: "👀",
    color: "bg-yellow-100 text-yellow-600",
    growth: "+18%",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${item.color}`}
          >
            {item.icon}
          </div>

          <div className="mt-6">
            <h2 className="text-4xl font-bold text-slate-900">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-600">
              {item.title}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                ↑ {item.growth}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}