const API_KEY = 'f023d6d413541c55d2f6cbcb018522e8';

export const fetchWeather = async (city) => {
  const encodedCity = encodeURIComponent(city);
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      temperature: parseFloat(data.main.temp).toFixed(1), // format temperature
      city: data.name,
    };
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to fetch weather data. Please try again.');
  }
};

export const fetchForecast = async (city) => {
  const encodedCity = encodeURIComponent(city);
  const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const forecastList = data.list;
    const dailyForecasts = [];

    for (let i = 0; i < forecastList.length; i += 8) {
      const forecast = forecastList[i];
      dailyForecasts.push({
        date: forecast.dt_txt.split(' ')[0],
        temperature: parseFloat(forecast.main.temp).toFixed(1), // format temperature
        icon: forecast.weather[0].icon,
      });
    }

    return dailyForecasts;
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to fetch forecast data. Please try again.');
  }
};