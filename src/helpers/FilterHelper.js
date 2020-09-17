export const FilterHelper = (mockData, filters) => {
  let newMockData = mockData;
  if (filters.title_contains !== "") {
    newMockData = newMockData.filter((data) =>
      data.properties.project.Title.includes(filters.title_contains)
    );
  }
  if (filters.stage !== "") {
    newMockData = newMockData.filter(
      (data) => data.properties.project.Stage === filters.stage
    );
  }
  if (filters.dev_type !== "") {
    newMockData = newMockData.filter(
      (data) => data.properties.project["Dev. Type"] === filters.dev_type
    );
  }
  if (filters.ownership !== "") {
    newMockData = newMockData.filter(
      (data) => data.properties.project["Ownership"] === filters.ownership
    );
  }
  if (filters.value[0] + filters.value[1] !== 0) {
    newMockData = newMockData.filter(
      (data) =>
        Number(data.properties.project.Value) >= filters.value[0] &&
        Number(data.properties.project.Value) <= filters.value[1]
    );
  }
  if (filters.floor_area[0] + filters.floor_area[1] !== 0) {
    newMockData = newMockData.filter(
      (data) =>
        Number(data.properties.project["Floor Area"]) >=
          filters.floor_area[0] &&
        Number(data.properties.project["Floor Area"]) <= filters.floor_area[1]
    );
  }
  if (filters.site_area[0] + filters.site_area[1] !== 0) {
    newMockData = newMockData.filter(
      (data) =>
        Number(data.properties.project["Site Area"]) >= filters.site_area[0] &&
        Number(data.properties.project["Site Area"]) <= filters.site_area[1]
    );
  }

  return newMockData;
};

export const selectItemsCatcher = (mockData) => {
  let Ownerships = [];
  let DevTypes = [];
  let Status = [];
  let Stages = [];
  let ValueRange = [];
  let FloorAreaRange = [];
  let SiteAreaRange = [];

  mockData.map((x) => {
    Ownerships.push(x.properties.project["Ownership"]);
    DevTypes.push(x.properties.project["Dev. Type"]);
    Status.push(x.properties.project["Status"]);
    Stages.push(x.properties.project["Stage"]);
    ValueRange.push(Number(x.properties.project["Value"]));
    FloorAreaRange.push(Number(x.properties.project["Floor Area"]));
    SiteAreaRange.push(Number(x.properties.project["Site Area"]));

    return null;
  });
  Ownerships = Array.from(new Set(Ownerships));
  DevTypes = Array.from(new Set(DevTypes));
  Status = Array.from(new Set(Status));
  Stages = Array.from(new Set(Stages));
  ValueRange = [
    Math.min.apply(null, Array.from(new Set(ValueRange))),
    Math.max.apply(null, Array.from(new Set(ValueRange))),
  ];
  FloorAreaRange = [
    Math.min.apply(null, Array.from(new Set(FloorAreaRange))),
    Math.max.apply(null, Array.from(new Set(FloorAreaRange))),
  ];
  SiteAreaRange = [
    Math.min.apply(null, Array.from(new Set(SiteAreaRange))),
    Math.max.apply(null, Array.from(new Set(SiteAreaRange))),
  ];

  return {
    Ownerships,
    DevTypes,
    Status,
    Stages,
    ValueRange,
    FloorAreaRange,
    SiteAreaRange,
  };
};
