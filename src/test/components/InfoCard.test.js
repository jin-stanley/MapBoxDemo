import React from "react";
import renderer from "react-test-renderer";

import InfoCard from "../../components/InfoCard";

it("InfoCard can render success", () => {
  const tree = renderer.create(<InfoCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
