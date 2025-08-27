export async function GetAPI(
  url: string
) {
  try {

    const response = await fetch(url);

    if (!response.ok) {
      console.log("API request failed with url ======= O.o =======> ",url," ======= O.o =======> ",response.status,response.statusText);
      return null;
    }

    const data = await response.json();
    if (!data.success) {
      console.log("API response is empty ======= O.o =======> ", url);
      return null;
    } else {
      return data.data;
    }
  } catch (error) {
    console.log("Error fetching messages from API ======= O.o =======> ", error);
    return null;
  }
}