import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Jobseon
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>

        <Link href="/jobs">Jobs</Link>

        <Link href="/saved-jobs">
          Saved Jobs
        </Link>

        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}