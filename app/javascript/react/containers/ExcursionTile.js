import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionShowContainer from "./ExcursionShowContainer"


class ExcursionTile extends Component {
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
    console.log(this.props.itineraries)
    return (
      <div>
        <div className="panel">
          <div>
              <Link to={{ pathname: `/excursions/${this.props.id}`, state: { business: this.props.business}, itineraries: { itineraries: this.props.itineraries }, component: {ExcursionShowContainer} }}>
                <h2 className="heading">{this.props.business.name}</h2>
              </Link>
              <img
                className="excursion-image"
                src={this.props.business.image}
                width="400px"
                height="400px"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default ExcursionTile;
