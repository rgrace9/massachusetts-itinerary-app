import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker,
  GoogleMap
} from "react-google-maps";
import MapMarkers from "./MapMarkers";

const GoogleMapMassachusetts = withGoogleMap(props => {
  console.log(props);
  return (
    <GoogleMap ref={props.onMapLoad} defaultZoom={13} center={props.center}>
      {props.children}
    </GoogleMap>
  );
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedMarker: null
    };
  }

  render() {
    let latitude = this.props.latitude;
    let longitude = this.props.longitude;
    return (
      <div>
        <GoogleMapMassachusetts
          containerElement={<div style={{ height: `600px`, width: "600px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: latitude, lng: longitude }}
        >
          {this.props.excursions.map(excursion => {
            return (
              <Marker
                key={excursion.id}
                position={{
                  lat: excursion.latitude,
                  lng: excursion.longitude
                }}
              >
                <InfoWindow>
                  <div
                    style={{
                      backgroundColor: `white`,
                      opacity: 0.75,
                      padding: `5px`
                    }}
                  >
                    <p style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                      {excursion.name}
                    </p>
                  </div>
                </InfoWindow>
              </Marker>
            );
          })}
        </GoogleMapMassachusetts>
      </div>
    );
  }
}
export default Map;

// <GoogleMap
//   ref={props.onMapLoad}
//   defaultCenter={{ lat: 42.361145, lng: -71.057083 }}
//   defaultZoom={13}
//     >
// {props.children}
// </GoogleMap>
