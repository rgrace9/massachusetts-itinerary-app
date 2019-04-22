import React, { Component } from "react";
import { Link } from "react-router";
import CategoryField from "../components/CategoryField";
import LocationField from "../components/LocationField";
import Select from 'react-select'
import ResultsContainer from "./ResultsContainer";

const Option = Select.Option
class IndexSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      itineraries: [],
      query: "",
      location: "",
      locations: [],
      selectedOption: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.yelpSearch = this.yelpSearch.bind(this);
  }


  addEvent(formPayload) {
    fetch("/api/v1/events", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(newEvent => {
        let currentEvents = this.state.events;

        this.setState({ events: currentEvents.concat(newEvent) });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }

  yelpSearch(payload) {
    fetch(`/api/v1/queries`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(yelpExcursions => {
        this.setState({ businesses: yelpExcursions.data });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let payload = {
      query: this.state.query,
      location: this.state.selectedOption
    };
    this.yelpSearch(payload);
    this.handleClear();
  }

  handleClear() {
    this.setState({
      query: "",
      location: ""
    });
  }

  handleLocationChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  }

  componentDidMount() {
    fetch(`/api/v1/cities/1/businesses`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(businesses => {
        this.setState({
          itineraries: businesses["itineraries"]
        });
      })
      .catch(error => console.log(`Error in fetch: ${error.message}`));
      fetch(`/api/v1/locations`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      
      .then(response => response.json())
      .then(locations => {
        let locationsArray = locations.map(location => {
          let option = {}
          option['value'] = location.name
          option['label'] = location.name
          return option
        })
        this.setState({
          locations: locationsArray
        });
      })
  }




  render() {
    const { selectedOption } = this.state;

    let results = this.state.businesses.map((business, index) => {
    
      return (
        <ResultsContainer
          key={business.business_id}
          business={business}
          itineraries={this.state.itineraries}
          addEvent={this.addEvent}
        />
      );
    });
    return (
      <div className="columns 12-small">
        <div className="row">
          <div className="searchBox">
            <h2 className="region-index-heading">Search</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="small-6 columns">
         
              <Select
                placeholder="Location"
                options={this.state.locations}
                onChange={this.handleLocationChange}
                value={selectedOption}
              />
            
              </div>

              <div className="small-6 columns">
                <input
                  placeholder="Category"
                  type="text"
                  value={this.state.query}
                  onChange={this.handleChange}
                  name="query"
                />
                
              </div>
              <input type="submit" className="button button-red" />
            </form>
          </div>
        </div>
        <div className="columns centered">{results}</div>
      </div>
    );
  }
}

export default IndexSearchContainer;



{/* <input
placeholder="Location"
type="text"
value={this.state.location}
onChange={this.handleChange}
name="location"
/> */}