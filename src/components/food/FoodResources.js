/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import InfoScreen from "../InfoScreen";
import BarGraph from "../bargraph/BarGraph";
import BarSegment from "../bargraph/BarSegment";
import { Grid, Segment, Divider } from "semantic-ui-react";
import "./FoodHome.css";

class FoodResources extends Component {
  render() {
    return (
      <InfoScreen>
        <h1>FOOD - HELP!</h1>
        <h3>
          Where to start transitioning away from meat and towards a plant-based
          diet
        </h3>
        <h4>How would you characterize your diet?</h4>
      </InfoScreen>
    );
  }
}

export default FoodResources;
