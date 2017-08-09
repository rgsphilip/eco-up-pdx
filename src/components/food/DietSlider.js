/* Copyright (c) 2017 Rachel Philip
This work is available under the "MIT license".
Please see the file COPYING in this distribution
for license terms. */
import React, { Component } from "react";
import _ from "lodash";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Button } from "semantic-ui-react";
import Circle from "../Circle";

class DietSlider extends Component {
  constructor(props) {
    super(props);
    this.translateSliderValue = this.translateSliderValue.bind(this);
    this.state = {
      volume: 4
    };
  }

  handleOnChange = value => {
    this.setState({
      volume: Math.max(value, 0)
    });
  };

  translateSliderValue(value) {
    const dietArray = [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Omnivore - Low Meat",
      "Omnivore - Medium Meat",
      "Omnivore - High Meat"
    ];
    return dietArray[value];
  }
  render() {
    let { volume } = this.state;
    return (
      <div>
        <Slider
          min={-1}
          max={5}
          step={1}
          value={volume}
          orientation="horizontal"
          tooltip={false}
          onChange={this.handleOnChange}
        />
        <div className="diet-type">
          {this.translateSliderValue(volume)}
        </div>
        <Button type="submit" color="violet">
          Submit
        </Button>

        <h4>
          {" "}Your annual carbon footprint is {}.
        </h4>
        <p style={{ display: "flex" }}>
          One <Circle style={{}} /> equals 15 pounds of carbon emissions:
        </p>
        <span style={{ display: "flex", flexWrap: "wrap" }}>
          {_.times(200, i => {
            return <Circle />;
          })}
        </span>
      </div>
    );
  }
}

export default DietSlider;
