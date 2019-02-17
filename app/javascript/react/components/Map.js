import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  Marker,
  GoogleMap
} from "react-google-maps";

const GoogleMapMassachusetts = withGoogleMap(props => {
  console.log(props);
  return (
    <GoogleMap ref={props.onMapLoad} defaultZoom={14} center={props.center}>
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
    let labels = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ];
    var labelIndex = 0;
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
                label={labels[labelIndex++ % labels.length]}
                title={excursion.name}
                position={{
                  lat: excursion.latitude,
                  lng: excursion.longitude
                }}
              />
            );
          })}
        </GoogleMapMassachusetts>
      </div>
    );
  }
}
export default Map;
