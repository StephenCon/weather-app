// Importing necessary libraries
import React from 'react';

// Defining a functional component, WeatherDisplay, that takes two props: 'city' and 'temperature'
const WeatherDisplay = ({ city, temperature }) => {
  // The component returns a div which conditionally renders the city name and temperature
  return (
    <div>
      {/* Conditional rendering: this block will only render if 'city' is not null or undefined */}
      {city && (
        <div className='p-4'>
          {/* The name of the city is rendered within an h3 tag */}
          <h3>Weather in {city}</h3>
          {/* The temperature is rendered within an h3 tag, followed by a '°C' sign */}
          <h3>{temperature}°C</h3>
        </div>
      )}
    </div>
  );
}

// Exporting the WeatherDisplay component so it can be imported and used in other components
export default WeatherDisplay;
