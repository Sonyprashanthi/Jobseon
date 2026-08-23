import Link from "next/link";

const company = [
  "About Us",
  "Careers",
  "Contact",
  "Press",
];

const resources = [
  "Blog",
  "Help Center",
  "FAQs",
  "Community",
];

const products = [
  "Browse Jobs",
  "Companies",
  "Dashboard",
  "Saved Jobs",
];

const legal = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Security",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

        {/* Newsletter */}

<div className="max-w-7xl mx-auto px-6 pt-24">

  <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-indigo-600 p-12 shadow-2xl">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      <div>

        <h2 className="text-5xl font-bold text-white">
          Ready to Find Your Dream Job?
        </h2>

        <p className="mt-5 text-blue-100 text-lg">
          Join 50,000+ professionals discovering amazing career
          opportunities every day.
        </p>

      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-2xl px-6 py-4 text-lg text-gray-900 outline-none"
        />

        <button className="rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:scale-105 hover:bg-gray-100">
          Subscribe
        </button>

      </div>

    </div>

  </div>

</div>
      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-extrabold text-white">
              Job<span className="text-blue-500">seon</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400 max-w-md">
              Jobseon helps thousands of professionals connect with
              world-class companies and discover their dream careers.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              {["💼", "🐦", "📸", "💻"].map((icon) => (

                <div
                  key={icon}
                  className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center cursor-pointer transition hover:bg-blue-600 hover:-translate-y-1"
                >
                  <span className="text-xl">{icon}</span>
                </div>

              ))}

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Products
            </h3>

            <div className="space-y-4">

              {products.map((item) => (

                <Link
                  key={item}
                  href="/"
                  className="block hover:text-blue-400 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Company
            </h3>

            <div className="space-y-4">

              {company.map((item) => (

                <Link
                  key={item}
                  href="/"
                  className="block hover:text-blue-400 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Resources
            </h3>

            <div className="space-y-4">

              {resources.map((item) => (

                <Link
                  key={item}
                  href="/"
                  className="block hover:text-blue-400 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Jobseon. All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">

            {legal.map((item) => (

              <Link
                key={item}
                href="/"
                className="text-gray-500 hover:text-blue-400 transition"
              >
                {item}
              </Link>

            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}