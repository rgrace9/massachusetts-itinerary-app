import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionFormContainer from "./ExcursionFormContainer";

class CityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      events: []
    };
    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/cities/${this.props.params.id}/excursions`)
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
      .then(businesses => {
        this.setState({
          businesses: businesses["data"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
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
    let businesses = this.state.businesses.map((business, index) => {
      return (
        <div>
          <ExcursionFormContainer
            key={business.business_id}
            id={index + 1}
            business={business}
            addEvent={this.addEvent}
          />
        </div>
      );
    });

    return <div>{businesses}</div>;
  }
}

export default CityShowContainer;
