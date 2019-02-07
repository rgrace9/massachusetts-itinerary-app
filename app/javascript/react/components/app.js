import React from "react";
import CityShowContainer from "../containers/CityShowContainer";

import { Router, browserHistory, Route, IndexRoute } from "react-router";
export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/cities/:id" component={CityShowContainer} />
    </Router>
  );
};

export default App;
