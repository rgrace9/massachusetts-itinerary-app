import React, { Component } from "react";
import { Link } from "react-router";
import ItineraryField from "../components/ItineraryField";
import TimeField from "../components/TimeField";
import DayField from "../components/DayField";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    let itinerary = "";
    if (this.props.itineraries.length > 0) {
      itinerary = this.props.itineraries[0].id;
    }
    this.state = {
      start_event_time: "",
      start_event_day: "",
      itinerary: itinerary,
      business: ''
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
      start_event_time: this.state.start_event_time,
      start_event_day: this.state.start_event_day,
      itinerary: this.state.itinerary
    };
    this.props.addEvent(formPayload);
  }

  handleBusinessSearch = () => {
    fetch(`https://api.yelp.com/v3/businesses/${this.props.business.business_id}`)
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
    .then(business => {
      debugger
      this.setState({
        business: business
      });
    })
    
  }
  render() {
    return (
      <div>
        <div className="result-tile panel">
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
                content={this.state.start_event_day}
                label="Day"
                name="start_event_day"
                handleChange={this.handleChange}
              />
              <TimeField
                content={this.state.start_event_time}
                label="Time"
                name="start_event_time"
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
          <input
              type="submit"
              value="Learn More Info"
              className="button button-red"
              onClick={this.handleBusinessSearch}
            />
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
