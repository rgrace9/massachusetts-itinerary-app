import React from "react";
import ExcursionsContainer from "../containers/ExcursionsContainer";

const ExcursionForm = props => (
  <div className="user-form">
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="business" placeholder="Business..." />
      <button>Find Excursions</button>
    </form>
    <div>
      <ExcursionsContainer />
    </div>
  </div>
);

export default ExcursionForm;
