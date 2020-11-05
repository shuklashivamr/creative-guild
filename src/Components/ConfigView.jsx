import React, { Component } from "react";
import config from "../Data/config.json";
import Avatar from "@material-ui/core/Avatar";
import "../Styles/ConfigView.css";
import { Grid } from "@material-ui/core";

export class ConfigView extends Component {
  constructor() {
    super();
    this.state = { data: config.album };
  }

  render() {
    return (
      <Grid item xs={12} sm={12}>
        
        <section className="profile">
          <Grid item xs={12} sm={12}>
            <div className="div-style">
              <div className="row">
                <div className="col-1">
                  <Avatar
                    alt="Remy Sharp"
                    src={config.profile_picture}
                    style={{ height: "160px", width: "160px" }}
                  />
                </div>
                <div className="col-2">
                  <h1>{config.name}</h1>
                  <p>
                    Bio:
                    <br />
                    {config.bio}
                  </p>
                </div>
                <div className="col-3">
                  <div>
                    Phone:
                    <br />
                    <h5>{config.phone}</h5>
                    <br />
                    Email:
                    <br />
                    <h5>{config.email}</h5>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </section>
      </Grid>
    );
  }
}

export default ConfigView;
