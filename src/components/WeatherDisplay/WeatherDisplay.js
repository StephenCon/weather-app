// Import the React library.
import React from 'react';

// The WeatherDisplay functional component.
// This component takes in two props: 'city' and 'temperature'.
const WeatherDisplay = ({ city, temperature }) => {
  
  // The formatCity function.
  // This function takes in a string, splits it on the comma, trims white spaces, 
  // and converts the second part to uppercase. 
  // It then joins these parts back together with a comma and returns the resulting string.
  const formatCity = (str) => {
    const parts = str.split(','); // Split the string on the comma
    const formattedParts = [parts[0].trim(), parts[1].trim().toUpperCase()]; // Trim white spaces from the parts and convert the second part to uppercase
    return formattedParts.join(', '); // Join the parts back together with a comma and return
  };

  // The component returns a 'div' element.
  return (
    <div>
      {/* If 'city' is not null or undefined, render another 'div' element. */}
      {city && (
        <div className='p-4'>
          {/* Render an 'h3' element with the formatted city name. */}
          <h3>{formatCity(city)}:</h3>
          {/* Render an 'h1' element with the temperature. */}
          <h1>{temperature}°C</h1>
        </div>
      )}
    </div>
  );
}

// Export the WeatherDisplay component as the default export.
export default WeatherDisplay;
