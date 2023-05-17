// Importing the necessary libraries
import React from 'react';

// WeatherDisplay is a functional component that takes two props: 'city' and 'temperature'
const WeatherDisplay = ({ city, temperature }) => {
  // This function capitalizes the first character of the string and makes the rest of the string lowercase
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  // The component renders a div which conditionally displays the city name and temperature
  return (
    <div>
      {/* Conditional rendering: the following block will only render if 'city' is truthy (not null, undefined, or an empty string) */}
      {city && (
        <div className='p-4'>
          {/* The capitalized city name is displayed within an h3 tag */}
          <h3>The weather in {capitalize(city)} is</h3>
          {/* The temperature is displayed within an h1 tag, followed by the '°C' sign */}
          <h1>{temperature}°C</h1>
        </div>
      )}
    </div>
  );
}

// The WeatherDisplay component is exported so that it can be imported and used in other components
export default WeatherDisplay;
