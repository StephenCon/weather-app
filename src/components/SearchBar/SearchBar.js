// Import the necessary libraries and components
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./SearchBar.css";

// Define a class component called SearchBar
class SearchBar extends React.Component {
  // Define a constructor that accepts props and passes them to the parent class
  constructor(props) {
    super(props);
    // Initialize the state with a term property set to an empty string
    this.state = { term: "" };
  }

  // Define a method to handle changes in the input field
  // This method updates the state with the current input value
  handleChange = (term) => {
    this.setState({ term });
  };

  // Define a method to handle the selection of an address from the autocomplete dropdown
  handleSelect = (term) => {
    // Split the term by the "-" or "," character and take the first part
    const cityName = term.split(/[-,]/)[0].trim();
    // Geocode the selected address to get its coordinates
    geocodeByAddress(term)
      .then((results) => getLatLng(results[0])) // Extract the latitude and longitude from the geocoding result
      .then((latLng) => console.log("Success", latLng)) // Log the latitude and longitude to the console
      .catch((error) => console.error("Error", error)); // Log any errors that occurred during geocoding

    // Call the onSearch method passed as a prop to this component with the selected address
    this.props.onSearch(cityName);
  };

  // Define a render method to determine what the component should render
  render() {
    // Define search options to restrict the autocomplete suggestions to cities
    const searchOptions = {
      types: ["(cities)"],
    };

    // Return the JSX to be rendered by the component
    return (
      <div className="SearchBar">
        <div className="autocomplete-container">
          <PlacesAutocomplete
            value={this.state.term} // Set the value of the input field to the current term in the state
            onChange={this.handleChange} // Call the handleChange method when the input value changes
            onSelect={this.handleSelect} // Call the handleSelect method when an address is selected from the dropdown
            searchOptions={searchOptions} // Apply the search options to the autocomplete
          >
            {/* Define a render prop function to customize the rendering of the autocomplete dropdown */}
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <div className="autocomplete-dropdown-container">
                  {/* Display a loading message while suggestions are being fetched */}
                  {loading && <div>Loading...</div>}
                  {/* Map over the array of suggestions to render each one */}
                  {suggestions.map((suggestion) => {
                    // Determine the CSS class for the suggestion item based on whether it is currently active
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // Determine the CSS styles for the suggestion item based on whether it is currently active
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    // Render the suggestion item
                    return (
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
                {/* Render the input field with the appropriate props */}
                <input
                  {...getInputProps({
                    placeholder: "Enter city name...", // Set the placeholder for the input field
                    className: "form-control", // Set the CSS class for the input field
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

// Export the SearchBar component so it can be used in other files
export default SearchBar;
