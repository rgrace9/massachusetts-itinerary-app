import React, { Component } from "react";

class ExcursionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="large centered columns">
          <div className="excursion-show">
            <h1>{this.props.location.state.business.name}</h1>
            <h3>{this.props.location.state.business.display_address}</h3>
            <a href={this.props.location.state.business.url} target="_blank">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ExcursionShowContainer;
