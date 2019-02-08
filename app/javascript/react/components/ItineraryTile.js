import React from "react";
import { Link } from "react-router";

const ItineraryTile = props => {
  return (
    <div className="review-tile">
      <p>Name: {props.itinerary.name}</p>
    </div>
  );
};

export default ItineraryTile;
