import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

function IconDisplay({ city }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "f023d6d413541c55d2f6cbcb018522e8";

  useEffect(() => {
    // Set loading to true and error to null before each fetch
    setLoading(true);
    setError(null);

    if (city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((response) => {
          setLoading(false);
          setWeather(response.data.weather[0].icon);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    } else {
      // If there is no city, then we are not loading
      setLoading(false);
    }
  }, [city]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

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

export default IconDisplay;
