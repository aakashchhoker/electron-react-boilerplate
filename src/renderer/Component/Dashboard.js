import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Image, Row } from "antd";
import { KeyboardArrowDown, MenuOpen } from "@material-ui/icons";
import { Button, TextField } from "@mui/material";
import { ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";


const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#fff",
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    backgroundColor: "grey",
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#eeeeee",
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto",
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

const Dashboard = (props) => {
  const [state, setState] = useState({ open: true });

  const handleDrawerOpen = () => {
    setState({ open: true });
  };

  const handleDrawerClose = () => {
    setState({ open: false });
  };

 

  const { classes } = props;
  console.log("this props", props);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          state.open && classes.appBarShift
        )}
      >
        <Toolbar disableGutters={!state.open} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              state.open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {/* Dashboards */}
          </Typography>
          {/* <IconButton > */}
          {/* <Badge badgeContent={4} color="secondary"> */}
          {/* <NotificationsIcon /> */}
          <Button endIcon={<KeyboardArrowDown />}>Larissa</Button>
          {/* </Badge> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        style={{ backgroundColor: "#eeeeee" }}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !state.open && classes.drawerPaperClose
          ),
        }}
        open={state.open}
      >
        <div className={classes.toolbarIcon}>
          <Image
            preview={false}
            src="https://superreach.com/wp-content/themes/superreach/images/logo.svg"
          />
          <IconButton onClick={handleDrawerClose}>
            <MenuOpen />
          </IconButton>
        </div>

        <List>
          <a href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </a>

          <a
            href="/customer"
            style={{ color: "black", textDecoration: "none" }}
          >
          {/* <Link to="/customer"> */}
          <ListItem button>
              <ListItemText primary="Customers" />
            </ListItem>
          {/* </Link> */}
           
          </a>
          <ListItem button>
            <ListItemText primary="Learning" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reporting" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Employees" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {props.children}
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
