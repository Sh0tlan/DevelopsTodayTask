"use-client";

export default function VehicleResults({ vehicles, year }) {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-emerald-50 to-emerald-100">
      <h1 className="text-3xl font-semibold text-emerald-700 mb-8">
        Vehicle Models
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle, index) => (
          <div
            key={`${vehicle.Model_ID}-${vehicle.Model_Name}-${index}`}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 text-black">
              {vehicle.Model_Name}
            </h2>
            <p className="text-gray-600">Make: {vehicle.Make_Name}</p>
            <p className="text-gray-600">Year: {year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
