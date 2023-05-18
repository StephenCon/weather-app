import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import FetchWeather from './components/FetchWeather/FetchWeather';
import DefaultWeather from './components/DefaultWeatherHandler/DefaultWeatherHandler';
import './App.css';
import IconDisplay from './components/IconDisplay/IconDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    // The state stores the city name
    this.state = {
      city: ""
    };
  }

  // This method updates the state when the location is determined
  handleLocationDetermined = (city) => {
    this.setState({ city });
  }

  // This method updates the state when a city is searched
  handleSearch = (city) => {
    this.setState({ city });
  }

  // Rendering the application's main components
  render() {
    return (
      <div className="App d-flex justify-content-center align-items-center vh-100 vw-100">
        <div className="content text-center w-25 h-50 p-4 rounded">
          {/* SearchBar allows users to search for a city */}
          <SearchBar onSearch={this.handleSearch} />
          {/* FetchWeather displays the weather for the current city in the state */}
          <FetchWeather city={this.state.city} />
        </div>
        {/* DefaultWeather determines the default location when the application starts */}
        <DefaultWeather onLocationDetermined={this.handleLocationDetermined} />
      </div>
    );
  }
}

export default App;
