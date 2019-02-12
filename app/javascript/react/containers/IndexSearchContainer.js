import React, { Component } from "react";
import { Link } from "react-router";
import CategoryField from "../components/CategoryField";
import LocationField from "../components/LocationField";
import ResultsContainer from "./ResultsContainer";

class IndexSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      query: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.yelpSearch = this.yelpSearch.bind(this);
  }

  yelpSearch(payload) {
    fetch(`/api/v1/queries`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(yelpExcursions => {
        this.setState({ businesses: yelpExcursions.data });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let payload = {
      query: this.state.query,
      location: this.state.location
    };
    this.yelpSearch(payload);
    this.handleClear();
  }

  handleClear() {
    this.setState({
      query: "",
      location: ""
    });
  }

  render() {
    return (
      <div>
        <h2 className="region-index-heading">Search</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Location"
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          />
          <input
            placeholder="Enter Category"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            name="query"
          />
          <input type="submit" className="button button-red" />
        </form>
        <ResultsContainer results={this.state.businesses} />
      </div>
    );
  }
}

export default IndexSearchContainer;
