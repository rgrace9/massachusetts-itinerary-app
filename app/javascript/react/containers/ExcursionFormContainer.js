import React, { Component } from "react";
import { Link } from "react-router";
import ItineraryField from "../components/ItineraryField";
import DateField from "../components/DateField";
import DayField from "../components/DayField";
import DurationField from "../components/DurationField";

// import ExcursionTile from "../components/ExcursionTile";

class ExcursionFormContainer extends Component {
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
      <div>
        <div className="excursion-tile-wrapper small-6 columns panel">
          <div className="excursion-tile">
            <form onSubmit={this.handleSubmit}>
              <Link to={`/excursions/${this.props.id}`}>
                <h1>{this.props.business.name}</h1>
              </Link>
              <img
                className="excursion-image"
                src={this.props.business.image}
                width="400px"
                height="400px"
              />
              <div className="small-6 columns panel">
                <ItineraryField
                  label="Select an Itinerary"
                  name="itinerary"
                  handleChange={this.handleChange}
                />
                <DayField
                  content={this.state.date}
                  label="Day"
                  name="day"
                  handleChange={this.handleChange}
                />
                <div className="row small-2-columns">
                  <DurationField
                    content={this.state.time}
                    label="Duration"
                    name="duration"
                    handleChange={this.handleChange}
                  />
                  <input type="submit" value="Add to Itinerary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExcursionFormContainer;
