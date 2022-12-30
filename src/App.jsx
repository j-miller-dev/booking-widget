import React from "react";
import {
  Typography,
  AppBar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import Checkout from "./Checkout";

import ReactDOM from "react-dom/client";

import useStyles from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Checkout />);

const App = () => {
  return;
};

export default App;
