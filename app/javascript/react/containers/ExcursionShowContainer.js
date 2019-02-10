import React, { Component } from "react";
import EventFormContainer from "./EventFormContainer";

class ExcursionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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

  render() {
    return (
      <div className="centered columns">
        <div className="row">
          <div className="large centered columns">
            <div className="excursion-show">
              <h1>{this.props.location.state.business.name}</h1>
              <h3>{this.props.location.state.business.display_address}</h3>
              <a href={this.props.location.state.business.url} target="_blank">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="large centered columns event-form">
            <EventFormContainer addEvent={this.addEvent}/>
          </div>
        </div>

      </div>
    );
  }
}

export default ExcursionShowContainer;
