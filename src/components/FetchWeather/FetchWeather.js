import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import { fetchWeather } from "../../services/weatherservice";

class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      error: null, // add an error field to the state
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({ error: null }); // reset the error state when a new city is searched
      this.fetchWeather();
    }
  }

  fetchWeather = () => {
    fetchWeather(this.props.city)
      .then((data) => {
        this.setState({
          temperature: data.temperature,
          error: null, // set the error state to null when fetch is successful
        });
      })
      .catch((error) => { // handle fetch error
        console.error(error);
        this.setState({
          temperature: "",
          error: "Failed to fetch weather data. Please try again with a valid city name.",
        });
      });
  };

  render() {
    return (
      <div>
        <WeatherDisplay
          city={this.props.city}
          temperature={this.state.temperature}
        />
        {this.state.error && <div className="error-message">{this.state.error}</div>}
      </div>
    );
  }
}

export default FetchWeather;
