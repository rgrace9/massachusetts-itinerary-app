import React from "react";
import { Link } from "react-router";

const EventTile = props => {
  return (
    <div className="review-tile">
      <h2>{props.event.business.name}</h2>
      <h3>Address: {props.event.business.display_address}</h3>
      <h4>Day: {props.event.day}</h4>
      <h4>Duration: {props.event.duration}</h4>
      <a href={props.event.business.url} target="_blank">
        Website
      </a>
    </div>
  );
};

export default EventTile;
