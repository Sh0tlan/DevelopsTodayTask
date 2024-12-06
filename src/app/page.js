import VehicleSearchForm from "../components/VehicleSearchForm";
import Header from "@/components/Header";
import { getMarks } from "@/lib/api";

export default async function Home() {
  const makes = await getMarks();

  if (!makes.length) {
    throw new Error("Unable to load vehicle makes");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" role="main">
        <VehicleSearchForm makes={makes} />
      </main>
    </div>
  );
}
