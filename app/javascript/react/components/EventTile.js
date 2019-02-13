import React from "react";
import { Link } from "react-router";

const EventTile = props => {
  return (
    <div className="review-tile">
      <h1>EventTile</h1>
      <h2>{props.event.business.name}</h2>
    </div>
  );
};

export default EventTile;
