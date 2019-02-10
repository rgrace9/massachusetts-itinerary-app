import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker,
  GoogleMap
} from "react-google-maps";


const GoogleMapMassachusetts = withGoogleMap(props => {
  // debugger
  return(
  <GoogleMap
    ref={props.onMapLoad}
    defaultCenter={{ lat: 42.361145, lng: -71.057083 }}
    defaultZoom={13}
      >
  {props.children}
  </GoogleMap>
)
});

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {
    console.log(this.props.excursions)
    return (
      <div>
        <GoogleMapMassachusetts
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}

        >
        {this.props.excursions.map(excursion => {
          return(
            <Marker
            key={excursion.business_id}
            title={excursion.name}
            position={{ lat: excursion.latitude, lng: excursion.longitude }}
            />
          )
        })}
        </GoogleMapMassachusetts>
      </div>
    );
  }
}
export default Map;
