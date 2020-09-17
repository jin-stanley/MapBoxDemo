import React from "react";
import "./theme/main.scss";

import AppWrapper from "./components/AppWrapper";
import MapBox from "./components/MapBox";
import AnalyticsBoard from "./components/AnalyticsBoard";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/mapbox" />
          <AppWrapper>
            <Route path="/mapbox">
              <MapBox />
            </Route>
            <Route path="/analytics">
              <AnalyticsBoard />
            </Route>
          </AppWrapper>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
