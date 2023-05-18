// Importing necessary libraries and components
import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import { fetchWeather } from "../../services/weatherservice";

// Defining a class-based component, FetchWeather, that extends the base React Component class
class FeathWeather extends React.Component {
  // Constructor method for the WeatherContainer component
  constructor(props) {
    super(props);
    // Initializing the component's state with an empty temperature
    this.state = {
      temperature: "",
    };
  }

  // Method called automatically by React whenever a component's props or state changes
  componentDidUpdate(prevProps) {
    // If the city prop has changed
    if (this.props.city !== prevProps.city) {
      // Fetch the weather for the new city
      this.fetchWeather();
    }
  }

  // Method to fetch the weather for a given city
  fetchWeather = () => {
    // Calling the fetchWeather function imported from the weatherservice module
    fetchWeather(this.props.city)
      // When the promise resolves, updating the component's state with the new temperature
      .then((data) => {
        this.setState({
          temperature: data.temperature,
        });
      });
  };

  // Render method to define what the WeatherContainer component should render
  render() {
    // Render the WeatherDisplay component, passing it the current city and temperature as props
    return (
      <WeatherDisplay
        city={this.props.city}
        temperature={this.state.temperature}
      />
    );
  }
}

// Exporting the WeatherContainer component so it can be imported and used in other components
export default FeathWeather;
