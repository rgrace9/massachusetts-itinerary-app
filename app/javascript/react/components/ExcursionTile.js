import React from "react";
import { Link } from "react-router";

const ExcursionTile = props => (
  <div>
    <Link to={`/excursions/${props.id}`}>
      <h1>{props.business.name}</h1>
    </Link>
    <img src={props.business.image} width="400" />
  </div>
);

export default ExcursionTile;
