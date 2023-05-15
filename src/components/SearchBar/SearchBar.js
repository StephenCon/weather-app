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
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
            placeholder="Enter city name..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
