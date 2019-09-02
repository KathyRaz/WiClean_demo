import React, { Component } from "react";
import patterns from "./store.json";
import PostList from "./PostLists";
import HistoryList from "./HistoryList";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import Header from "./Header";
const { Provider, Consumer } = React.createContext("color");

const ThresholdInput = ({ ParamName }) => (
  <Consumer>
    {({ params, update }) => (
      <label>
        <Typography variant="h4" color="primary" gutterBottom>
          {ParamName}:
        </Typography>
        <h1> </h1>

        <input
          style={{
            width: "200px",
            minHeight: "50px",
            margin: "30px auto",
            fontSize: "22px",
            backgroundColor: "white"
          }}
          type="range"
          min="0"
          max="100"
          value={params[ParamName]}
          onChange={e => update({ [ParamName]: e.target.value })}
        />
      </label>
    )}
  </Consumer>
);

const TimeInput = ({ ParamName }) => (
  <Consumer>
    {({ params, update }) => (
      <label>
        <Typography variant="h4" color="primary" gutterBottom>
          {ParamName}:
        </Typography>
        <h1> </h1>
        <select
          style={{
            width: "200px",
            minHeight: "50px",
            margin: "30px auto",
            fontSize: "22px"
          }}
          value={params[ParamName]}
          onChange={e => update({ [ParamName]: e.target.value })}
        >
          <option value="1-week">1-week</option>
          <option value="2-week">2-week</option>
          <option value="1-month">1-month</option>
          <option value="2-month">2-month</option>
        </select>
      </label>
    )}
  </Consumer>
);
const EntityInput = ({ ParamName }) => (
  <Consumer>
    {({ params, update }) => (
      <label>
        <Typography variant="h4" color="primary" gutterBottom>
          {ParamName}:
        </Typography>
        <h1> </h1>
        <select
          value={params[ParamName]}
          onChange={e => update({ [ParamName]: e.target.value })}
          style={{
            width: "200px",
            minHeight: "50px",
            margin: "30px auto",
            fontSize: "22px"
          }}
        >
          <option value="soccer_player">soccer_player</option>
          <option value="actor">actor</option>
          <option value="basketball_player">basketball_player</option>
          <option value="politician">politician</option>
          <option value="singer">singer</option>
        </select>
      </label>
    )}
  </Consumer>
);

const ParamDisplay = () => (
  <Consumer>
    {({ params: { Threshold, TimeFrame, Entity } }) => (
      <div style={{ align: "center" }}>
        <Paper>
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            We Got:
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Threshold= {Threshold}{"%"}
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            TimeFrame= {TimeFrame}{" "}
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            and Entity = {Entity}
          </Typography>
        </Paper>
        <div style={{ align: "center" }}>
          <HistoryList historyType={Entity} />
        </div>
      </div>
    )}
  </Consumer>
);

const ParamSelectorUI = props => (
  <main
    style={{
      backgroundColor: "#B7D4FF",
      width: "1520px",
      minHeight: "200px",
      align: "center"
    }}
  >
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <ThresholdInput ParamName="Threshold" />
      </Grid>
      <Grid item xs={4}>
        <TimeInput ParamName="TimeFrame" />
      </Grid>
      <Grid item xs={4}>
        <EntityInput ParamName="Entity" />
      </Grid>
    </Grid>
    <section>
      <ParamDisplay />
    </section>
    <div align="center">
      <button
        variant="outlined"
        style={{
          backgroundColor: "#2398AB",
          color: "#B5FBDD",
          width: "150px",
          align: "center",
          minHeight: "30px",
          boxSizing: "border-box"
        }}
        onClick={() => props.on_submit()}
      >
        Submit
      </button>
    </div>

    <PostList results={props.results} />
  </main>
);

class ParamSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Threshold: 30,
      TimeFrame: "1-week",
      Entity: "soccer_player",
      results: []
    };

    this.update = param => this.setState(param);
  }

  getData() {
    console.log("sup");
    console.log(this.state);
    console.log(patterns[0]);
    var res = patterns.filter(x => {
      return (
        x["entity"] === this.state.Entity &&
        x["threshold"]  > this.state.Threshold &&
        x["window_size"] === this.state.TimeFrame
      );
    });
    console.log(res);
    this.setState({
      results: res
    });
  }

  render() {
    const { update } = this;
    const params = this.state;

    return (
      <Provider value={{ params, update }}>
        <Header />
        <ParamSelectorUI
          on_submit={this.getData.bind(this)}
          results={this.state.results}
        />
      </Provider>
    );
  }
}

export default ParamSelector;
