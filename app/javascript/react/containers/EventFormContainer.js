import React, { Component } from "react";
import { Link } from "react-router";
import ItineraryField from "../components/ItineraryField";
import DateField from "../components/DateField";
import DayField from "../components/DayField";
import DurationField from "../components/DurationField";

class EventFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      day: "",
      itinerary: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      business_info: this.props.business,
      duration: this.state.duration,
      day: this.state.day,
      itinerary: this.state.itinerary
    };
    this.props.addEvent(formPayload);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="small-6 columns panel">
        <form>
              <ItineraryField
                label="Select an Itinerary"
                name="itinerary"
                content={this.state.itinerary}
                itineraries={this.props.itineraries}
                handleChange={this.handleChange}
              />
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
                <input type="submit" value="Add to Itinerary" className="button button-red"/>
              </form>
      </div>
    );
  }
}

export default EventFormContainer;
