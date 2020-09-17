import React from "react";
import "./theme/main.scss";

import AppWrapper from "./components/AppWrapper";
import MapBox from "./components/MapBox";

function App() {
  return (
    <React.Fragment>
      <AppWrapper>
        <MapBox />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
