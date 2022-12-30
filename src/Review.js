import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SubComponentsPickers from "./DatePicker";

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please choose a reservation date
      </Typography>
      <SubComponentsPickers align="center" />
    </React.Fragment>
  );
}
