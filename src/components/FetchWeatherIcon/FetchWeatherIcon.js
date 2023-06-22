// FetchWeatherIcon.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayWeatherIcon from '../DisplayWeatherIcon/DisplayWeatherIcon';

function FetchWeatherIcon({ city }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "f023d6d413541c55d2f6cbcb018522e8";

  useEffect(() => {
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
      setLoading(false);
    }
  }, [city]);

  return <DisplayWeatherIcon loading={loading} weather={weather} error={error} />;
}

export default FetchWeatherIcon;
