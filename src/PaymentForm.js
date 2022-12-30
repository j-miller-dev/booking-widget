import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose a Time
      </Typography>
      <Grid>
        <Grid item xs={8} align="center">
          <Button variant="outlined">11:00AM</Button>
          <Button variant="outlined">11:30AM</Button>
          <Button variant="outlined">12:00PM</Button>
          <Button variant="outlined">12:30PM</Button>
          <Button variant="outlined">01:00PM</Button>
          <Button variant="outlined">01:30PM</Button>
          <Button variant="outlined">02:00PM</Button>
          <Button variant="outlined">02:30PM</Button>
          <Button variant="outlined">03:00PM</Button>
          <Button variant="outlined">03:30PM</Button>
          <Button variant="outlined">04:00PM</Button>
          <Button variant="outlined">04:30PM</Button>
          <Button variant="outlined">05:00PM</Button>
          <Button variant="outlined">05:30PM</Button>
          <Button variant="outlined">06:00PM</Button>
          <Button variant="outlined">06:30PM</Button>
          <Button variant="outlined">07:00PM</Button>
          <Button variant="outlined">07:30PM</Button>
          <Button variant="outlined">08:00PM</Button>
          <Button variant="outlined">08:30PM</Button>
          <Button variant="outlined">09:00PM</Button>
          <Button variant="outlined">09:30PM</Button>
          <Button variant="outlined">10:00PM</Button>
          <Button variant="outlined">10:30PM</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
