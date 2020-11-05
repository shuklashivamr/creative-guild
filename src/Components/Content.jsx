import React, { Component } from "react";
import ConfigCard from "./ConfigCard";
import { Grid } from "@material-ui/core";

export class Content extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        <ConfigCard />
      </Grid>
    );
  }
}

export default Content;
