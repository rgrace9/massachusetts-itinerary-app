import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionTile from "./ExcursionTile";
import ExcursionShowContainer from "./ExcursionShowContainer";
import SearchContainer from "./SearchContainer";
import Map from "../components/Map"
class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      businesses: [],
      events: [],
      itineraries: [],
      latitude: 42.361145,
      longitude: -71.057083
    };
    this.yelpSearch = this.yelpSearch.bind(this);
    this.addEvent = this.addEvent.bind(this);

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

  yelpSearch(payload){
    fetch(`/api/v1/cities/${this.props.params.id}/excursions`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(payload),
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
    .then(yelpExcursions => {
      this.setState({ businesses: yelpExcursions.data });
    })
    .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    fetch(`/api/v1/cities/${this.props.params.id}/businesses`)
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
          itineraries: businesses["itineraries"],
          longitude: businesses["data"][0].longitude,
          latitude: businesses["data"][0].latitude
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }



  render() {

    let businesses = this.state.businesses.map((business, index) => {
      return (
          <ExcursionTile key={business.business_id}
            id={index + 1}
            business={business}
            itineraries={this.state.itineraries}
            addEvent = {this.addEvent}
          />
      );
    });

    return (
    <div className="row" style={{marginTop: "50px"}}>
      <div className="column small-6 left scroll">
        <div>
        {businesses}</div>
      </div>
      <div className="column small-6 ">

      <div>
        <SearchContainer yelpSearch={this.yelpSearch}/>
      </div>

      <div>
        <Map
        excursions={this.state.businesses}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
        />
      </div>



      </div>
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
