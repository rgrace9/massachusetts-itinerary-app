import React from "react";
import { Link } from "react-router";

const ItineraryTile = props => {
  return (
    <div
      className="itinerary-tile panel row centered"
      style={{ width: "500px" }}
    >
      <Link
        to={`/users/${props.itinerary.user_id}/itineraries/${
          props.itinerary.id
        }`}
      >
        <h3 className="itinerary-heading">{props.itinerary.name}</h3>
      </Link>
    </div>
  );
};

export default ItineraryTile;
