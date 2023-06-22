// Import necessary libraries and components
import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import { fetchWeather } from "../../services/weatherservice";

// Create a class component named FetchWeather
class FetchWeather extends React.Component {
  // Define the constructor method, initializing state with temperature and error properties
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      error: null, // Initialize error as null, this will store any potential error message
    };
  }

  // Use the componentDidUpdate lifecycle method to update the component when props change
  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({ error: null }); // Reset the error state when a new city is searched
      this.fetchWeather(); // Call fetchWeather function whenever city prop changes
    }
  }

  // Define the method fetchWeather to get the temperature data for a given city
  fetchWeather = () => {
    fetchWeather(this.props.city) // Use fetchWeather function imported from weatherservice module
      .then((data) => {
        // On successful fetch, set the temperature state to the received data and reset error state
        this.setState({
          temperature: data.temperature,
          error: null,
        });
      })
      .catch((error) => { // Catch any errors occurred during fetching
        console.error(error);
        // In case of error, reset temperature and set error state with an error message
        this.setState({
          temperature: "",
          error: "Failed to fetch weather data. Please try again with a valid city name.",
        });
      });
  };

  // Define the render method for the component
  render() {
    return (
      <div>
        {/* Render the WeatherDisplay component, passing it the current city and temperature as props */}
        <WeatherDisplay
          city={this.props.city}
          temperature={this.state.temperature}
        />
        {/* Conditionally render an error message if there's an error */}
        {this.state.error && <div className="error-message">{this.state.error}</div>}
      </div>
    );
  }
}

// Export the FetchWeather component so it can be used in other components
export default FetchWeather;
