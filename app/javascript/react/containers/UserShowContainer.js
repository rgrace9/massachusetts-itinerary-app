import React, { Component } from "react";
import { Link } from "react-router";
import ItineraryFormContainer from "./ItineraryFormContainer";
import ItineraryTile from "../components/ItineraryTile";

class UserShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      itineraries: []
    };
    this.addNewItinerary = this.addNewItinerary.bind(this);
  }
  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
      .then(user => {
        this.setState({
          firstName: user["user"]["first_name"],
          lastName: user["user"]["last_name"],
          email: user["user"]["email"],
          image: user["user"]["profile_photo"]["url"],
          itineraries: user["user"]["itineraries"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  addNewItinerary(formPayload) {
    fetch("/api/v1/itineraries", {
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

      .then(newItinerary => {
        let currentItinerary = this.state.itineraries;
        this.setState({
          itineraries: currentItinerary.concat(newItinerary)
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  render() {
    let itineraries = this.state.itineraries.map(itinerary => {
      return <ItineraryTile key={itinerary.id} itinerary={itinerary} />;
    });
    return (
      <div className="show-container row">
        <div className="column small-6">
          <h2 className="user-show-text">
            {this.state.firstName} {this.state.lastName}
          </h2>
          <div className="profile-img">
            <img src={this.state.image} />
          </div>
        </div>

        <div className="column small-6">
          <div>
            <ItineraryFormContainer addNewItinerary={this.addNewItinerary} />
          </div>
          <div className="user-itineraries">{itineraries}</div>
        </div>

      </div>
    );
  }
}

export default UserShowContainer;
