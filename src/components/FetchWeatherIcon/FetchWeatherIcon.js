import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayWeatherIcon from '../DisplayWeatherIcon/DisplayWeatherIcon';

function FetchWeatherIcon({ city, forecast }) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "f023d6d413541c55d2f6cbcb018522e8";

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchCurrentWeather = () => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
        .then((response) => {
          setWeather([response.data.weather[0].icon]);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const fetchForecastWeather = () => {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}`
        )
        .then((response) => {
          const forecastIcons = response.data.list.map(
            (item) => item.weather[0].icon
          );
          setWeather(forecastIcons);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    if (city) {
      if (forecast) {
        fetchForecastWeather();
      } else {
        fetchCurrentWeather();
      }
    }

    setLoading(false);
  }, [city, forecast]);

  return (
    <>
      {weather &&
        weather.map((icon, index) => (
          <DisplayWeatherIcon
            key={index}
            loading={loading}
            weather={icon}
            error={error}
          />
        ))}
    </>
  );
}

export default FetchWeatherIcon;
