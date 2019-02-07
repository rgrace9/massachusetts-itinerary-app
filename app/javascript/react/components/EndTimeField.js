import React from "react";

const EndTimeField = props => {
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

export default EndTimeField;
