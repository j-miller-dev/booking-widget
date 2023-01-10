import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function PaymentForm() {
  const handleClick = (event) => {
    // toggle styles on click
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "salmon";
      event.currentTarget.style.color = "white";
    }

    event.currentTarget.classList.add("my-class-1", "my-class-2");

    console.log(event.currentTarget.id);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose a Time
      </Typography>
      <Grid>
        <Grid item xs={8} align="center">
          <Button id="time-btn1100" onClick={handleClick} variant="outlined">
            11:00AM
          </Button>
          <Button id="time-btn1130" onClick={handleClick} variant="outlined">
            11:30AM
          </Button>
          <Button id="time-btn1200" onClick={handleClick} variant="outlined">
            12:00PM
          </Button>
          <Button id="time-btn1230" onClick={handleClick} variant="outlined">
            12:30PM
          </Button>
          <Button id="time-btn0100" onClick={handleClick} variant="outlined">
            01:00PM
          </Button>
          <Button id="time-btn0130" onClick={handleClick} variant="outlined">
            01:30PM
          </Button>
          <Button id="time-btn0200" onClick={handleClick} variant="outlined">
            02:00PM
          </Button>
          <Button id="time-btn0230" onClick={handleClick} variant="outlined">
            02:30PM
          </Button>
          <Button id="time-btn0300" onClick={handleClick} variant="outlined">
            03:00PM
          </Button>
          <Button id="time-btn0330" onClick={handleClick} variant="outlined">
            03:30PM
          </Button>
          <Button id="time-btn0400" onClick={handleClick} variant="outlined">
            04:00PM
          </Button>
          <Button id="time-btn0430" onClick={handleClick} variant="outlined">
            04:30PM
          </Button>
          <Button id="time-btn0500" onClick={handleClick} variant="outlined">
            05:00PM
          </Button>
          <Button id="time-btn0530" onClick={handleClick} variant="outlined">
            05:30PM
          </Button>
          <Button id="time-btn0600" onClick={handleClick} variant="outlined">
            06:00PM
          </Button>
          <Button id="time-btn0630" onClick={handleClick} variant="outlined">
            06:30PM
          </Button>
          <Button id="time-btn0700" onClick={handleClick} variant="outlined">
            07:00PM
          </Button>
          <Button id="time-btn0730" onClick={handleClick} variant="outlined">
            07:30PM
          </Button>
          <Button id="time-btn0800" onClick={handleClick} variant="outlined">
            08:00PM
          </Button>
          <Button id="time-btn0830" onClick={handleClick} variant="outlined">
            08:30PM
          </Button>
          <Button id="time-btn0900" onClick={handleClick} variant="outlined">
            09:00PM
          </Button>
          <Button id="time-btn0930" onClick={handleClick} variant="outlined">
            09:30PM
          </Button>
          <Button id="time-btn1000" onClick={handleClick} variant="outlined">
            10:00PM
          </Button>
          <Button id="time-btn1030" onClick={handleClick} variant="outlined">
            10:30PM
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
