import React from "react";

const ItineraryNameField = props => {
  return (
    <input
      placeholder={props.label}
      name={props.name}
      type="text"
      value={props.content}
      onChange={props.handleChange}
    />
  );
};

export default ItineraryNameField;
