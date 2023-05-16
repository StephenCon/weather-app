import React from 'react';

const WeatherDisplay = ({ city, temperature }) => {
  return (
    <div>
      {city && (
        <div className='p-4'>
          <h3>Weather in {city}</h3>
          <h3>{temperature}°C</h3>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
