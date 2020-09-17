import React from "react";
import renderer from "react-test-renderer";

import LayersPanel from "../../components/LayersPanel";

it("LayersPanel can render success", () => {
  const tree = renderer.create(<LayersPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
