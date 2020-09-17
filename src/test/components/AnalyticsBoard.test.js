import React from "react";
import renderer from "react-test-renderer";

import AnalyticsBoard from "../../components/AnalyticsBoard";

it("AnalyticsBoard can render success", () => {
  const tree = renderer.create(<AnalyticsBoard />).toJSON();
  expect(tree).toMatchSnapshot();
});
