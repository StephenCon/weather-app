// DisplayWeatherIcon.js
import React from "react";
import { Spinner, Alert } from "react-bootstrap";

function DisplayWeatherIcon({ loading, weather, error }) {
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
        src={`http://openweathermap.org/img/wn/${weather}@2x.png`}
        alt="Weather Icon"
      />
    )
  );
}

export default DisplayWeatherIcon;
