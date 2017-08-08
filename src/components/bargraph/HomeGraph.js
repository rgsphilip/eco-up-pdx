/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BarGraph from "./BarGraph";
import BarSegment from "./BarSegment";
import "./BarGraph.css";
import foodImage from "./../../img/IMG_5599.JPG";
import transitImage from "./../../img/IMG_5593.JPG";
import applianceImage from "./../../img/IMG_5605.JPG";
import otherImage from "./../../img/IMG_5565.JPG";
class HomeGraph extends Component {
  constructor(props) {
    super(props);
    this.goToTransit = this.goToTransit.bind(this);
    this.goToFood = this.goToFood.bind(this);
    this.goToAppliances = this.goToAppliances.bind(this);
    this.goToOther = this.goToOther.bind(this);
  }

  goToTransit() {
    this.props.history.push("/transit");
  }
  goToFood() {
    this.props.history.push("/food");
  }
  //these all need to be updated
  goToAppliances() {
    this.props.history.push("/about");
  }
  goToOther() {
    this.props.history.push("/about");
  }

  render() {
    return (
      <div>
        <BarGraph height="2vh">
          <BarSegment width="20%" color="darkblue" onClick={this.goToFood} />
          <BarSegment width="40%" color="darkred" onClick={this.goToTransit} />
          <BarSegment
            width="20%"
            color="darkgreen"
            onClick={this.goToAppliances}
          />
          <BarSegment width="20%" color="darkorange" onClick={this.goToOther} />
        </BarGraph>

        <BarGraph height="60vh">
          <BarSegment
            name="food"
            width="20%"
            color="blue"
            onClick={this.goToFood}
            image={foodImage}
          />
          <BarSegment
            name="transportation"
            width="40%"
            onClick={this.goToTransit}
            image={transitImage}
          />
          <BarSegment
            name="home appliances"
            width="20%"
            color="green"
            onClick={this.goToAppliances}
            image={applianceImage}
          />
          <BarSegment
            name="other"
            width="20%"
            color="orange"
            onClick={this.goToOther}
            image={otherImage}
          />
        </BarGraph>
      </div>
    );
  }
}
export default withRouter(HomeGraph);
