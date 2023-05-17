import React from 'react';

const WeatherDisplay = ({ city, temperature }) => {
  // Create a function to transform the first character to uppercase and remaining to lowercase
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <div>
      {city && (
        <div className='p-4'>
          {/* Call the capitalize function when rendering the city name */}
          <h3>The weather in {capitalize(city)} is</h3>
          <h1>{temperature}°C</h1>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
