import React from "react";
import Titles from "./Titles";
import ExcursionForm from "./ExcursionForm";
import ExcursionTile from "./ExcursionTile";
import CityShowContainer from "../containers/CityShowContainer";

import { Router, browserHistory, Route, IndexRoute } from "react-router";
export const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/excursions" component={ExcursionForm} />
      <Route path="/cities/:id" component={CityShowContainer} />
    </Router>
  );
};

export default App;

// return (
//   <div className="user-form">
//     <div>
//       <h1>Hi</h1>
//       <Titles />
//       <ExcursionForm />
//       <ExcursionTile />
//     </div>
//   </div>
