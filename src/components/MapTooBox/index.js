/***
 * Using for FilterPanel and LayersPanel
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as LayersLogo } from "../../img/svg/layers.svg";
import { ReactComponent as FiltersLogo } from "../../img/svg/levels.svg";

const MapTooBox = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        className={`${classes.filters} ${classes.settingWrapper}`}
        onClick={props.toggleFiltersPannel}
      >
        <FiltersLogo className={classes.logo} />
        <div>Filters</div>
      </div>
      <div
        className={`${classes.layers} ${classes.settingWrapper}`}
        onClick={props.toggleLayersPannel}
      >
        <LayersLogo className={classes.logo} />
        <div>Layers</div>
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  settingWrapper: {
    zIndex: 2,
    width: "64px",
    height: "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #bbb",
    borderRadius: "8px",
    cursor: "pointer",

    "&:hover": {
      border: "1px solid #aaa",
      backgroundColor: "#1F4B5C",
      color: "#fff",
      "& svg": {
        fill: "#fff",
      },
    },
  },
  layers: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    display: "flex",
    flexDirection: "column",
  },
  filters: {
    position: "fixed",
    bottom: "30px",
    right: "120px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
});

export default MapTooBox;
