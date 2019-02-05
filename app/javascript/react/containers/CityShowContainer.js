import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionTile from "../components/ExcursionTile";
class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }
  componentDidMount() {
    fetch(`/api/v1/excursions`)
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
        this.setState({ businesses: businesses["data"] });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  render() {
    let businesses = this.state.businesses.map((business, index) => {
      return <ExcursionTile key={index} id={index} business={business} />;
    });

    return <div>{businesses}</div>;
  }
}

export default CityShowContainer;
