"use client";

export default function ErrorPage({ error }) {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-emerald-50 to-emerald-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oops! Something went wrong</h2>

        <p className="text-gray-600 mb-6">
          {error.message || "An unexpected error occurred while loading the vehicles."}
        </p>
      </div>
    </div>
  );
}
