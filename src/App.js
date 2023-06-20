// Import necessary modules and components
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import FetchWeather from "./components/FetchWeather/FetchWeather";
import DefaultLocation from "./components/DefaultLocationHandler/DefaultLocationHandler";
import IconDisplay from "./components/IconDisplay/IconDisplay";
import ForecastGrid from "./components/ForecastGrid/ForecastGrid";
import "./App.css";

// Main Application component
class App extends React.Component {
  // Constructor for the App component, initializes the state
  constructor(props) {
    super(props);
    // The state stores the city name
    this.state = {
      city: "",
    };
  }

  // This method updates the state when the location is determined by DefaultLocation component
  // It is triggered when the DefaultLocation component gets the location of the user
  handleLocationDetermined = (city) => {
    this.setState({ city });
  };

  // This method updates the state when a city is searched from the SearchBar
  // It is triggered when the user performs a search in the SearchBar component
  handleSearch = (city) => {
    this.setState({ city });
  };

  // Rendering the application's main components
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="maincard d-flex flex-column justify-content-center align-items-center text-center shadow p-4 m-4">
              <DefaultLocation onLocationDetermined={this.handleLocationDetermined} />
              <SearchBar onSearch={this.handleSearch} />
              <FetchWeather city={this.state.city} />
              <IconDisplay city={this.state.city} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="forecast-grid col d-flex flex-column justify-content-center align-items-center text-center">
              <ForecastGrid />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

// Export the App component for use in other parts of your application
export default App;
