"use client";

import { useState } from "react";
import Link from "next/link";
import Select from "./ui/CustomSelect";

export default function VehicleSearchForm({ makes }) {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }));

  const makeOptions = makes.map((make) => ({
    value: String(make.MakeId),
    label: make.MakeName,
  }));

  const isNextEnabled = selectedMake && selectedYear;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800 mb-6 sm:mb-8">Find Your Vehicle</h2>

      <form className="grid gap-4 sm:gap-6 md:grid-cols-2" role="form">
        <Select
          id="make"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          label="Vehicle Make"
          options={makeOptions}
          placeholder="Select Vehicle"
          required={true}
        />

        <Select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          label="Model Year"
          options={years}
          placeholder="Select Year"
          required={true}
        />
      </form>

      <div className="mt-6 sm:mt-8 flex justify-end">
        <Link
          href={isNextEnabled ? `/result/${selectedMake}/${selectedYear}` : "#"}
          className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-colors ${
            isNextEnabled
              ? "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-none"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => !isNextEnabled}
          aria-disabled={!isNextEnabled}
          role="button"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
