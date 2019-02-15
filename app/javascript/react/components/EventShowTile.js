import React from "react";
import moment from "moment";

const EventShowTile = props => {
  let timeString = props.event.time;
  let inputTime = moment(timeString);
  let time = inputTime.format("h:mm a");
  let dateString = props.event.day;
  let inputDay = moment(dateString);
  let day = inputDay.format("LL");

  return (
    <div className="review-tile">
      <a href={props.event.business.url} target="_blank">
        <h2>{props.event.business.name}</h2>
      </a>
      <h3>{props.event.business.display_address}</h3>
      <h4>{day}</h4>
      <h4>Time: {time}</h4>
    </div>
  );
};

export default EventShowTile;
