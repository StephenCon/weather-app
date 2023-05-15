import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="App">
      <SearchBar setWeather={setWeather} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
