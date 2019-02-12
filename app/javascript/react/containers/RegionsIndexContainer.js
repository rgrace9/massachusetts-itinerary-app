// import React, { Component } from "react";
// import RegionIndexTile from "../components/RegionIndexTile";
// import { Link } from "react-router";
//
// class RegionsIndexContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       regions: []
//     };
//   }
//
//   componentDidMount() {
//     fetch("/api/v1/regions")
//       .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           let errorMessage = `${response.status} (${response.statusText})`,
//             error = new Error(errorMessage);
//           throw error;
//         }
//       })
//       .then(response => {
//         let regions = response.json();
//         return regions;
//       })
//       .then(regions => {
//         this.setState({ regions: regions });
//       })
//       .catch(error => console.log(`Error in fetch: ${error.message}`));
//   }
//
//   render() {
//     let regions = this.state.regions.map(region => {
//       return (
//         <RegionIndexTile key={region.id} id={region.id} region={region} />
//       );
//     });
//
//     return (
//       <div>
//         {regions}
//       </div>
//     )
//   }
// }
//
// export default RegionsIndexContainer;
