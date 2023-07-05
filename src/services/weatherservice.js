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
      temperature: Math.floor(data.main.temp),
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

    // The forecast data is in the 'list' field of the response
    const forecastList = data.list;

    // We'll store the daily forecasts in this array
    const dailyForecasts = [];

    // Loop over each forecast in the list
    for (let i = 0; i < forecastList.length; i += 8) { // Increment by 8 because there are 8 timestamps per day
      const forecast = forecastList[i];
      // We'll just keep the date, temperature and weather icon for each day
      dailyForecasts.push({
        date: forecast.dt_txt.split(' ')[0], // The date is the first part of the dt_txt field
        temperature: Math.floor(forecast.main.temp),
        icon: forecast.weather[0].icon,
      });
    }

    return dailyForecasts;
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to fetch forecast data. Please try again.');
  }
};
