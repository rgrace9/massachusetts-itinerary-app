import React from "react";

const TimeField = props => {
  return (
    <label>
      {props.label}
      <input
        name={props.name}
        type="time"
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
};

export default TimeField;
