// Import the necessary modules from React, axios, and react-bootstrap.
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

// The IconDisplay functional component.
// This component takes in one prop: 'city'.
function IconDisplay({ city }) {
  // Declare state variables using the useState hook.
  // 'loading' is a boolean that tracks if the component is currently loading data.
  // 'weather' will hold the weather icon data once it's loaded.
  // 'error' will hold any error message that might occur during data loading.
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Define the API key for the OpenWeatherMap API.
  const apiKey = "f023d6d413541c55d2f6cbcb018522e8";

  // The useEffect hook runs after every render.
  // In this case, it runs whenever the 'city' prop changes.
  useEffect(() => {
    // If 'city' is not null or undefined, make a GET request to the OpenWeatherMap API.
    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((response) => {
          // If the GET request is successful, stop loading and set the 'weather' state variable to the received weather icon data.
          setLoading(false);
          setWeather(response.data.weather[0].icon);
        })
        .catch((error) => {
          // If the GET request fails, stop loading and set the 'error' state variable to the received error message.
          setLoading(false);
          setError(error.message);
        });
    }
  }, [city]);

  // If 'loading' is true, render a Spinner component.
  if (loading) {
    return <Spinner animation="border" />;
  }

  // If 'error' is not null or undefined, render an Alert component with the error message.
  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  // If 'weather' is not null or undefined, render an 'img' element with the source set to the URL of the weather icon.
  return (
    weather && (
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${weather}@2x.png`}
        alt="Weather Icon"
      />
    )
  );

}

// Export the IconDisplay component as the default export.
export default IconDisplay;
