//importing all of the necessary elements from the material UI package
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./smallerComponents/Sidebar";
import "./styles.css";
import SchedSnap from "./smallerComponents/SchedSnap";
import RequestsSnap from "./smallerComponents/RequestsSnap";
import Grid from "@material-ui/core/Grid";
import DashEmployeeotm from "./smallerComponents/DashEmployeeotm";
import NewAdminDashTable from "./smallerComponents/NewAdminDashTable";
import DashNewsCard from "./smallerComponents/DashNewsCard";

//this is the main dashboard for employees

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "2% auto",
      backgroundColor: "white"
    },
    width: "70%"
  },

  container: {
    width: "70%",
    height: "auto",
    margin: "0 auto",
    marginTop: "3%",
    marginBottom: "2%"
    
  }
}));

export default function DashComponent(props) {
  const classes = useStyles();
  useEffect(() => {
    if (!localStorage.getItem("userAuth")) {
      localStorage.clear();
      props.history.push("/");
    }
  }, []);
  return (
    <div className="col-xs-6 col-sm-4 col-md-3">
      <Sidebar id={props.match.params.id} />

      <Grid
        container
        className={classes.container}
        spacing={5}
        direction="row"
      >
        <Grid item sm={12}>
          <SchedSnap id={props.match.params.id} />
        </Grid>

        

        <Grid item sm={4} className={classes.container} direction="row">
          <DashEmployeeotm />
          
        </Grid>
        <Grid item sm={4} className={classes.container} direction="row">
         
          <DashNewsCard/>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "5%" }}
        className={classes.container}
        spacing={5}
        direction="row"
      >
        <Grid item sm={12}>
          <RequestsSnap id={props.match.params.id} />
        </Grid>
      </Grid>

      <Grid container className={classes.container} spacing={5} direction="row">
        <Grid item sm={12}>
          <NewAdminDashTable />
        </Grid>
      </Grid>
    </div>
  );
}
