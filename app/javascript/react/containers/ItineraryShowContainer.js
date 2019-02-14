import React, { Component } from "react";
import { Link } from "react-router";
import EventShowContainer from "./EventShowContainer";

class ItineraryShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      events: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/itineraries/${this.props.params.id}`)
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
      .then(itinerary => {
        this.setState({
          name: itinerary["itinerary"]["name"],
          events: itinerary["itinerary"]["events"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  render() {
    let events = this.state.events.map((event, index) => {
      return <EventShowContainer key={index} event={event} />;
    });

    return (
      <div>
        <h1 className="region-show">{this.state.name}</h1>
        <div className="events-container">{events}</div>
      </div>
    );
  }
}

export default ItineraryShowContainer;