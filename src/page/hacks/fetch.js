// API
const API_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:ps_gsbYP/test_nicolas_api';
export async function fetchDataAsync() {
  try {
    const response = await fetch(API_URL);
    if (!response) {
      throw new Error('Response is not okay');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
