// import React, { Component } from 'react';
// import { Link } from 'react-router';
// class Region ShowContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       region: {},
//       excursions: []
//     }
//   }
//
//   componentDidMount() {
//     fetch(
//       `https://api.yelp.com/v3/businesses/search?term=${category}%location=${location}`), {
//       headers: {
//         Authorization: `Bearer ${yelpAPI}`
//       }
//     .then(response => {
//       if(response.ok) {
//         return response;
//       } else {
//         let errorMessage =`${response.status} (${response.statusText})`,
//         error = new Error(errorMessage);
//         throw error;
//       }
//     })
//     .then(response => response.json())
//     .then(podcast => {
//       this.setState({})
//     })
//   })
//   .catch(error => console.log(`Error in fetch: ${error.message}`));
//
//
// }
