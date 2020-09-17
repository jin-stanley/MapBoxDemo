import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import { withRouter } from "react-router";

import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppWrapper = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  // Here set different view of sidebar
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ fill: "#fff" }} />
            ) : (
              <ChevronLeftIcon style={{ fill: "#fff" }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: "Map Box", url: "/mapbox" },
            { name: "Analytics", url: "/analytics" },
          ].map((item, index) => (
            <Link key={index} to={`${item.url}`} className={classes.link}>
              <ListItem
                button
                style={
                  props.location.pathname === item.url
                    ? {
                        background: "#fff",
                        color: "#1F4B5C",
                      }
                    : { background: "#1F4B5C", color: "#fff" }
                }
              >
                <ListItemIcon>
                  {index === 0 && (
                    <MapIcon
                      style={{
                        fill:
                          props.location.pathname === item.url
                            ? "#1F4B5C"
                            : "#fff",
                      }}
                    />
                  )}{" "}
                  {index === 1 && (
                    <TimelineIcon
                      style={{
                        fill:
                          props.location.pathname === item.url
                            ? "#1F4B5C"
                            : "#fff",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#1F4B5C",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#1F4B5C",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",

    width: "56px",
    background: "#1F4B5C",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    height: "100vh",
    paddingTop: "64px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default withRouter(AppWrapper);
