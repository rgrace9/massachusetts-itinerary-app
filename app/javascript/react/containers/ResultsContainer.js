import React, { Component } from "react";
import { Link } from "react-router";
import ItineraryField from "../components/ItineraryField";
import DurationField from "../components/DurationField";
import DayField from "../components/DayField";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    let itinerary = "";
    if (this.props.itineraries.length > 0) {
      itinerary = this.props.itineraries[0].id;
    }
    this.state = {
      duration: "",
      day: "",
      itinerary: itinerary
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
  render() {
    return (
      <div className="columns">
        <div className="panel">
          <h2 className="heading">{this.props.business.name}</h2>
          <img src={this.props.business.image} />
          <form onSubmit={this.handleSubmit}>
            <ItineraryField
              label="Select an Itinerary"
              name="itinerary"
              content={this.state.itinerary}
              itineraries={this.props.itineraries}
              handleChange={this.handleChange}
            />
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
            <input
              type="submit"
              value="Add to Itinerary"
              className="button button-red"
            />
          </form>
          <p className="yelp-link">
            <a href={this.props.business.url} target="_blank">
              Click Here to Learn More
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default ResultsContainer;
