import React, { Component } from "react";
import { Link } from "react-router";
class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      excursions: []
    };
  }
  //
  // componentDidMount() {
  //   fetch("/api/v1/")
  //
  //   .then(response => {
  //     if(response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage =`${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw error;
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(podcast => {
  //     this.setState({})
  //   })
  // })
  // .catch(error => console.log(`Error in fetch: ${error.message}`));
}
