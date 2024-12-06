const REVALIDATE_TIME = 3600;

export async function getMarks() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_NHTSA_API_URL, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return [];
    }

    const data = await response.json();

    return data.Results || [];
  } catch (error) {
    console.error("Failed to fetch marks:", error);
    return [];
  }
}

export async function getVehicles(makeId, year) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_NHTSA_MODELS_API_URL.replace("{makeId}", makeId).replace("{year}", year);

    const response = await fetch(baseUrl, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    return [];
  }
}
