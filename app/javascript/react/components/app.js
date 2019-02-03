import React from "react";
import { Router, browserHistory, Route, IndexRoute } from "react-router";
export const App = props => {
  return <Router history={browserHistory} />;
};

export default App;
