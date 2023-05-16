import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleSearch = (city) => {
    this.setState({ city });
  }

  render() {
    return (
      <div className="App d-flex justify-content-center align-items-center vh-100">
        <div className="content text-center w-25 h-25 p-4 rounded">
          <SearchBar onSearch={this.handleSearch} />
          <WeatherContainer city={this.state.city} />
        </div>
      </div>
    );
  }
}

export default App;
