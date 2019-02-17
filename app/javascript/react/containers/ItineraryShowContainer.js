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
    this.onClickDelete = this.onClickDelete.bind(this);
    this.updateEventList = this.updateEventList.bind(this);
    this.handleEventTimeUpdate = this.handleEventTimeUpdate.bind(this);
  }

  onClickDelete(id) {
    console.log(id);
    fetch(`/api/v1/events/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    });
    let eventToDelete = this.state.events.find(
      deletedEvent => deletedEvent.id === id
    );
    let updatedItinerary = this.state.events.filter(
      item => item !== eventToDelete
    );
    this.setState({ events: updatedItinerary });
  }

  updateEventList() {
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

  handleEventTimeUpdate(payload) {
    fetch(`/api/v1/itineraries/${this.props.params.id}/events/${payload.id}`, {
      credentials: "same-origin",
      method: "PATCH",
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
      .then(body => {
        this.setState({ events: body.events });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.updateEventList();
  }

  render() {
    let events = this.state.events.map((event, index) => {
      return (
        <EventShowContainer
          key={index}
          event={event}
          onClickDelete={this.onClickDelete}
          handleEventTimeUpdate={this.handleEventTimeUpdate}
        />
      );
    });

    return (
      <div className="columns">
        <div className="row">
          <h1 className="region-show">{this.state.name}</h1>
        </div>
        <div className="row">
          <div className="columns centered">{events}</div>
        </div>
      </div>
    );
  }
}

export default ItineraryShowContainer;
