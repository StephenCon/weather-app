// Import the necessary hooks and components from react, axios, and react-bootstrap
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

// Define a functional component named IconDisplay
function IconDisplay({ city }) {
  // Initialize state variables using the useState hook for loading status, weather data, and error
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Define the API key for the OpenWeatherMap API
  const apiKey = "f023d6d413541c55d2f6cbcb018522e8";

  // Use the useEffect hook to perform side effects (in this case, the fetch operation) when the city prop changes
  useEffect(() => {
    // Before each fetch operation, set loading to true and error to null
    setLoading(true);
    setError(null);

    // If a city has been provided, make the API request
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((response) => {
          // On successful fetch, set loading to false and set the weather state with the received data
          setLoading(false);
          setWeather(response.data.weather[0].icon);
        })
        .catch((error) => {
          // If the fetch operation fails, set loading to false and set error state with the received error message
          setLoading(false);
          setError(error.message);
        });
    } else {
      // If no city is provided, we are not loading, so set loading to false
      setLoading(false);
    }
  }, [city]);

  // Display a spinner while loading
  if (loading) {
    return <Spinner animation="border" />;
  }

  // If there's an error, display it using the Alert component
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  // If the weather data is available, display the weather icon
  return (
    weather && (
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather}.png`}
        alt="Weather Icon"
      />
    )
  );
}

// Export the IconDisplay component as the default export
export default IconDisplay;
