import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default props => (
  <AppBar position="static" >
    <Toolbar
      position="static"
      style={{
        backgroundColor: "#004156"
      }}
    >
      <Typography align="center" variant="h1" color="inherit">
        WiClean
      </Typography>
    </Toolbar>
  </AppBar>
);
