// Import necessary modules and components
import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CityDisplay from "./components/CityDisplay/CityDisplay";
import DefaultLocation from "./components/DefaultLocationHandler/DefaultLocationHandler";
import FetchWeatherIcon from "./components/FetchWeatherIcon/FetchWeatherIcon";
import ForecastGrid from "./components/ForecastGrid/ForecastGrid";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

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
        <div className="container-fluid">
          <NavigationBar />
          <div className="row">
            <div className="maincard d-flex flex-column justify-content-center align-items-center text-center shadow">
              {/* Component that handles default location determination */}
              <DefaultLocation onLocationDetermined={this.handleLocationDetermined} />
              {/* Component for searching a city */}
              <SearchBar onSearch={this.handleSearch} />
              {/* Component that fetches weather data */}
              <CityDisplay city={this.state.city} />
              {/* Component that fetches and displays weather icons */}
              <FetchWeatherIcon city={this.state.city} />
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column text-center">
              {/* Component that displays forecast grid */}
              <ForecastGrid city={this.state.city} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// Export the App component for use in other parts of your application
export default App;
