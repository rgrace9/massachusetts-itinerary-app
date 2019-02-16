import React, { Component } from "react";
import { Link } from "react-router";
import EventEditTile from "../components/EventEditTile";
import EventShowTile from "../components/EventShowTile";

class EventShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: this.props.event,
      editing: false
    };

    this.editEvent = this.editEvent.bind(this);
    this.notEditEvent = this.notEditEvent.bind(this);
  }

  editEvent() {
    this.setState({
      editing: true
    });
  }

  notEditEvent() {
    this.setState({
      editing: false
    });
  }

  updateEvent(newInfo) {
    this.setState({
      event: newInfo,
      editing: false
    });
  }

  onClickDelete = () => {
    this.props.onClickDelete(this.props.event.id);
  };

  render() {
    let tile = <EventShowTile event={this.props.event} />;

    if (this.state.editing) {
      tile = (
        <EventEditTile
          event={this.props.event}
          updateEventList={this.props.handleEventTimeUpdate}
          notEditEvent={this.notEditEvent}
        />
      );
    }

    return (
      <div className="event-tile">
        <div>{tile}</div>
        <button className="button button-signup" onClick={this.editEvent}>
          Edit
        </button>
        <button className="button button-signup" onClick={this.onClickDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default EventShowContainer;
