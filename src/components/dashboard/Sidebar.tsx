"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: "👤",
  },
  {
    name: "Browse Jobs",
    href: "/jobs",
    icon: "💼",
  },
  {
    name: "Saved Jobs",
    href: "/saved-jobs",
    icon: "❤️",
  },
  {
    name: "Applications",
    href: "/applications",
    icon: "📄",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col bg-slate-900 text-white">

      {/* Logo */}

      <div className="border-b border-slate-800 p-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold">
            J
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Jobseon
            </h1>

            <p className="text-sm text-slate-400">
              Career Dashboard
            </p>

          </div>

        </div>

      </div>

      {/* User */}

      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
            K
          </div>

          <div>

            <h3 className="font-semibold">
              Koteswararao
            </h3>

            <p className="text-sm text-slate-400">
              Software Engineer
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-4 py-6">

        <div className="space-y-2">

          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-lg transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-2xl">
                  {item.icon}
                </span>

                {item.name}
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Bottom */}

      <div className="border-t border-slate-800 p-6">

        <button className="w-full rounded-2xl bg-red-500 py-3 font-semibold transition hover:bg-red-600">
          Logout
        </button>

      </div>

    </aside>
  );
}