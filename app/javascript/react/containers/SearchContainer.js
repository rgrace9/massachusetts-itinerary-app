import React, { Component } from "react";
import { Link } from "react-router";
import CategoryField from "../components/CategoryField";
import LocationField from "../components/LocationField";

class SearchContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
      query: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault()
    let payload = {
      query: this.state.query,
      }
    this.props.yelpSearch(payload);
    this.handleClear();
    }

  handleClear() {
    this.setState({
      query: ""
    });
    }

  render(){
    return (
      <div>
      <h1>What are you interested in?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            name="query"
          />
          <input type="submit"/>
        </form>
      </div>
    )

  }

}

export default SearchContainer;
