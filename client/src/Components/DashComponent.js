//importing all of the necessary elements from the material UI package
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AccessTime, Event, Announcement, Email, FolderShared, ContactPhone, LocalAtm, Star} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import './styles.css';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
  
    },
  },

  girthy: {
    width: "3em",
    height: "3em",
    color: "#9F7CE1"

  },

  papery: {
    marginTop: "-15px",
    fontSize: "18px"
  }
 
}));

export default function DashComponent() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <Paper elevation={3} >
      <IconButton><AccessTime className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Schedule</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><FolderShared className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Documents</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><LocalAtm className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Pay</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><ContactPhone className={classes.girthy}/></IconButton>
      <h3 className={classes.papery} >Contact Info</h3>
      </Paper>
      
    </div>
    <div className= {classes.root}>
    <Paper elevation={3} >
      <IconButton><Star className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Benefits</h3>
      </Paper>
    <Paper elevation={3} >
      <IconButton><Event className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Time Off</h3>
      </Paper>
    <Paper elevation={3}>
    <IconButton><Email className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Inbox</h3>
      </Paper>
    <Paper elevation={3} >
    <IconButton><Announcement className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Announcements</h3>
      </Paper>
    </div>
    </div>
  
  );
}

//we will probably need minimum two rows of 4 paper elements

//here are some possible material IconButtons we could use

//