import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={YOUR_API_KEY}`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
