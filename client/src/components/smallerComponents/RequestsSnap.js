import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Event } from "@material-ui/icons";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
    marginBottom: "3%",
    marginTop: "2%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#172231"
  },
  table: {
    minWidth: "100%"
  }
}));

//a current list of time off requests

export default function SchedSnap({ id }) {
  const classes = useStyles();
  const [schedData, setSchedData] = useState([]);

  useEffect(() => {
    axios.get(`/api/previousrequests/${id}`).then(res => {
      setSchedData(res.data);
      console.log(res.data);
    });
  }, []);

  const setReason = reason => {
    if (reason === 1) {
      return "Approved";
    } else if (reason === 0) {
      return "Denied";
    } else {
      return "Pending Review";
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Event />
          </Avatar>
        }
        title="Upcoming Requests"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedData.map(schedule => {
                let date = new Date(schedule.day_req).toDateString();
                let reason = schedule.emp_reason;
                let status = setReason(schedule.approved);
                return (
                  <TableRow>
                    <TableCell>{date}</TableCell>
                    <TableCell>{reason}</TableCell>
                    <TableCell align="right">{status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          If there is a discrepancy with your schedule, please speak with your
          leadership team.
        </Typography>
      </CardContent>
    </Card>
  );
}
