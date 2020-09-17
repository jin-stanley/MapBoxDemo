import React from "react";
import renderer from "react-test-renderer";

import MapTooBox from "../../components/MapTooBox";

it("MapTooBox can render success", () => {
  const tree = renderer.create(<MapTooBox />).toJSON();
  expect(tree).toMatchSnapshot();
});
