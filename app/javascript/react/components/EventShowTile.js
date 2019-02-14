import React from "react";
import moment from "moment";

const EventShowTile = props => {
  let timeString = props.event.time;
  let inputTime = moment(timeString);
  let time = inputTime.utc().format("h:mm a");
  let dateString = props.event.day;
  let inputDay = moment(dateString);
  let day = inputDay.format("LL");

  return (
    <div className="review-tile">
      <h2>{props.event.business.name}</h2>
      <h3>Address: {props.event.business.display_address}</h3>
      <h4>Day: {day}</h4>
      <h4>Time: {time}</h4>
      <a href={props.event.business.url} target="_blank">
        Website
      </a>
    </div>
  );
};

export default EventShowTile;
