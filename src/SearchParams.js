import React from "react";

class SearchParams extends React.Component {
  // Default search params
  state = {
    location: "Brooklyn, NY",
    animal: "",
    breed: ""
  };
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
      </div>
    );
  }
}

export default SearchParams;
