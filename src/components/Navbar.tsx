export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Jobseon
      </h1>

      <div className="space-x-6">
        <a href="/">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}