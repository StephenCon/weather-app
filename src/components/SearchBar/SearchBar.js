import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
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
