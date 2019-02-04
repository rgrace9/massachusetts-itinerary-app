// `https://api.yelp.com/v3/businesses/search?term=${category}%location=${location}`
import React, { Component } from "react";
import { Link } from "react-router";
// const yelpAPI = `${process.env.YELP_API_KEY}`;
// console.log(yelpAPI);
class ExcursionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }
  // componentDidMount() {
  //   fetch(
  //     `https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${yelpAPI}`
  //       }
  //     }
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       this.setState({});
  //     })
  //     .catch(error => console.log(`Error in fetch: ${error.message}`));
  // }

  render() {
    return (
      <div>
        <h1>Excursions Container</h1>
        <p />
      </div>
    );
  }
}

export default ExcursionsContainer;
