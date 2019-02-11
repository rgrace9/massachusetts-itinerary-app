import React from "react";

const LocationField = props => {
  return (
    <label>
      {props.label}

      <select onChange={props.handleChange}>
      {props.itineraries.map(itinerary => {
        return(
          <option key={itinerary.id} value={itinerary.id}>{itinerary.name}</option>
        )
      })}
      </select>
    </label>
  );
};



export default LocationField;
