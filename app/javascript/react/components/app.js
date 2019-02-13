import React from "react";
import CityShowContainer from "../containers/CityShowContainer";
import UserShowContainer from "../containers/UserShowContainer";
import IndexSearchContainer from "../containers/IndexSearchContainer";
import ItineraryShowContainer from "../containers/ItineraryShowContainer";

import { Router, browserHistory, Route, IndexRoute } from "react-router";
export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={IndexSearchContainer} />
      <Route path="/cities/:id" component={CityShowContainer} />
      <Route path="/users/:id" component={UserShowContainer} />
      <Route
        path="/users/:user_id/itineraries/:id"
        component={ItineraryShowContainer}
      />
    </Router>
  );
};

export default App;

// <Route path="/cities/:city_id/excursions/:id" component={ExcursionShowContainer}/>
