import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temperature: ""
    };
  }

  handleSearch = (city) => {
    const API_KEY = 'f023d6d413541c55d2f6cbcb018522e8'; // Replace with your API key
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          temperature: data.main.temp,
          city: data.name
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to fetch weather data. Please try again.');
      });
  }
  

  render() {
    return (
      <div className="App d-flex justify-content-center align-items-center vh-100">
        <div className="content text-center w-25 h-25 p-4 rounded">
          <SearchBar onSearch={this.handleSearch} />
          <WeatherDisplay city={this.state.city} temperature={this.state.temperature} />
        </div>
      </div>
    );
  }
}

export default App;
