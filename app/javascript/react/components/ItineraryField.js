import React from "react";

const ItineraryField = props => {
  return (
    <label>
      {props.label}
      <select name="itinerary" onChange={props.handleChange}>
        <option value="spring">Spring Break</option>
        <option value="winter">Winter Vacation</option>
        <option value="weekend">Memorial Weekend</option>
      </select>
    </label>
  );
};

export default ItineraryField;

// <select name={props.name} type="text" value={props.content} />;

// import React from "react";
//
// const ItineraryField = props => {
//   return (
//     <label>
//       {props.label}
//       <select name="itinerary" onChange={props.handleChange}>
//         <option value={props.id}>Spring Break</option>
//         <option value={props.id}>Winter Vacation</option>
//         <option value={props.id}>Memorial Weekend</option>
//       </select>
//     </label>
//   );
// };
//
// export default ItineraryField;
