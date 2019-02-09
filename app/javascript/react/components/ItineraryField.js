import React from "react";

const ItineraryField = props => {
  return (
    <label>
      {props.label}
      <select name="itinerary" onChange={props.handleChange}>
      {props.itineraries}
      </select>
    </label>
  );
};

export default ItineraryField;
