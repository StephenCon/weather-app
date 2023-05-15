import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{Math.round(weather.main.temp - 273.15)}°C</p>
    </div>
  );
}

export default WeatherDisplay;
