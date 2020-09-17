import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { makeStyles } from "@material-ui/core/styles";

import * as mockDataJson from "../../mock/fulldata.json";
import InfoCard from "../InfoCard";
import FiltersPanel from "../FiltersPanel";
import LayersPanel from "../LayersPanel";
import MapTooBox from "../MapTooBox";

import { ReactComponent as LocationLogo } from "../../img/svg/location.svg";
import { ReactComponent as PinLogo } from "../../img/svg/pin.svg";

import { FilterHelper, selectItemsCatcher } from "../../helpers/FilterHelper";

const mockData = mockDataJson.default.features;

const MapBox = () => {
  const classes = useStyles();

  // Here Using Local Json Data as MockData
  const [propertiesData, setPropertiesData] = useState(mockData);

  // Here set Filter for data
  const [filters, setFilters] = useState({
    title_contains: "",
    stage: "",
    dev_type: "",
    ownership: "",
    value: [0, 0],
    floor_area: [0, 0],
    site_area: [0, 0],
  });

  // Here auto set all filter select items
  const [formSelects, setFormSelects] = useState({});

  // Here set location Info Card open and closed
  const [inforDrawerOpen, setInforDrawerOpen] = useState(false);

  // Here set item info (we will using hooks to fetch real data by ID in the future)
  const [propertyInfo, setPropertyInfo] = useState(null);

  // Here set filter pannel open and closed
  const [filtersPannelOpen, setFiltersPannelOpen] = useState(false);

  // Here set layers pannel open and closed
  const [layersPannelOpen, setLayersPannelOpen] = useState(false);

  // Here set different map style, we provide 2 different view for now
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/stanleyjin/ckf4wz3jn13wt19o4ha6xsp9q"
  );

  // Here is the default view value for mapbox
  const [viewport, setViewport] = useState({
    latitude: -33.87,
    longitude: 151.207,
    width: "100%",
    height: "100%",
    zoom: 15,
  });

  // Here update filter if users choose different condations.
  useEffect(() => {
    let newMockData = FilterHelper(mockData, filters);
    setPropertiesData(newMockData);
  }, [filters]);

  // Here catch all select ittems auto by selectItemsCatcher
  useEffect(() => {
    let selectItemsGroup = selectItemsCatcher(mockData);
    setFormSelects(selectItemsGroup);
  }, []);

  const toggleFiltersPannel = () => {
    setFiltersPannelOpen(!filtersPannelOpen);
    setLayersPannelOpen(false);
  };

  const toggleLayersPannel = () => {
    setLayersPannelOpen(!layersPannelOpen);
    setFiltersPannelOpen(false);
  };

  const handleCloseSetting = () => {
    setFiltersPannelOpen(false);
    setLayersPannelOpen(false);
  };

  const handleOpenInfoCard = (data) => {
    setInforDrawerOpen(true);
    setPropertyInfo(data);
  };

  const handleCloseInfoCard = () => {
    setInforDrawerOpen(false);
    setPropertyInfo(null);
  };

  const handleChangeLayerStyle = (link) => {
    setMapStyle(link);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <MapTooBox
          toggleFiltersPannel={toggleFiltersPannel}
          toggleLayersPannel={toggleLayersPannel}
        />

        {inforDrawerOpen && (
          <InfoCard
            info={propertyInfo}
            handleCloseInfoCard={handleCloseInfoCard}
          />
        )}

        <div className={classes.mapWrapper}>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoic3RhbmxleWppbiIsImEiOiJja2Y0dmo5Z2MwN3hvMzZueHo5ZW5iemh3In0.pHTnvfvjTy4vGbAhdtxDhA"
            mapStyle={mapStyle}
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {propertiesData.map((data) => {
              return (
                <Marker
                  key={data.properties.id}
                  longitude={data.geometry.coordinates[0]}
                  latitude={data.geometry.coordinates[1]}
                >
                  {propertyInfo?.properties.id !== data.properties.id ? (
                    <LocationLogo
                      onClick={(e) => {
                        e.preventDefault();
                        handleOpenInfoCard(data);
                      }}
                      className={classes.logo}
                    />
                  ) : (
                    <PinLogo className={classes.logo} />
                  )}
                </Marker>
              );
            })}
            <div className={classes.navigationWrapper}>
              <NavigationControl
                onViewportChange={(viewport) => {
                  setViewport(viewport);
                }}
              />
            </div>
          </ReactMapGL>
        </div>
      </div>

      {filtersPannelOpen && (
        <FiltersPanel
          filters={filters}
          setFilters={setFilters}
          handleCloseSetting={handleCloseSetting}
          formSelects={formSelects}
        />
      )}

      {layersPannelOpen && (
        <LayersPanel
          selectedLayer={mapStyle}
          handleCloseSetting={handleCloseSetting}
          handleChangeLayerStyle={handleChangeLayerStyle}
        />
      )}
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  mapWrapper: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
  navigationWrapper: {
    position: "absolute",
    bottom: 16,
    left: 16,
    "& div button": {
      outline: "none",
    },
  },
});

export default MapBox;
