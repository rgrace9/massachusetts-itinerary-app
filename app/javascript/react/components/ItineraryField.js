import React from "react";

const ItineraryField = props => {
  return (
    <label>
      {props.label}

      <select onChange={props.handleChange} name={props.name}>
        {props.itineraries.map(itinerary => {
          return (
            <option key={itinerary.id} value={itinerary.id}>
              {itinerary.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default ItineraryField;
