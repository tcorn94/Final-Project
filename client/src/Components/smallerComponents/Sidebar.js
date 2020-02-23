import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import {
  AccessTime,
  Event,
  Announcement,
  Email,
  FolderShared,
  ContactPhone,
  LocalAtm,
  Star,
  Home,
  Settings
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { IconButton } from "material-ui";

// bg color #182231  side color #3F51B5

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#182231"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#182231"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  buttonColor: {
    backgroundColor: "white",
    textcolor: "white"
  },
  spaceItems: {
    justifyContent: "space-between"
  },
  listmargin: {
    marginTop: "30%"
  },
  iconColor: {
    fill: "white"
  },
  menuButton: {
    fill: "white",
    fontSize: "40px"
  }
}));

export default function Sidebar() {
  const classes = useStyles();

  const linkHandler = text => {
    if (text === "Home") {
      return "/dashboard";
    } else if (text === "My Schedule") {
      return "/schedule/1";
    } else if (text == "My Documents") {
      return "/documents";
    } else if (text == "My Pay") {
      return "/";
    } else if (text == "My Info") {
      return "/contact/1";
    } else if (text == "Benefits") {
      return "/";
    } else if (text == "Request Time") {
      return "/timeoff/1";
    } else if (text == "Announcements") {
      return "/annoucements";
    } else {
      return "/inbox";
    }
  };
  const iconHandler = text => {
    if (text === "Home") {
      return (
        <IconButton component={Link} to="/dashboard">
          <Home className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "My Schedule") {
      return (
        <IconButton component={Link} to="/schedule/1">
          <AccessTime className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "My Documents") {
      return (
        <IconButton component={Link} to="/documents">
          <FolderShared className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "My Pay") {
      return (
        <IconButton>
          <LocalAtm className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "My Info") {
      return (
        <IconButton component={Link} to="/contact/1">
          <ContactPhone className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "Benefits") {
      return (
        <IconButton>
          <Star className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "Request Time") {
      return (
        <IconButton component={Link} to="/timeoff/1">
          <Event className={classes.iconColor} />
        </IconButton>
      );
    } else if (text == "Announcements") {
      return (
        <IconButton component={Link} to="/annoucements">
          <Announcement className={classes.iconColor} />
        </IconButton>
      );
    } else {
      return (
        <IconButton component={Link} to="/">
          <Email className={classes.iconColor} />
        </IconButton>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.spaceItems}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <Settings className={classes.menuButton} />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            GrindHub
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/"
            className={classes.buttonColor}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.listmargin}>
          {[
            "Home",
            "My Schedule",
            "Request Time",
            "My Info",
            "My Documents",
            "Announcements",
            "Benefits",
            "Inbox"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconHandler(text)}</ListItemIcon>
              <Link
                style={{ textDecoration: "none" }}
                to={() => linkHandler(text)}
              >
                <ListItemText style={{ color: "white" }} primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
