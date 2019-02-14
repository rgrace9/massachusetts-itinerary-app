import React, { Component } from "react";
import { Link } from "react-router";
import EventEditTile from "../components/EventEditTile";
import EventShowTile from "../components/EventShowTile";

class EventShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <EventShowTile event={this.props.event} />
        </div>
        <input className="button button-signup" type="submit" value="Edit" />
        <input className="button button-signup" type="submit" value="Delete" />
      </div>
    );
  }
}

export default EventShowContainer;
