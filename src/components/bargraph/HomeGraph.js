/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

//Homepage graph
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BarGraph from "./BarGraph";
import BarSegment from "./BarSegment";
import "./BarGraph.css";
import foodImage from "./../../img/tomato.jpg";
import transitImage from "./../../img/busstop.jpg";

class HomeGraph extends Component {
  constructor(props) {
    super(props);
    this.goToTransit = this.goToTransit.bind(this);
    this.goToFood = this.goToFood.bind(this);
  }

  goToTransit() {
    this.props.history.push("/transit");
  }
  goToFood() {
    this.props.history.push("/food");
  }

  render() {
    return (
      <div>
        <BarGraph height="60vh">
          <BarSegment
            name="food"
            width="50%"
            color="red"
            onClick={this.goToFood}
            image={foodImage}
          />
          <BarSegment
            name="transportation"
            width="50%"
            color="blue"
            onClick={this.goToTransit}
            image={transitImage}
          />
        </BarGraph>
      </div>
    );
  }
}
export default withRouter(HomeGraph);
