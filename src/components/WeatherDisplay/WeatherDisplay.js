import React from 'react';

class WeatherDisplay extends React.Component {
  render() {
    // Check if temperature and city props are not provided
    if (!this.props.temperature && !this.props.city) {
      return <div className="text-center">Enter a city to see the weather</div>;
    }

    // Render weather information if temperature and city props are provided
    return (
      <div className="WeatherDisplay">
        <h2 className="text-center">The current temperature in {this.props.city} is {this.props.temperature}°C</h2>
      </div>
    );
  }
}

export default WeatherDisplay;
