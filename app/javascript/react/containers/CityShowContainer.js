import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionTile from "../components/ExcursionTile";
class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      businesses: []
    };
  }
  componentDidMount() {

    fetch(`/api/v1/cities/${this.props.params.id}/excursions`)
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
      .then(businesses => {
        this.setState({
          name: businesses["data"][0]["city"],
          businesses: businesses["data"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  render() {
    let businesses = this.state.businesses.map((business, index) => {
      return (
        <ExcursionTile key={index + 1} id={index + 1} business={business} />
      );
    });

    return (
      <div>
      <div>
        <h1>{this.state.name}</h1>
      </div>
        <div>{businesses}</div>
      </div>
    );
  }
}

export default CityShowContainer;