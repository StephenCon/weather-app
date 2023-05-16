import React from 'react';
const google = window.google;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
    this.state = { term: '' };
  }

  componentDidMount() {
    this.searchAutocomplete = new google.maps.places.Autocomplete(this.searchInputRef.current);

    this.searchAutocomplete.addListener('place_changed', () => {
      const place = this.searchAutocomplete.getPlace();
      this.setState({ term: place.name });
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.onFormSubmit} className="input-group mb-3">
          <input 
            ref={this.searchInputRef}
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder="Enter city name..."
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
