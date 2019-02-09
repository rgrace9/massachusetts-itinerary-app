import React from "react";
import CityShowContainer from "../containers/CityShowContainer";
import UserShowContainer from "../containers/UserShowContainer";
import ExcursionShowContainer from "../containers/ExcursionShowContainer";


import { Router, browserHistory, Route, IndexRoute } from "react-router";
export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/cities/:id" component={CityShowContainer}/>
      <Route path="/users/:id" component={UserShowContainer} />
      <Route path="/excursions/:id" component={ExcursionShowContainer}/>
    </Router>
  );
};

export default App;
