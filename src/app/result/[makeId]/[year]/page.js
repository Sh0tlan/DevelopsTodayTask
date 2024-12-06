import { getMarks, getVehicles } from "@/lib/api";
import VehicleResults from "@/components/VehicleResults";

export async function generateStaticParams() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => String(currentYear - i));

  try {
    const marks = await getMarks();

    if (!marks?.length) {
      console.warn("No marks received");
      return [];
    }
    const validMarks = marks.filter((mark) => mark?.MakeId !== undefined);
    const paths = [];

    for (const mark of validMarks) {
      for (const year of years) {
        paths.push({
          makeId: String(mark.MakeId),
          year,
        });
      }
    }
    return paths;
  } catch (error) {
    console.error("Generation failed:", error);
    throw error;
  }
}

export default async function Page({ params }) {
  const { makeId, year } = await params;
  const vehicles = await getVehicles(makeId, year);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      {vehicles && vehicles.length > 0 ? (
        <VehicleResults vehicles={vehicles} year={year} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-black mb-2">No Vehicles Found</h2>
            <p className="text-black">
              We couldn't find any vehicles matching your search criteria for the year {year}.
            </p>
            <a
              href="/"
              className="mt-4 inline-block px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Try Another Search
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
