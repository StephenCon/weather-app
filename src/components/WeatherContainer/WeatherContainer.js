import React from 'react';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import { fetchWeather } from '../../services/weatherservice';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchWeather();
    }
  }

  fetchWeather = () => {
    fetchWeather(this.props.city)
      .then(data => {
        this.setState({
          temperature: data.temperature
        });
      });
  }

  render() {
    return <WeatherDisplay city={this.props.city} temperature={this.state.temperature} />;
  }
}

export default WeatherContainer;
