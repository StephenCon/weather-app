import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }; // Initializing the component state with an empty term
  }

  handleChange = (term) => {
    this.setState({ term }); // Update the term in the component state when the input value changes
  };

  handleSelect = (term) => {
    geocodeByAddress(term) // Geocode the selected address
      .then(results => getLatLng(results[0])) // Get the latitude and longitude from the geocoded results
      .then(latLng => console.log('Success', latLng)) // Log the latitude and longitude to the console
      .catch(error => console.error('Error', error)); // Log any errors that occur during geocoding
    this.setState({ term }); // Update the term in the component state with the selected address
    this.props.onSearch(term); // Call the onSearch function passed as a prop with the selected address
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="autocomplete-container">
          <PlacesAutocomplete
            value={this.state.term} // Set the value of the input field to the current term in the component state
            onChange={this.handleChange} // Handle changes in the input field
            onSelect={this.handleSelect} // Handle selection of an address from the autocomplete dropdown
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>} {/* Show a loading message while suggestions are being fetched */}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active' // Apply a CSS class to the active suggestion item
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' } // Apply a different background color to the active suggestion item
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span> {/* Display the suggestion description */}
                      </div>
                    );
                  })}
                </div>
                <input
                  {...getInputProps({
                    placeholder: 'Enter city name...', // Set the placeholder text for the input field
                    className: 'form-control',
                  })}
                />
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Search</button> {/* Render a search button */}
        </div>
      </div>
    );
  }
}

export default SearchBar;
