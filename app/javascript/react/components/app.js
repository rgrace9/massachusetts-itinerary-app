import React from "react";
import CityShowContainer from "../containers/CityShowContainer";
import UserShowContainer from "../containers/UserShowContainer";
import ExcursionShowContainer from "../containers/ExcursionShowContainer";
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
        path="/users/:id/itineraries/:id"
        component={ItineraryShowContainer}
      />
      <Route path="/excursions/:id" component={ExcursionShowContainer} />
    </Router>
  );
};

export default App;

// <Route path="/cities/:city_id/excursions/:id" component={ExcursionShowContainer}/>
