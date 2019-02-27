import React, { Component } from "react";
import { Link } from "react-router";

class ItineraryTile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickDelete = () => {
    this.props.onClickDelete(this.props.itinerary.id);
  };

  render() {
    return (
      <div
        className="itinerary-tile panel row centered"
        style={{ width: "500px" }}
      >
        <Link
          to={`/users/${this.props.itinerary.user_id}/itineraries/${
            this.props.itinerary.id
          }`}
        >
          <h3 className="itinerary-heading">{this.props.itinerary.name}</h3>
        </Link>
        <button className="button button-signup" onClick={this.onClickDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default ItineraryTile;
