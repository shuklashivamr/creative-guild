import React, { Component } from "react";
import ConfigView from "./Components/ConfigView";
import ConfigCard from "./Components/ConfigCard";
import "./App.css";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeatured: false,
      config: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("./Data/config.json");
    const json = await response.json();
    this.setState({ data: json });
  }

  onshow = () => {
    this.setState({ isFeatured: !this.state.isFeatured });
  };

  render() {
    return (
      <div className="Appcolor">
        <header className="App-heade">
          <Grid item xs={false} sm={12}>
            <ConfigView config={this.state.config} />
            <div className="buttonstyle">
              <Button
                onClick={this.onshow}
                variant="outlined"
                color="secondary"
              >
                ❤️
              </Button>
            </div>
          </Grid>

          <section className="contentsection">
            <ConfigCard
              isFeatured={this.state.isFeatured}
              config={this.state.config}
            />
          </section>
        </header>
      </div>
    );
  }
}

export default App;
