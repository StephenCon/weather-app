// Constant for the API key to be used in the fetch request
const API_KEY = 'f023d6d413541c55d2f6cbcb018522e8'; // Replace with your API key

// Function to fetch weather data for a given city
export const fetchWeather = (city) => {
  // Construct the URL for the API request
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  // Make the fetch request to the API URL
  return fetch(API_URL)
    .then(response => {
      // If the response is not ok (i.e., if the status is not a 2xx status), throw an error
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // If the response is ok, parse the response body as JSON
      return response.json();
    })
    .then(data => {
      // From the parsed JSON, extract the temperature and city name and return them in an object
      return {
        temperature: data.main.temp,
        city: data.name
      };
    })
    .catch((error) => {
      // If there is an error at any point in the process, log the error and alert the user
      console.error('Error:', error);
      alert('Failed to fetch weather data. Please try again.');
    });
}
