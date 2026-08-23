export default function Newsletter() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mt-5 text-xl text-blue-100">
          Get the latest job opportunities delivered to your inbox.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-xl px-6 py-4 text-lg outline-none md:w-96"
          />

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100">
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}