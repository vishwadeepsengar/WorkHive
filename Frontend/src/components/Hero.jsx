export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6"
    >
      <div className="max-w-3xl text-center pt-32 md:pt-40">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          Transform Your Workplace with <span className="text-blue-600">WorkHive</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A smart internal platform for managing events, boosting productivity,
          and connecting employees in a vibrant digital workspace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
