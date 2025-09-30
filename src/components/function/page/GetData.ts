export async function GetData(
  url: string
) {
  try {

    const response = await fetch(url);

    if (!response.ok) {
      console.log("API request failed with url ======= O.o =======> ",url," ======= O.o =======> ",response.status,response.statusText);
      return null;
    }

    if (!response.ok) {
      console.log("API response is empty ======= O.o =======> ", url);
      return null;
    } else {
      return await response.json();
    }

  } catch (error) {
    console.log("Error fetching messages from API ======= O.o =======> ", error);
    return null;
  }
}