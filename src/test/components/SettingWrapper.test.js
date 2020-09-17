import React from "react";
import renderer from "react-test-renderer";

import SettingWrapper from "../../components/SettingWrapper";

it("SettingWrapper can render success", () => {
  const tree = renderer.create(<SettingWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
