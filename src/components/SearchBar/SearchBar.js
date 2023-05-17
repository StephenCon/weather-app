import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleChange = (term) => {
    this.setState({ term });
  };

  handleSelect = (term) => {
    geocodeByAddress(term)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));

    this.props.onSearch(term);
  };

  render() {
    // Here we define the search options for the PlacesAutocomplete.
    // We set types to ['(cities)'] to restrict the autocomplete to suggest only cities.
    const searchOptions = {
      types: ['(cities)']
    }

    return (
      <div className="SearchBar">
        <div className="autocomplete-container">
          <PlacesAutocomplete
            value={this.state.term}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            // Pass the searchOptions object to the searchOptions prop.
            // This will restrict the autocomplete to suggest only cities.
            searchOptions={searchOptions}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
                <input
                  {...getInputProps({
                    placeholder: 'Enter city name...',
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

export default SearchBar;
