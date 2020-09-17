/***
 * Using for FilterButton and LayersButton
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as CloeseLogo } from "../../img/svg/x.svg";

const SettingWrapper = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{props.name}</p>
        <CloeseLogo
          className={classes.closeIcon}
          onClick={() => props.handleCloseSetting()}
        />
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    minWidth: "320px",
    // maxHeight: "420px",
    position: "absolute",
    bottom: 124,
    right: 16,
    zIndex: 3,
    borderRadius: "8px",
    background: "#FFFFFF",
  },
  header: {
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    background: "#1F4B5C",
    color: "#fff",
    padding: "4px 0",
    position: "relative",
  },
  content: {
    height: "100%",
    padding: "8px",
  },
  closeIcon: {
    position: "absolute",
    right: 16,
    width: "12px",
    height: "12px",
    fill: "#fff",
    cursor: "pointer",
  },
});

export default SettingWrapper;
