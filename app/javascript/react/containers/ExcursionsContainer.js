// import React, { Component } from "react";
// import { Link } from "react-router";
// const yelpAPI = `${process.env.YELP_API_KEY}`;
// class ExcursionsContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       businesses: []
//     };
//   }
//
//   //
//   // business(id){
//   // return this.send({
//   //   url: 'https://api.yelp.com/v3/businesses/{id}',
//   //   urlParams:{
//   //     id: id
//   //   },
//   //   bearerToken: this.apiKey
//   // });
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
// }
//
// export default ExcursionsContainer;
