export default function Header() {
    return (
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" role="navigation">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-emerald-700">
              Vehicle Search
            </h1>
          </div>
        </nav>
      </header>
    );
  }