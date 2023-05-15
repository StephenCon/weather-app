import React from 'react';

class WeatherDisplay extends React.Component {
  render() {
    if (!this.props.temperature && !this.props.city) {
      return <div className="text-center">Enter a city to see the weather</div>;
    }

    return (
      <div className="WeatherDisplay">
        <h1 className="text-center">The current temperature in {this.props.city} is {this.props.temperature}°C</h1>
      </div>
    );
  }
}

export default WeatherDisplay;
