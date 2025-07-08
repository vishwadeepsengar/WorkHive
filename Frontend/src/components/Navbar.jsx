export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600 tracking-tight">WorkHive</div>
        <nav className="hidden md:flex gap-6">
          {["Home", "Features", "About", "Get Started"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

