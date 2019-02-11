import React, { Component } from "react";
import { Link } from "react-router";
import ExcursionShowContainer from "./ExcursionShowContainer";


class ExcursionTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      day: "",
      itinerary: ""
    };

  }
  render() {

    return (
      <div>
        <div className="panel">
          <div>
              <Link to={`/excursions/${this.props.id}`}>
                <h2 className="heading">{this.props.business.name}</h2>
              <img
                className="excursion-image"
                src={this.props.business.image}
              />
              </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default ExcursionTile;
