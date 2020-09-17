import React from "react";
import renderer from "react-test-renderer";

import MapBox from "../../components/MapBox";

it("MapBox can render success", () => {
  const tree = renderer.create(<MapBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
