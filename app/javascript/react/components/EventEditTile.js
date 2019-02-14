import React, { Component } from "react";
import { Link } from "react-router";
import TimeField from "../components/TimeField";
import DayField from "../components/DayField";
import moment from "moment";

class EventEditTile extends Component {
  constructor(props) {
    let timeString = props.event.time;
    let inputTime = moment(timeString);
    let time = inputTime.format("h:mm a");
    let dateString = props.event.day;
    let inputDay = moment(dateString);
    let day = inputDay.format("LL");

    super(props);
    this.state = {
      time: time,
      day: day
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
      business_info: this.props.event.business,
      time: this.state.time,
      day: this.state.day
    };
    fetch(`/api/v1/events/${this.props.event.id}`, {
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
      <div className="review-tile">
        <a href={this.props.event.business.url} target="_blank">
          <h2>{this.props.event.business.name}</h2>
        </a>
        <h3>Address: {this.props.event.business.display_address}</h3>
        <form className="small-6" onSubmit={this.handleUpdate}>
          <DayField
            content={this.state.date}
            label="Day"
            name="day"
            handleChange={this.handleChange}
          />
          <TimeField
            content={this.state.time}
            label="time"
            name="time"
            handleChange={this.handleChange}
          />

          <input type="submit" value="Update" className="button button-red" />
        </form>
      </div>
    );
  }
}

export default EventEditTile;
