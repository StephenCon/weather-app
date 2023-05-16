// weatherService.js
const API_KEY = 'f023d6d413541c55d2f6cbcb018522e8'; // Replace with your API key

export const fetchWeather = (city) => {
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return {
        temperature: data.main.temp,
        city: data.name
      };
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to fetch weather data. Please try again.');
    });
}
