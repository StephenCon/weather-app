// Importing necessary libraries and components
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './SearchBar.css';

// Defining a SearchBar component that extends the base React Component class
class SearchBar extends React.Component {
  // Constructor method for the SearchBar component
  constructor(props) {
    super(props);
    // Initializing the component's state with an empty term
    this.state = { term: '' };
  }

  // Method to handle changes in the search bar input
  handleChange = (term) => {
    // Update the term in the component's state to reflect the current input value
    this.setState({ term });
  };

  // Method to handle the selection of an address from the autocomplete dropdown
  handleSelect = (term) => {
    // Geocode the selected address
    geocodeByAddress(term)
      // Extract the latitude and longitude from the first result returned by the geocoder
      .then(results => getLatLng(results[0]))
      // Log the latitude and longitude to the console
      .then(latLng => console.log('Success', latLng))
      // Log any errors that occur during the geocoding process
      .catch(error => console.error('Error', error));

    // Call the onSearch method passed in as a prop, passing it the selected address
    this.props.onSearch(term);
  };

  // Render method to define what the SearchBar component should render
  render() {
    // Return the JSX to be rendered
    return (
      <div className="SearchBar">
        <div className="autocomplete-container">
          <PlacesAutocomplete
            value={this.state.term} // Set the value of the input field to the current term in the component's state
            onChange={this.handleChange} // Call the handleChange method when the input value changes
            onSelect={this.handleSelect} // Call the handleSelect method when an address is selected
          >
            {/* Render function that returns JSX for the autocomplete dropdown */}
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="autocomplete-dropdown-container">
                  {/* Display a loading message while suggestions are being fetched */}
                  {loading && <div>Loading...</div>}
                  {/* Map over the array of suggestions */}
                  {suggestions.map(suggestion => {
                    // Determine the CSS class for the suggestion item based on whether it is the currently active suggestion
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // Determine the CSS styles for the suggestion item based on whether it is the currently active suggestion
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      // Render a suggestion item
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        {/* Display the description of the suggestion */}
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
                <input
                  {...getInputProps({
                    // Set the placeholder text for the input field
                    placeholder: 'Enter city name...',
                    // Set the CSS class for the input field
                    className: 'form-control',
                  })}
                />
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    );
  }
}

// Export the SearchBar component so it can be imported and used in other components
export default SearchBar;
