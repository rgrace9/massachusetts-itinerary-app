import React, { Component } from "react";
import { Link } from "react-router";
import DurationField from "../components/DurationField";
import DayField from "../components/DayField";

class EventEditTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      day: ""
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleUpdate(event) {
    event.preventDefault();
    let formPayload = {
      business_info: this.props.business,
      duration: this.state.duration,
      day: this.state.day
    };
    fetch(`/api/v1/events/${this.props.eventId}`, {
      credentials: "same-origin",
      method: "PATCH",
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
      <div className="columns">
        <div className="panel">
          <h2 className="heading">{this.props.business.name}</h2>
          <img src={this.props.business.image} />
          <form onSubmit={this.handleUpdate}>
            <div className="small-6">
              <DayField
                content={this.state.date}
                label="Day"
                name="day"
                handleChange={this.handleChange}
              />
              <DurationField
                content={this.state.time}
                label="Duration"
                name="duration"
                handleChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Update" className="button button-red" />
          </form>
        </div>
      </div>
    );
  }
}

export default EventEditTile;
