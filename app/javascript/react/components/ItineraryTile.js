import React from "react";
import { Link } from "react-router";

const ItineraryTile = props => {
  return (
    <div className="review-tile">
      <Link
        to={`/users/${props.itinerary.user_id}/itineraries/${
          props.itinerary.id
        }`}
      >
        <p>Name: {props.itinerary.name}</p>
      </Link>
    </div>
  );
};

export default ItineraryTile;
