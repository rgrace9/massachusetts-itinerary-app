import React from "react";

const DateField = props => {
  return (
    <label>
      {props.label}
      <input
        name={props.name}
        type="date"
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
};

export default DateField;
