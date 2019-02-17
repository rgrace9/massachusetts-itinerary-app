import React, { Component } from "react";
import { Link } from "react-router";
import TimeField from "../components/TimeField";
import DayField from "../components/DayField";
import moment from "moment";

class EventEditTile extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      start_event_day: "",
      start_event_time: ""
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
      start_event_time: this.state.start_event_time,
      start_event_day: this.state.start_event_day,
      id: this.props.event.id
    };
    this.props.updateEventList(formPayload);
    this.props.notEditEvent();
  }

  render() {
    return (
      <div className="edit-tile centered">
        <a href={this.props.event.business.url} target="_blank">
          <h2>{this.props.event.business.name}</h2>
        </a>
        <h3>{this.props.event.business.display_address}</h3>
        <div className="small-6 centered">
          <form onSubmit={this.handleUpdate}>
            <DayField
              content={this.state.start_event_day}
              label="Day"
              name="start_event_day"
              handleChange={this.handleChange}
            />
            <TimeField
              content={this.state.start_event_time}
              label="Start Time"
              name="start_event_time"
              handleChange={this.handleChange}
            />

            <input type="submit" value="Update" className="button button-red" />
          </form>
        </div>
      </div>
    );
  }
}

export default EventEditTile;
