// Importing necessary libraries and components
import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import './App.css';

// Defining a class-based component, App, that extends the base React Component class
class App extends React.Component {
  // Constructor method for the App component
  constructor(props) {
    super(props);
    // Initializing the component's state with an empty city
    this.state = {
      city: ""
    };
  }

  // Method to handle the search event from the SearchBar component
  handleSearch = (city) => {
    // Update the city in the component's state to the city entered in the SearchBar
    this.setState({ city });
  }

  // Render method to define what the App component should render
  render() {
    return (
      // JSX to be rendered by the App component
      <div className="App d-flex justify-content-center align-items-center vh-100">
        <div className="content text-center w-25 h-25 p-4 rounded">
          {/* Render the SearchBar component, passing it the handleSearch method as a prop */}
          <SearchBar onSearch={this.handleSearch} />
          {/* Render the WeatherContainer component, passing it the current city as a prop */}
          <WeatherContainer city={this.state.city} />
        </div>
      </div>
    );
  }
}

// Exporting the App component so it can be imported and used in other components
export default App;
