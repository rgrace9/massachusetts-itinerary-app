import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionTile from "./ExcursionTile";
import ExcursionShowContainer from "./ExcursionShowContainer";
import Map from "../components/Map"
class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      businesses: [],
      events: [],
      itineraries: []
    };
    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/cities/${this.props.params.id}/excursions`)
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
      .then(businesses => {
        this.setState({
          businesses: businesses["data"],
          itineraries: businesses["itineraries"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  addEvent(formPayload) {
    fetch("/api/v1/events", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
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
      .then(newEvent => {
        let currentEvents = this.state.events;
        this.setState({ events: currentEvents.concat(newEvent) });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state.itineraries)
    let userItineraries = this.state.itineraries.map((itinerary, index) => {
      return(
        <option key={index} value={itinerary.id}>{itinerary.name}</option>
      )
    })
    let businesses = this.state.businesses.map((business, index) => {
      return (
        <div key={business.business_id}>
          <ExcursionTile
            id={index + 1}
            itineraries={userItineraries}
            business={business}
            addEvent={this.addEvent}
          />

        </div>
      );
    });

    return (
    <div>
      <div className="column small-6 left grid-container rows">
        <div className="excursion-tile-wrapper">
        {businesses}</div>
      </div>
      <div className="google-map column small-6 right"><Map /></div>

    </div>
  )

  }
}

export default CityShowContainer;




// <ExcursionShowContainer
//   id={index + 1}
//   itineraries={userItineraries}
//   business={business}
// />
