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
      <div className="App vh-100 vw-100">
        <div className="d-flex justify-content-center align-items-center h-50">
          <div className="content text-center w-25 h-50 p-4 rounded">
            {/* SearchBar allows users to search for a city, the 'onSearch' prop is set to the 'handleSearch' method */}
            <SearchBar onSearch={this.handleSearch} />
            {/* FetchWeather displays the weather for the current city in the state. The 'city' prop is set to the 'city' in the state */}
            <FetchWeather city={this.state.city} />
            {/* IconDisplay displays the weather icon for the current city in the state. The 'city' prop is set to the 'city' in the state */}
            <IconDisplay city={this.state.city} />
          </div>
          {/* DefaultLocation determines the default location when the application starts. The 'onLocationDetermined' prop is set to the 'handleLocationDetermined' method */}
          <DefaultLocation onLocationDetermined={this.handleLocationDetermined} />
        </div>
        <div className="d-flex justify-content-center align-items-center p-5">
          <ForecastGrid />
        </div>
      </div>
    );
  }
}

// Export the App component for use in other parts of your application
export default App;
