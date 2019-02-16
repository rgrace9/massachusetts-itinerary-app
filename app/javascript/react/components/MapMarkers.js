import React, { Component } from "react";
import { Link } from "react-router";

class MapMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedMarker: null
    };
  }

  onMarkerClick(business_id) {
    this.setState({ clickedMarker: business_id });
  }

  render() {
    let markers = this.props.excursions.map(excursion => {
      let onClick = () => {
        this.onMarkerClick(excursion.id);
      };
      return (
        <Marker
          key={excursion.business_id}
          title={excursion.name}
          position={{ lat: excursion.latitude, lng: excursion.longitude }}
          info={excursion}
        >
          {this.state.clickedMarker == excursion.id && (
            <InfoWindow>
              <div>
                <p>{excursion.name}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      );
    });
    return <div>{markers}</div>;
  }
}
