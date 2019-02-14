import React, { Component } from "react";
import ItineraryNameField from "../components/ItineraryNameField";

class ItineraryFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.name
    };
    this.props.addNewItinerary(formPayload);
    this.handleClear();
  }

  handleClear() {
    this.setState({
      name: ""
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="user-show center">
        <h2>Create a New Itinerary</h2>
        <form onSubmit={this.handleSubmit}>
          <ItineraryNameField
            content={this.state.name}
            label="Itinerary Name"
            name="name"
            handleChange={this.handleChange}
          />
          <input type="submit" value="Submit" className="button button-red" />
        </form>
      </div>
    );
  }
}

export default ItineraryFormContainer;
