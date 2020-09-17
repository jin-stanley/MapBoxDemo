import React from "react";
import renderer from "react-test-renderer";

import FiltersPanel from "../../components/FiltersPanel";

it("FiltersPanel can render success", () => {
  const tree = renderer
    .create(
      <FiltersPanel
        formSelects={{
          DevTypes: ["a", "b"],
          FloorAreaRange: [1, 2],
          Ownerships: ["a", "b"],
          Stages: ["a", "b"],
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
