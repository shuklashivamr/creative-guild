import React, { Component } from "react";
import config from "../Data/config.json";
import { Card, CardDeck } from "react-bootstrap";
import "../Styles/ConfigCard.css";
import { Grid } from "@material-ui/core";
import SentimentVeryDissatisfiedSharpIcon from "@material-ui/icons/SentimentVeryDissatisfiedSharp";

export class ConfigCard extends Component {
  onlyFeatured = () => {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          {config.album.map((data) => {
            return (
              <Grid item xs={12} sm={4} key={data.id}>
                {data.featured ? (
                  <CardDeck style={{ width: "18rem" }}>
                    <Card className="cardProperty">
                      <div className="carddiv">
                        <img
                          className="imgstyle"
                          variant="top"
                          src={data.img}
                        />
                        <div className="image-text">
                          <h3>
                            <b>{data.title}</b>
                          </h3>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Text className="card-text">
                          {data.description}

                          {data.featured ? (
                            <div>
                              <p
                                style={{
                                  float: "left",
                                }}
                              >
                                ❤️
                              </p>
                              <p style={{ float: "right", paddingRight: 2 }}>
                                {data.date}
                              </p>
                            </div>
                          ) : (
                            <div style={{ float: "right", paddingRight: 2 }}>
                              <p>{data.date}</p>
                            </div>
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                ) : (
                  <SentimentVeryDissatisfiedSharpIcon />
                )}
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          {this.props.isFeatured ? (
            <div>{this.onlyFeatured()}</div>
          ) : (
            <Grid container spacing={4}>
              {config.album.map((data) => {
                return (
                  <Grid item xs={12} sm={4} key={data.id}>
                    <CardDeck style={{ width: "18rem", borderRadius:10 }}>
                      <Card className="cardProperty">
                        <div className="carddiv">
                          <img
                            className="imgstyle"
                            variant="top"
                            src={data.img}
                          />
                          <div className="image-text">
                            <h3>
                              <b>{data.title}</b>
                            </h3>
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Text className="card-text">
                            {data.description}

                            {data.featured ? (
                              <div>
                                <p
                                  style={{
                                    float: "left",
                                  }}
                                >
                                  ❤️
                                </p>
                                <p style={{ float: "right", paddingRight: 2 }}>
                                  {data.date}
                                </p>
                              </div>
                            ) : (
                              <div style={{ float: "right", paddingRight: 2 }}>
                                <p>{data.date}</p>
                              </div>
                            )}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

export default ConfigCard;
