import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link
          href="/"
          className="text-4xl font-extrabold text-blue-600"
        >
          Jobseon
        </Link>

        <div className="hidden md:flex items-center gap-10 text-lg font-medium">
          <Link
            href="/"
            className="text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/jobs"
            className="hover:text-blue-600 transition"
          >
            Jobs
          </Link>

          <Link
            href="/companies"
            className="hover:text-blue-600 transition"
          >
            Companies
          </Link>

          <Link
            href="/saved-jobs"
            className="hover:text-blue-600 transition"
          >
            Saved Jobs
          </Link>

          <Link
            href="/login"
            className="hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}