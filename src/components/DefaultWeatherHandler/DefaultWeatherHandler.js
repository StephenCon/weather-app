import React from 'react';

// DefaultWeatherHandler is a component that fetches the current location on mount
class DefaultWeatherHandler extends React.Component {
  // componentDidMount is a lifecycle method that is called immediately after the component is mounted
  // Here it is used to get the current geolocation
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.handleLocation, this.handleError);
  }

  // handleError is a method that logs the error if there is a problem getting the geolocation
  handleError = (error) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  }

  // handleLocation is a method that is called with the geolocation position
  // It fetches the city name corresponding to the latitude and longitude from the Google Maps Geocoding API
  handleLocation = (position) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBjYtooRnfmPzySJih7f_rCNB2YJHmh17Q`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          // If the response status is OK, loop through the results
          for (let result of data.results) {
            // Loop through the address components of each result
            for (let component of result.address_components) {
              // If the component type includes 'locality', it means it's the city name
              if (component.types.includes('locality')) {
                // Call the onLocationDetermined prop with the city name
                this.props.onLocationDetermined(component.long_name);
                return;
              }
            }
          }
          // If no city is found in the geocoding results, log a warning
          console.warn('No city found in geocoding results.');
        } else {
          // If the response status is not OK, log a warning
          console.warn('Geocoding API returned status: ' + data.status);
        }
      })
      // If there is an error fetching from the Geocoding API, log the error
      .catch(error => console.error(error));
  }

  // render method returns null because this component does not render anything to the DOM
  // It's only purpose is to fetch the default location
  render() {
    return null;
  }
}

// Export the DefaultWeatherHandler component
export default DefaultWeatherHandler;
