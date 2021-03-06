import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

//requests for days off and the ability to approve or deny those requests

export default function PrevRequests({ requests }) {
  function handleStatus(status) {
    if (status === 1) {
      return "Approved";
    } else if (status === 0) {
      return "Denied";
    } else {
      return "Pending Review";
    }
  }

  if (requests.length < 1) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="left">No Previous Reqeusts</TableCell>
        </TableRow>
      </TableBody>
    );
  } else {
    return (
      <TableBody>
        {requests.map(request => {
          let date = new Date(request.day_req).toDateString();
          let reason = request.emp_reason;
          let status = handleStatus(request.approved);
          return (
            <TableRow key={request.req_id}>
              <TableCell align="left">{date}</TableCell>
              <TableCell align="right">{reason}</TableCell>
              <TableCell align="right">{status}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}
