export async function GetPelaktAPI(
  slug: string,
  locale: string,
  apiFolder: "product" | "products"
) {

  if (apiFolder === "product") {
    try {
      // Use the correct API base URL
      const baseUrl = process.env.API_PUBLIC_BASE_URL || "https://api-pelak.liara.run";
      const url = `${baseUrl}/api/${apiFolder}s/page/${locale}/${slug}`;

      console.log("Fetching from URL:", url);

      const response = await fetch(url);

      if (!response.ok) {
        console.log(
          `API request failed with status: ${response.status} ${response.statusText} for ID: ${slug}`
        );
        return null;
      }

      const data = await response.json();
      if (!data.success) {
        console.log(`API response is empty for ID: ${slug}`);
        return null;
      } else {
        return data.data;
      }
    } catch (error) {
      console.log("Error fetching messages from API:", error);
      return null;
    }
  }
  if (apiFolder === "products") {
    try {
      // Use the correct API base URL
      const baseUrl = process.env.API_PUBLIC_BASE_URL || "https://api-pelak.liara.run";
      const url = `${baseUrl}/api/${apiFolder}/category/${slug}?language=${locale}`;

      console.log("Fetching from URL:", url);

      const response = await fetch(url);

      if (!response.ok) {
        console.log(
          `API request failed with status: ${response.status} ${response.statusText} for ID: ${slug}`
        );
        return null;
      }

      const data = await response.json();
      if (!data.success) {
        console.log(`API response is empty for ID: ${slug}`);
        return null;
      } else {
        return data.data;
      }
    } catch (error) {
      console.log("Error fetching messages from API:", error);
      return null;
    }
  }
}