import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SettingWrapper from "../SettingWrapper";

const LayersPanel = (props) => {
  const classes = useStyles();

  // Here Using mock data for now, we can set real data by api
  const layerStyles = [
    {
      id: 1,
      name: "Satellite View",
      url: "mapbox://styles/stanleyjin/ckf4whmdl21w519qhwpvbmruo",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/%E9%95%87%E5%B7%B4_%E5%8D%AB%E6%98%9F%E5%9B%BE.JPG",
    },
    {
      id: 2,
      name: "Simple View",
      url: "mapbox://styles/stanleyjin/ckf4wz3jn13wt19o4ha6xsp9q",
      img:
        "https://crmfile.alicdn.com/crmfile-open/wmqbbs/windid/1809/thread/309_2645085_d232b975e15394a.jpg",
    },
  ];

  return (
    <SettingWrapper name="Layers" handleCloseSetting={props.handleCloseSetting}>
      <div className={classes.container}>
        {layerStyles.map((layerStyle) => {
          return (
            <div
              key={layerStyle.id}
              className={classes.layerItem}
              onClick={() => props.handleChangeLayerStyle(layerStyle.url)}
            >
              <div
                className={classes.layerItemPic}
                style={{
                  backgroundImage: `url(${layerStyle.img})`,
                }}
              />
              <div
                className={classes.layerItemName}
                style={{
                  color: props.selectedLayer === layerStyle.url && "#1f4b5c",
                }}
              >
                {layerStyle.name}
                {props.selectedLayer === layerStyle.url && (
                  <span>
                    <br />
                    (Current)
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SettingWrapper>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "wrap",
  },
  layerItem: {
    display: "flex",
    alignItems: "center",
    margin: "8px",
    cursor: "pointer",
    "&:hover": {
      color: "#7d3f13",
    },
  },
  layerItemPic: {
    width: "72px",
    height: "72px",
    backgroundSize: "cover",
    backgroundPosition: "right top",
    borderRadius: "8px",
  },
  layerItemName: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 800,
    margin: "8px",
    "& span": {
      fontSize: "10px",
    },
  },
});

export default LayersPanel;
