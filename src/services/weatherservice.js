// Constant for the API key to be used in the fetch request
const API_KEY = 'f023d6d413541c55d2f6cbcb018522e8'; // Replace with your API key

// Function to fetch weather data for a given city
export const fetchWeather = async (city) => {
  // Construct the URL for the API request
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  // Make the fetch request to the API URL
  try {
    const response = await fetch(API_URL);
    // If the response is not ok (i.e., if the status is not a 2xx status), throw an error
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      temperature: data.main.temp,
      city: data.name
    };
  } catch (error) {
    // If there is an error at any point in the process, log the error and alert the user
    console.error('Error:', error);
    alert('Failed to fetch weather data. Please try again.');
  }
}
