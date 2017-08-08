/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import Header from "./components/header/Header";
import HomeGraph from "./components/bargraph/HomeGraph";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <p className="App-intro">
          EcoUp PDX is a resource to help Portlanders learn how to reduce our
          environmental footprint.
          <br />
          Per capita, Americans emit 20.52 million pounds of CO2 equivalent
          greenhouse gases per year.
          <br />
        </p>
        <div className="Bar-graph">
          <HomeGraph />
        </div>
      </div>
    );
  }
}

export default App;
