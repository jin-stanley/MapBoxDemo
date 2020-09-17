/***
 * Using for display filter form
 */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SettingWrapper from "../SettingWrapper";
import {
  TextField,
  MenuItem,
  Select,
  Button,
  Divider,
  Slider,
} from "@material-ui/core";

const FiltersPanel = (props) => {
  const classes = useStyles();

  // Here set form init value
  useEffect(() => {
    setFormValue(props.filters);
  }, [props.filters]);

  const [formValue, setFormValue] = useState({
    title_contains: "",
    stage: "",
    dev_type: "",
    ownership: "",
    value: [0, 100],
    floor_area: [0, 100],
    site_area: [0, 100],
  });

  const handleChangeValue = (e, field) => {
    const newFormValue = formValue;
    newFormValue[field] = e.target.value;
    setFormValue({ ...newFormValue });
  };

  const handleSubmite = () => {
    props.setFilters(formValue);
    props.handleCloseSetting();
  };

  const handleCancle = () => {
    props.handleCloseSetting();
  };

  return (
    <SettingWrapper
      name="Filters"
      handleCloseSetting={props.handleCloseSetting}
    >
      <div className={classes.container}>
        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>Title Contains: </div>
          <TextField
            value={formValue.title_contains}
            className={classes.controller}
            margin="dense"
            variant="outlined"
            onChange={(e) => handleChangeValue(e, "title_contains")}
          />
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>Stage: </div>
          <Select
            className={classes.controller}
            margin="dense"
            variant="outlined"
            value={formValue.stage}
            onChange={(e) => handleChangeValue(e, "stage")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {!!props.formSelects["Stages"] &&
              props.formSelects.Stages.map((stage, key) => {
                return (
                  <MenuItem key={key} value={stage}>
                    {stage}
                  </MenuItem>
                );
              })}
          </Select>
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>Ownership: </div>
          <Select
            className={classes.controller}
            margin="dense"
            variant="outlined"
            value={formValue.ownership}
            onChange={(e) => handleChangeValue(e, "ownership")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {!!props.formSelects["Ownerships"] &&
              props.formSelects.Ownerships.map((ownership, key) => {
                return (
                  <MenuItem key={key} value={ownership}>
                    {ownership}
                  </MenuItem>
                );
              })}
          </Select>
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>Dev. Type: </div>
          <Select
            className={classes.controller}
            margin="dense"
            variant="outlined"
            value={formValue.dev_type}
            onChange={(e) => handleChangeValue(e, "dev_type")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {!!props.formSelects["DevTypes"] &&
              props.formSelects.DevTypes.map((devType, key) => {
                return (
                  <MenuItem key={key} value={devType}>
                    {devType}
                  </MenuItem>
                );
              })}
          </Select>
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>
            Value:
            <br />
            <span>({`${formValue.value[0]} - ${formValue.value[1]}`})</span>
          </div>
          <div className={classes.controller}>
            <Slider
              value={formValue.value}
              onChange={(e, newValue) =>
                setFormValue({ ...formValue, value: newValue })
              }
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={
                !!props.formSelects["ValueRange"]
                  ? props.formSelects["ValueRange"][0]
                  : 0
              }
              step={500}
              max={
                !!props.formSelects["ValueRange"]
                  ? props.formSelects["ValueRange"][1]
                  : 1000
              }
            />
          </div>
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>
            Floor Area:
            <br />
            <span>
              ({`${formValue.floor_area[0]} - ${formValue.floor_area[1]}`})
            </span>
          </div>
          <div className={classes.controller}>
            <Slider
              value={formValue.floor_area}
              onChange={(e, newValue) =>
                setFormValue({ ...formValue, floor_area: newValue })
              }
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={
                !!props.formSelects["FloorAreaRange"]
                  ? props.formSelects["FloorAreaRange"][0]
                  : 1000
              }
              step={500}
              max={
                !!props.formSelects["FloorAreaRange"]
                  ? props.formSelects["FloorAreaRange"][1]
                  : 1000
              }
            />
          </div>
        </div>

        <div className={classes.controllerWrapper}>
          <div className={classes.controllerName}>
            Site Area:
            <br />
            <span>
              ({`${formValue.site_area[0]} - ${formValue.site_area[1]}`})
            </span>
          </div>
          <div className={classes.controller}>
            <Slider
              value={formValue.site_area}
              onChange={(e, newValue) =>
                setFormValue({ ...formValue, site_area: newValue })
              }
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={
                !!props.formSelects["SiteAreaRange"]
                  ? props.formSelects["SiteAreaRange"][0]
                  : 1000
              }
              step={500}
              max={
                !!props.formSelects["SiteAreaRange"]
                  ? props.formSelects["SiteAreaRange"][1]
                  : 1000
              }
            />
          </div>
        </div>
      </div>

      <Divider />

      <div className={classes.ButtonWrapper}>
        <Button variant="contained" color="secondary" onClick={handleCancle}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmite}>
          Confirm
        </Button>
      </div>
    </SettingWrapper>
  );
};

const useStyles = makeStyles({
  container: {
    height: "320px",
    minWidth: "240px",
    position: "relative",
    flex: "1 1 0",
    overflow: "auto",
  },
  controllerWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "12px 0",
  },
  controllerName: {
    width: "30%",
    fontSize: "12px",
    fontWeight: 800,
    "& span": {
      fontSize: "10px",
    },
  },
  controller: {
    width: "70%",
    margin: "8px",
  },
  ButtonWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0",
    justifyContent: "space-between",
  },
});

export default FiltersPanel;
