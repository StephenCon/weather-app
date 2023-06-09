// Import the React library.
import React from "react";

// The WeatherDisplay functional component.
// This component takes in two props: 'city' and 'temperature'.
const WeatherDisplay = ({ city, temperature }) => {
  // The formatCity function.
  // This function takes in a string, splits it on the comma, trims white spaces,
  // and converts the second part to uppercase.
  // It then joins these parts back together with a comma and returns the resulting string.
  const formatCity = (str) => {
    const parts = str.split(","); // Split on comma
    if (parts[1]) {
      // Check if the second part exists
      const formattedParts = [parts[0].trim(), parts[1].trim().toUpperCase()]; // Trim and uppercase second part
      return formattedParts.join(", "); // Join the parts back together with a comma
    } else {
      return parts[0].trim(); // If there's no second part, just return the first part
    }
  };

  // The component returns a 'div' element.
  return (
    <div>
      {/* If 'city' is not null or undefined, render another 'div' element. */}
      {city && (
        <div className="d-flex justify-content-center align-items-center p-5">
          {/* Render an 'h3' element with the formatted city name. */}
          <h3>{formatCity(city)}:</h3>
          {/* Render an 'h1' element with the temperature. */}
          <h1>{temperature}°C</h1>
        </div>
      )}
    </div>
  );
};

// Export the WeatherDisplay component as the default export.
export default WeatherDisplay;
