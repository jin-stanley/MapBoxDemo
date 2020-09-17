import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { ReactComponent as CloeseLogo } from "../../img/svg/x.svg";

const InfoCard = (props) => {
  const { info } = props;
  const { properties } = info;

  // Here using ref to catch hight of header and using calc getting body height (100% - header.height)
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  const classes = useStyles({ headerHeight });

  // Here return the data what we need
  const DetailsData = () => {
    let result = [];
    for (const [key, value] of Object.entries(properties.project)) {
      let obj = {
        key,
        value,
      };
      result.push(obj);
    }

    return result;
  };

  let mockDetailsData = DetailsData();

  return (
    <div className={classes.drawerWrapper}>
      <div
        className={classes.closeIcon}
        onClick={() => props.handleCloseInfoCard()}
      >
        <CloeseLogo />
      </div>
      <div ref={headerRef}>
        <div className={classes.header}>{properties.project.Type}</div>
        <div className={classes.subheader}>{properties.project.Title}</div>
        <br />
        <Divider />
      </div>
      <div className={classes.detailsWrapper}>
        <div className={classes.details}>
          {mockDetailsData.map((data, key) => {
            return (
              <React.Fragment key={key}>
                <div className={classes.detailsRow}>
                  <div className={classes.detailsKey}>{data.key}</div>
                  <div className={classes.detailsValue}>{data.value}</div>
                </div>
                {mockDetailsData.length - key !== 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  drawerWrapper: {
    zIndex: 2,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    width: "320px",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 0,
    right: -24,
    width: "24px",
    height: "24px",
    background: "#1F4B5C",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "& svg": {
      width: "16px",
      height: "16px",
      fill: "#fff",
    },
  },
  header: {
    maxWidth: "280px",
    padding: "8px 8px 0px 8px",
    fontSize: "12px",
  },
  subheader: {
    padding: "8px 8px 0px 8px",
    fontWeight: 800,
  },
  detailsWrapper: (props) => ({
    padding: "16px",
    height: `calc(100% - ${props.headerHeight}px)`,
    flex: "1 1 0",
    overflow: "auto",
  }),
  details: {
    borderRadius: "8px",
    border: "1px solid #ddd",
    padding: "8px",
  },
  detailsRow: {
    display: "flex",
    flexDirection: "row",
  },
  detailsKey: {
    width: "35%",
    fontSize: "12px",
    fontWeight: 800,
  },
  detailsValue: {
    width: "65%",
    fontSize: "10px",
    fontWeight: 100,
  },
});

export default InfoCard;
