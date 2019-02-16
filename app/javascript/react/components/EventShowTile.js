import React from "react";
import moment from "moment";

const EventShowTile = props => {
  return (
    <div className="review-tile">
      <a href={props.event.business.url} target="_blank">
        <h2>{props.event.business.name}</h2>
      </a>
      <h3>{props.event.business.display_address}</h3>
      <h4>{props.event.start_event_day}</h4>
      <h4>{props.event.start_event_time}</h4>
    </div>
  );
};

export default EventShowTile;
